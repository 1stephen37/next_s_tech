"use client";
import React from 'react';
import Image from 'next/image'
import {ApiImage, transformCurrency} from "@/app/constants";
import {motion} from "framer-motion"
import {useRouter} from 'next/navigation';
// import { useAppDispatch } from '@/redux/hooks'

type Product = {
    id: string;
    name: string;
    image: string
    brand: string;
    price: string;
    sale: number;
    index : number
}

function BoxProduct({id, name, image, brand, price, sale, index}: Product) {

    const router = useRouter()
    const handleDetailProduct = (id_product: string) => {
        router.push(`products/${id}`);
    }

    return (
        <motion.div  initial={{ x: "100%" }}
                     animate={{ x: "0%" }}
                     transition={{ duration: 0.5, delay: ((2 + index) - 0.5) * 0.1 }}
        >
            <motion.div
                onClick={() => handleDetailProduct(id)}
                whileHover={{scale: 1.05, boxShadow: '0.5px 0.5px 5px 2px rgba(0, 0, 0, 0.3)'}}
                transition={{duration: 0.1}}
                className={"relative max-w-[25rem] h-[32rem] shadow-md bg-white group group-hover:shadow-2xl p-5 px-10 rounded-[5px]"}>
                <motion.div className="w-auto h-auto group cursor-pointer mx-auto">
                    <Image width={200} height={300} sizes={'max'} className="object-cover mx-auto"
                           src={ApiImage + image}
                           alt={''}/>
                </motion.div>
                <h1 className="text-[1.8rem] mt-5 group font-semibold text-left capitalize cursor-pointer">{name}</h1>
                <div className="text-[1.6rem] font-medium">{transformCurrency(parseInt(price))}</div>
                <div
                    className="absolute cursor-pointer left-0 top-0 bg-primary text-secondary px-2 py-1 capitalize text-[1.6rem] rounded">{brand}</div>
                {sale !== 0 && (
                    <div
                        className="absolute top-0 right-0 text-[1.4rem] font-semibold text-secondary px-2 py-1 rounded bg-red-500">
                        {sale}%
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}

export default BoxProduct;
