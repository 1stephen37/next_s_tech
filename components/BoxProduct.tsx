"use client";
import React from 'react';
import Image from 'next/image'
import {ApiImage, transformCurrency} from "@/app/constants";
import {motion} from "framer-motion"
import {useRouter} from 'next/navigation';

type Product = {
    id: string;
    name: string;
    image: string
    brand: string;
    price: string;
    sale: number;
    index: number;
    views: number;
    memory: string;
    color: string;
    isShowView?: boolean
}

function BoxProduct({id, name, image, brand, price, sale, index, views, memory, color, isShowView = false}: Product) {

    const router = useRouter()
    const handleDetailProduct = () => {
        router.push(`/products/${id}`);
    }

    return (
        <motion.div initial={{x: "100%"}}
                    animate={{x: "0%"}}
                    transition={{duration: 0.5, delay: ((2 + index) - 0.5) * 0.1}}
        >
            <motion.div
                onClick={() => handleDetailProduct()}
                whileHover={{scale: 1.05, boxShadow: '0.5px 0.5px 5px 2px rgba(0, 0, 0, 0.3)'}}
                transition={{duration: 0.1}}
                className={"relative max-w-[25rem] h-[34rem] shadow-md bg-white group group-hover:shadow-2xl py-5 px-10 rounded-[5px]"}>
                <div className="w-auto h-auto max-h-[200px] group cursor-pointer mx-auto">
                    <Image width={200} height={200} sizes={'max'} className="object-contain max-h-[200px] mx-auto"
                           src={ApiImage + image}
                           alt={''}/>
                </div>
                <div
                    className="cursor-pointer capitalize text-[1.4rem] mb-[2px] mt-[5px] rounded">{brand}</div>
                <h1 className="text-[1.8rem] dark:text-secondary group font-semibold text-left capitalize
                 cursor-pointer max-h-[5rem] leading-[1.4]">{name.length < 35 ? ((name + ' ' + memory).length < 30 ? (name + ' ' + color + ' ' + memory) : (name + ' ' + memory)) : name}</h1>
                <div
                    className="text-[1.6rem] dark:text-secondary font-medium">{transformCurrency(Math.floor((((1 - (sale / 100)) * parseInt(price))) / 1000) * 1000)}</div>
                {sale !== 0 && (
                    <div
                        className="absolute top-0 right-0 text-[1.4rem] font-semibold text-secondary px-2 py-1
                         rounded dark:text-primary bg-gradient-to-r from-orange-400 to-red-400">
                        {sale}%
                    </div>
                )}
                {views >= 1000 && (
                    <div className="absolute top-0 left-0 text-[1.4rem] font-semibold
                     text-secondary px-2 py-1 rounded bg-gradient-to-r from-cyan-500 to-blue-500">Hot</div>
                )}
                {isShowView && (
                    <div>view</div>
                )}
            </motion.div>
        </motion.div>
    );
}

export default BoxProduct;
