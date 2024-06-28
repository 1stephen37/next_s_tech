"use client";
import React from 'react';
import Image from 'next/image'
import {transformCurrency} from "@/app/constants";
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion"

type Product = {
    name: string;
    image: string
    brand: string;
    price: number;
    sale: number
}

function BoxProduct({name, image, brand, price, sale} : Product) {
    return (
        <div className={"relative max-w-[25rem] group hover:shadow-2xl p-5 px-10 rounded-[5px]"}>
            <motion.div animate={{type: '020617'}} className="w-max cursor-pointer mx-auto">
                <Image width={200} height={300} className="object-cover mx-auto" src={'/images/sections/iPhone-14-plusred.png'} alt={''} />
            </motion.div>
            <h1 className="text-[1.8rem] mt-5 font-semibold text-left capitalize">{name}</h1>
            <div className="text-[1.6rem] font-medium">{transformCurrency(price)}</div>
            <div className="absolute left-0 top-0 bg-primary text-secondary px-2 py-1 text-[1.6rem] rounded">{brand}</div>
            <div className="absolute top-0 right-0 text-[1.4rem] font-semibold text-secondary px-2 py-1 rounded bg-red-600">{sale}%</div>
            <div className="group-hover:grid hidden bg-[rgba(0,0,0,0.4)] absolute inset-0 grid-rows-2 place-items-center">
                <Button className="w-max" variant={'default'}>Thêm vào giỏ hàng</Button>
                <Button className="" variant={'default'}>Mua ngay</Button>
            </div>
        </div>
    );
}

export default BoxProduct;
