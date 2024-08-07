'use client';
import React, {useEffect, useState} from 'react';
import ProductsModel from "@/models/products/products.model";
import {ApiImage, transformCurrency} from "@/app/constants";
import Heading from "@/components/sections/Heading";
import Image from 'next/image';
import {Button} from "@/components/ui/button";
import {motion} from 'framer-motion';
import ZoomImage from "@/components/products/ZoomImage";
import CommentSection from "@/components/products/CommentSection";
import {ScrollArea} from "@/components/ui/scroll-area"
import {FaRegEye} from "react-icons/fa";
import DetailsFullComponents from "@/components/products/DetailsFullComponents";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {useAppDispatch} from "@/redux/hooks";
import {addToCart, saveCartToLocalStorage} from "@/redux/reducers/cart.reducer";
import {useRouter} from "next/navigation";
// import Alert from "@/components/Alert";
import toast, {Toaster} from "react-hot-toast";
import RelatedProducts from "@/components/RelatedProducts";


function Page({params}: { params: { id: string } }) {
    const router = useRouter();
    const limitDetail = 1;
    const [mainImageSrc, setMainImageSrc] = useState('');
    const [indexImage, setIndexImage] = useState(0);
    const [indexColor, setIndexColor] = useState(0);
    const [priceNow, setPriceNow] = useState('');
    const [priceSale, setPriceSale] = useState('');
    const [indexOption, setIndexOption] = useState(0);
    const [showDetail, setShowDetail] = useState(false);
    const [showZoom, setShowZoom] = useState(false);
    // const [showAlert, setShowAlert] = useState(false);
    const {data, isLoading, isError} = ProductsModel.GetProductById(params.id);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setMainImageSrc((ApiImage + data?.options[indexImage].image));
        setPriceNow(transformCurrency(Math.floor((((1 - (data?.sale_off / 100)) * parseInt(data?.options[0].price))) / 1000) * 1000));
        setPriceSale(transformCurrency(parseInt(data?.options[0].price.toString())));
    }, [data]);

    const switchImage = (index: number) => {
        setIndexImage(index);
        setMainImageSrc((ApiImage + data?.options[index].image));
    }

    let options = new Set(data?.options.map((option) => option.memory));
    let colors: {
        price: string,
        memory: string,
        color: string,
        image: string,
        quantity: number
    }[] = data?.options.filter((option) => option.memory === Array.from(options)[indexOption]);
    // let colors = data?.options.filter((option) => option.memory === Array.from(options)[indexOption])


    const handleAddCart = () => {
        let indexImage = data?.options.findIndex((option) =>
            option.color === colors[indexColor].color) || 0;
        const cartItem = {
            id_product: data?.id_product,
            name: data?.name,
            originPrice: parseFloat(data?.options[indexImage].price),
            salePrice: (((100 - data?.sale_off) / 100) * parseFloat(data?.options[indexImage].price)),
            image: data?.options[indexImage].image,
            memory: data?.options[indexImage].memory,
            color: data?.options[indexImage].color,
            stock: data?.options[indexImage].quantity,
            quantity: 1
        }
        dispatch(addToCart(cartItem));
        dispatch(saveCartToLocalStorage());
        console.log(123)
        toast.success('Đã thêm vào giỏ hàng thành công', {
            duration: 2000,
            className: 'text-2xl flex item-center',
            iconTheme: {
                primary: '#000',
                secondary: '#fff',
            },
        })
    }

    const handleByNow = () => {
        handleAddCart();
        setTimeout(() => {
            router.push('/checkout')
        }, 1500)
    }

    const handlePrice = (index: number) => {
        let indexImage = data?.options.findIndex((option) =>
            option.color === colors[index].color) || 0;
        setIndexColor(index);
        setPriceNow(transformCurrency(Math.floor((((1 - (data?.sale_off / 100)) * parseInt(data?.options[indexImage].price))) / 1000) * 1000));
        setPriceSale(transformCurrency(parseInt(data?.options[indexImage].price.toString())));
        setMainImageSrc((ApiImage + data?.options[indexImage].image));
        setIndexImage(indexImage);
    }

    const handleSwitchOption = (index: number) => {
        setIndexColor(0);
        setIndexOption(index);
        colors = data?.options.filter((option) => option.memory === Array.from(options)[index]);
        let indexImage = data?.options.findIndex((option) =>
            option.color === colors[0].color) || 0;
        setPriceNow(transformCurrency(Math.floor((((1 - (data?.sale_off / 100)) * parseInt(colors[0].price))) / 1000) * 1000));
        setPriceSale(transformCurrency(parseInt(colors[0].price.toString())));
        setMainImageSrc((ApiImage + colors[0].image));
        setIndexImage(indexImage);
    }

    if (isLoading) {
        return (
            <div className='text-3xl text-center'>
                đang tải ...
            </div>
        )
    }

    if (isError) {
        return (
            <div className='text-3xl text-center'>Sản phẩm không tồn tại</div>
        )
    }

    if (data) {
        return (
            <>
                <section className={'relative ' + `${showZoom ? 'h-screen' : ''}`}>
                    <section className="container">
                        <Heading title={'Chi tiết sản phẩm'}/>
                        <section className="mt-[4rem] h-max text-gray-700 w-full flex gap-20">
                            <div className="min-w-[43%] flex justify-between">
                                <ScrollArea className='max-h-[38rem] w-[21%]'>
                                    <div className="w-full h-max relative flex flex-col gap-5">
                                        {data.options.map((option, index) => (
                                            <motion.div
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                transition={{duration: 2}}
                                                key={index} className={`relative border border-solid border-gray-400 rounded-md shadow-md hover:border-orange-500
                                                cursor-pointer h-[100px] w-[100px] ${indexImage === index ? 'border-orange-500' : ''}`}
                                                onClick={() => switchImage(index)}>
                                                <Image fill
                                                       className={'object-contain m-auto max-h-[90px] max-w-[85px]'}
                                                       src={ApiImage + option.image} alt={''}/>
                                            </motion.div>
                                        ))}
                                    </div>
                                </ScrollArea>
                                <motion.div className="relative h-max min-w-[70%] shadow-md mx-auto w-max cursor-pointer
                                 transition-all ease-in-out delay-75 hover:scale-110 hover:shadow-2xl"
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            transition={{duration: 2}}
                                            onClick={() => setShowZoom(true)}
                                >
                                    <Image
                                        alt="ecommerce" width={380} height={400}
                                        className="object-contain object-center
                                             min-w-[38rem] max-h-[38rem] "
                                        src={mainImageSrc}/>
                                    {data.sale_off !== 0 && (
                                        <div className="absolute top-0 right-0 text-[1.4rem] font-semibold text-secondary
                                            px-2 py-1 rounded bg-gradient-to-r from-orange-400 to-red-400">
                                            {data.sale_off}%
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                            <div className="min-w-[53%] lg:mt-0">
                                <h2 className="text-2xl title-font text-gray-600 tracking-widest capitalize">{data.brand_name}</h2>
                                <h1 className="text-gray-900 text-[2.4rem] font-medium mb-1">{data.name}</h1>
                                <p className="flex items-center gap-3 mt-1">
                                    <FaRegEye className='text-3xl'/>
                                    <span className={'text-2xl'}>{data.views} lượt xem</span>
                                </p>
                                <div className="flex gap-8 mt-5">
                                    {Array.from(options).map((option, index) => (
                                        <div key={index} onClick={() => handleSwitchOption(index)}
                                             className={`border text-2xl border-solid border-gray-300 cursor-pointer p-5 rounded-md ` +
                                                 `${index === indexOption ? `border-orange-500` : ''}`}>
                                            {option}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[2rem] my-5 font-bold">Chọn màu để xem giá</p>
                                <div className="flex gap-5 mt-5 flex-wrap">
                                    {colors?.map((option, index) => {
                                        if (option.quantity > 0) {
                                            return (
                                                <div key={index} onClick={() => handlePrice(index)} data-index={index}
                                                     className={`flex gap-5 py-3 px-5 cursor-pointer rounded-md items-center
                                                  border border-solid border-gray-400 ${index === indexColor ? 'border-orange-500' : ''}`}>
                                                    <motion.div
                                                        className={`relative rounded-[1.2rem] shadow-md hover:border-orange-500
                                                cursor-pointer h-max w-max`}
                                                    >
                                                        <Image width={60} height={50}
                                                               className={'object-contain m-auto max-h-[60px] max-w-[50px]'}
                                                               src={ApiImage + option.image} alt={''}/>
                                                    </motion.div>
                                                    <div className="text-2xl">{option.color}</div>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={index}
                                                     className={`flex gap-5 py-3 px-5 cursor-pointer rounded-md items-center
                                                  border border-solid border-gray-300 opacity-60`}>
                                                    <motion.div
                                                        className={`relative rounded-[1.2rem] shadow-md hover:border-orange-500
                                                cursor-pointer h-max w-max`}
                                                    >
                                                        <Image width={60} height={50}
                                                               className={'object-contain m-auto max-h-[60px] max-w-[50px]'}
                                                               src={ApiImage + option.image} alt={''}/>
                                                    </motion.div>
                                                    <div className="text-2xl">{option.color}</div>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div
                                    className="py-1 px-10 text-center rounded-md border border-orange-500 border-solid mt-5 w-max">
                                    <p className="text-[2rem] text-orange-500 font-bold">{priceNow}</p>
                                    <s className="text-[1.4rem] font-bold">{priceSale}</s>
                                </div>
                                <div className="flex gap-5 mt-5">
                                    <Button onClick={handleByNow} size={'lg'} variant={'default'}>Mua ngay</Button>
                                    <Button onClick={handleAddCart} variant={'secondary'} className={'flex gap-3'}
                                            size={'lg'}>
                                        <span className={'text-2xl'}>Thêm vào giỏ hàng</span>
                                    </Button>
                                </div>
                            </div>
                        </section>
                        <section className="mt-[4rem] flex justify-between">
                            <CommentSection idProduct={data.id_product}/>
                            <div className="w-[30%]">
                                <h1 className="heading mb-1">Thông số kĩ thuật</h1>
                                <div
                                    className="grid grid-cols-1 gap-y-10 border border-gray-500 border-solid p-5 rounded-xl mt-5 text-2xl">
                                    {data.details?.map((details, index) => {
                                        if (index === 1) {
                                            return (
                                                <>
                                                    <div key={10} className="flex flex-col gap-5">
                                                        <h1 className="font-medium text-[2rem]">RAM & lưu trữ</h1>
                                                        <div className="grid grid-cols-1 gap-y-5">
                                                            <div className="flex justify-between">
                                                                <div className={`w-max min-w-[60%] py-2 
                                                                    px-5 rounded-md ` + "bg-gray-100"}>Dung lượng RAM
                                                                </div>
                                                                <div className={`w-max min-w-[40%] py-2
                                                                     px-5 rounded-md ` + "bg-gray-100"}>{data?.options[indexImage].memory.split('/')[0]}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-1 gap-y-5">
                                                            <div className="flex justify-between">
                                                                <div className={`w-max min-w-[60%] py-2 
                                                                    px-5 rounded-md `}>Bộ nhớ trong
                                                                </div>
                                                                <div className={`w-max min-w-[40%] py-2
                                                                     px-5 rounded-md `}>{data?.options[indexImage].memory.split('/')[1]}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }
                                        return (
                                            <div key={index} className="flex flex-col gap-5">
                                                <h1 className="font-medium text-[2rem]">{details.name}</h1>
                                                <div className="grid grid-cols-1 gap-y-5">
                                                    {details.detail.map((detail, index) => {
                                                        if (limitDetail >= index) {
                                                            return (
                                                                <div key={index} className="flex justify-between">
                                                                    <div className={`w-max min-w-[60%] py-2 
                                                                    px-5 rounded-md ` + `${index / 2 !== 0 ? "" :
                                                                        "bg-gray-100"}`}>{detail.name}</div>
                                                                    <div className={`w-max min-w-[40%] py-2
                                                                     px-5 rounded-md ` + `${index / 2 !== 0 ? "" :
                                                                        "bg-gray-100"}`}>{detail.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <Button onClick={() => setShowDetail(true)} variant={'secondary'}
                                        className="mt-5 w-full py-7 rounded text-3xl">Xem cấu hình chi
                                    tiết</Button>
                            </div>
                        </section>
                        <RelatedProducts/>
                    </section>
                </section>
                <ZoomImage imageSrc={mainImageSrc} showZoomImage={showZoom} setShowZoomImage={setShowZoom}/>
                <DetailsFullComponents memory={data?.options[indexImage].memory} showDetails={showDetail}
                                       setShowDetails={setShowDetail}
                                       details={data.details}/>
                {/*<Alert showAlert={showAlert} setShowAlert={setShowAlert}*/}
                {/*       subMessage={'Sản phẩm đã được thêm vào giỏ hàng của bạn. Bạn có thể truy cập vào giỏ hàng của mình để tiến hành thanh toán hoặc tiếp tục mua sắm'}*/}
                {/*       message={'Thêm vào giỏ hàng thành công'}/>*/}
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </>
        );
    }

}

export default Page;
