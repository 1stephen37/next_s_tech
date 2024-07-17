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

function Page({params}: { params: { id: string } }) {
    const limitDetail = 3;
    const [mainImageSrc, setMainImageSrc] = useState('');
    const [indexImage, setIndexImage] = useState(0);
    const [showDetail, setShowDetail] = useState(false);
    const [showZoom, setShowZoom] = useState(false);
    const {data, isLoading, isError} = ProductsModel.GetProductById(params.id);

    console.log(data, isLoading);

    useEffect(() => {
        setMainImageSrc((ApiImage + data?.options[indexImage].image));
    }, [data?.options[indexImage].image]);

    const switchImage = (index: number) => {
        setIndexImage(index);
        setMainImageSrc((ApiImage + data?.options[index].image));
    }

    let options = new Set(data?.options.map((option) => option.memory));
    console.log(options);

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
                            <h1 className="text-gray-900 text-[2.4rem] font-medium mb-1">{data.name + ' ' + data.options[indexImage].color + ' ' + data.options[indexImage].memory}</h1>
                            <p className="flex items-center gap-3 mt-1">
                                <FaRegEye className='text-3xl'/>
                                <span className={'text-2xl'}>{data.views} lượt xem</span>
                            </p>
                            <div className="flex gap-8 mt-5">
                                {Array.from(options).map((option, index) => (
                                    <div key={index}>
                                        {option}
                                    </div>
                                ))}
                            </div>
                            <s className="text-gray-900 block mt-3 text-[1.6rem] font-medium">{transformCurrency(parseInt(data.options[indexImage].price))}</s>
                            <p className="text-[2.4rem] text-orange-500 font-bold">{transformCurrency(Math.floor((((1 - (data.sale_off / 100)) * parseInt(data.options[indexImage].price))) / 1000) * 1000)}</p>
                            <div className="flex gap-5 mt-5 flex-wrap">
                                {data.options.map((option, index) => (
                                    <div key={index} onClick={() => switchImage(index)}
                                         className={`flex gap-5 py-3 px-5 cursor-pointer rounded-md items-center
                                              border border-solid border-gray-400 ${index === indexImage ? 'border-orange-500' : ''}`}>
                                        <motion.div
                                            className={`relative rounded-[1.2rem] shadow-md hover:border-orange-500
                                            cursor-pointer h-max w-max ${indexImage === index ? 'border-orange-500' : ''}`}
                                        >
                                            <Image width={60} height={50}
                                                   className={'object-contain m-auto max-h-[60px] max-w-[50px]'}
                                                   src={ApiImage + option.image} alt={''}/>
                                        </motion.div>
                                        <div className="">
                                            <div className="text-2xl">{option.color}</div>
                                            <div className="text-2xl">{option.memory}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-5 mt-5">
                                <Button size={'lg'} variant={'default'}>Mua ngay</Button>
                                <Button variant={'secondary'} size={'lg'}>Thêm vào giỏ hàng</Button>
                            </div>
                        </div>
                    </section>
                    <section className="mt-[4rem] flex justify-between">
                        <CommentSection idProduct={data.id_product}/>
                        <div className="w-[30%]">
                            <h1 className="heading mb-1">Thông số kĩ thuật</h1>
                            <div
                                className="grid grid-cols-1 gap-y-10 border border-gray-500 border-solid p-5 rounded-xl mt-5 text-2xl">
                                {data.details.map((details, index) => (
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
                                ))}
                            </div>
                            <Button onClick={() => setShowDetail(true)} variant={'secondary'}
                                    className="mt-5 w-full py-7 rounded text-3xl">Xem cấu hình chi
                                tiết</Button>
                        </div>
                    </section>
                </section>
                <ZoomImage imageSrc={mainImageSrc} showZoomImage={showZoom} setShowZoomImage={setShowZoom}/>
                <DetailsFullComponents showDetails={showDetail} setShowDetails={setShowDetail} details={data.details}/>
            </>
        );
    }

}

export default Page;
