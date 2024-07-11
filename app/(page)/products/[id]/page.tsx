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

function Page({params}: { params: { id: string } }) {
    const [mainImageSrc, setMainImageSrc] = useState('');
    const [indexImage, setIndexImage] = useState(0);
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
                            <s className="text-gray-900 block mt-3 text-[1.6rem] font-medium">{transformCurrency(parseInt(data.options[indexImage].price))}</s>
                            <p className="text-[2.4rem] text-orange-500 font-medium">{transformCurrency(Math.floor((((1 - (data.sale_off / 100)) * parseInt(data.options[indexImage].price))) / 1000) * 1000)}</p>
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
                            <p className="mt-5 text-2xl text-gray-600">{data.detail.description}</p>
                            <div className="flex gap-5 mt-5">
                                <Button size={'lg'} variant={'default'}>Mua ngay</Button>
                                <Button variant={'secondary'} size={'lg'}>Thêm vào giỏ hàng</Button>
                            </div>
                        </div>
                    </section>
                    <section className="mt-[4rem]">
                        <h1 className="heading mb-1">Thông số kĩ thuật</h1>
                        <div
                            className="grid grid-cols-3 border border-gray-500 border-solid p-5 rounded-xl mt-5 text-2xl">
                            <div className="flex flex-col gap-10">
                                <div className="w-[80%] h-max">
                                    <h1 className="font-medium text-[2rem]">Màn hình</h1>
                                    <div className="mt-5 ml-5 grid grid-cols-2 gap-x-0">
                                        <div className="w-max flex flex-col gap-5">
                                            <div className="">Kích thước màn hình</div>
                                            <div className="">Công nghệ màn hình</div>
                                            <div className=""> Độ phân giải màn hình</div>
                                            <div className="">Tính năng màn hình</div>
                                            <div className="">Tần số quét</div>
                                            <div className="">Kiểu màn hình</div>
                                        </div>
                                        <div className="w-max flex flex-col gap-5">
                                            <div className="">{data.detail.screen_size}</div>
                                            <div className="">{data.detail.screen_technology}</div>
                                            <div className="">{data.detail.resolution}</div>
                                            <div className="">{data.detail.screen_feature}</div>
                                            <div className="">{data.detail.refresh_rate}</div>
                                            <div className="">{data.detail.screen_type}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[80%] h-max">
                                    <h1 className="font-medium text-[2rem]">Camera sau</h1>
                                    <div className="mt-5 ml-5">
                                        <div className="h-max flex flex-col gap-5">
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Camera sau</div>
                                                <div className="w-[17rem]">{data.detail.rear_camera}</div>
                                            </div>
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Quay video</div>
                                                <div className="w-[17rem]">{data.detail.rear_video}</div>
                                            </div>
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Tính năng camera</div>
                                                <div className="w-[17rem]">{data.detail.camera_features}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[80%] h-max">
                                    <h1 className="font-medium text-[2rem]">Camera trước</h1>
                                    <div className="mt-5 ml-5">
                                        <div className="h-max flex flex-col gap-5">
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Camera trước</div>
                                                <div className="w-[17rem]">{data.detail.front_camera}</div>
                                            </div>
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Quay video trước</div>
                                                <div className="w-[17rem]">{data.detail.front_media}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-10">
                                <div className="w-[80%] h-max">
                                    <h1 className="font-medium text-[2rem]">Vi xử lý & đồ họa</h1>
                                    <div className="mt-5 ml-5 grid grid-cols-2 gap-x-0">
                                        <div className="w-max flex flex-col gap-5">
                                            <div className="">Chipset</div>
                                            <div className="">Loại CPU</div>
                                            <div className="">GPU</div>
                                        </div>
                                        <div className="w-max flex flex-col gap-5">
                                            <div className="">{data.detail.chipset}</div>
                                            <div className="">{data.detail.cpu}</div>
                                            <div className="">{data.detail.gpu}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[80%] h-max">
                                    <h1 className="font-medium text-[2rem]">Giao tiếp & kết nối</h1>
                                    <div className="mt-5 ml-5">
                                        <div className="h-max flex flex-col gap-5">
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Công nghệ NFC</div>
                                                <div className="w-[17rem]">{data.detail.nfc ? 'có' : 'không'}</div>
                                            </div>
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Thẻ SIM</div>
                                                <div className="w-[17rem]">{data.detail.sim}</div>
                                            </div>
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Hệ điều hành</div>
                                                <div className="w-[17rem]">{data.detail.os}</div>
                                            </div>
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Hỗ trợ mạng</div>
                                                <div className="w-[17rem]">{data.detail.network_support}</div>
                                            </div>
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Wi-Fi</div>
                                                <div className="w-[17rem]">{data.detail.wifi}</div>
                                            </div>
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Bluetooth</div>
                                                <div className="w-[17rem]">{data.detail.bluetooth}</div>
                                            </div>
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">GPS</div>
                                                <div className="w-[17rem]">{data.detail.gps}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[80%] h-max">
                                    <h1 className="font-medium text-[2rem]">RAM & lưu trữ</h1>
                                    <div className="mt-5 ml-5">
                                        <div className="h-max flex flex-col gap-5">
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Dung lượng RAM</div>
                                                <div
                                                    className="w-[17rem]">{data.options[indexImage].memory.split('/')[0]}</div>
                                            </div>
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Bộ nhớ trong</div>
                                                <div
                                                    className="w-[17rem]">{data.options[indexImage].memory.split('/')[1]}</div>
                                            </div>
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Khe cắm thẻ nhớ</div>
                                                <div
                                                    className="w-[17rem]">{data.detail.memory_card_slot}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[80%] h-max">
                                    <h1 className="font-medium text-[2rem]">Pin & công nghệ sạc</h1>
                                    <div className="mt-5 ml-5">
                                        <div className="h-max flex flex-col gap-5">
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Pin</div>
                                                <div
                                                    className="w-[17rem]">{data.detail.battery}</div>
                                            </div>
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Công nghệ sạc</div>
                                                <div
                                                    className="w-[17rem]">{data.detail.charging_technology}</div>
                                            </div>
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Cổng sạc</div>
                                                <div
                                                    className="w-[17rem]">{data.detail.charging_port}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-10">
                                <div className="w-[80%] h-max">
                                    <h1 className="font-medium text-[2rem]">Thiết kế & Trọng lượng</h1>
                                    <div className="mt-5 ml-5 grid grid-cols-2 gap-x-0">
                                        <div className="w-max flex flex-col gap-5">
                                            <div className="">Kích thước</div>
                                            <div className="">Trọng lượng</div>
                                            <div className="">Chất liệu mặt lưng</div>
                                            <div className="">Chất liệu khung viềnt</div>
                                        </div>
                                        <div className="w-max flex flex-col gap-5">
                                            <div className="">{data.detail.size}</div>
                                            <div className="">{data.detail.weight} g</div>
                                            <div className="">{data.detail.back_material}</div>
                                            <div className="">{data.detail.frame_material}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[80%] h-max">
                                    <h1 className="font-medium text-[2rem]">Thông số khác</h1>
                                    <div className="mt-5 ml-5">
                                        <div className="h-max flex flex-col gap-5">
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Chỉ số kháng nước, bụi</div>
                                                <div className="w-[17rem]">{data.detail.ingress_protection}</div>
                                            </div>
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Cảm biến</div>
                                                <div className="w-[17rem]">{data.detail.technology_utilities}</div>
                                            </div>
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Tính năng camera</div>
                                                <div className="w-[17rem]">{data.detail.camera_features}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[80%] h-max">
                                    <h1 className="font-medium text-[2rem]">Tiện ích khác</h1>
                                    <div className="mt-5 ml-5">
                                        <div className="h-max flex flex-col gap-5">
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Các loại cảm biến</div>
                                                <div className="w-[17rem]">{data.detail.types_of_sensors}</div>
                                            </div>
                                            <div className="flex gap-0 w-full">
                                                <div className="w-[17rem]">Tính năng đặc biệt</div>
                                                <div className="w-[17rem]">{data.detail.special_features}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <CommentSection/>
                </section>
                <ZoomImage imageSrc={mainImageSrc} showZoomImage={showZoom} setShowZoomImage={setShowZoom}/>
            </>
        );
    }

}

export default Page;
