'use client';
import React from 'react';
import Image from "next/image";
import {ApiImage, transformCurrency} from "@/app/constants";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";

type Product = {
    id: string;
    name: string;
    image: string
    brand: string;
    price: string;
    sale: number;
    index: number
}

function BoxProductSearch({id, name, image, brand, price, sale, index}: Product) {
    const router = useRouter()
    const handleDetailProduct = () => {
        console.log(1321);
        router.push(`/products/${id}`);

    }

    return (
        <motion.div
            onClick={handleDetailProduct}
            whileHover={{scale: 1.05, boxShadow: '0.5px 0.5px 5px 2px rgba(0, 0, 0, 0.3)'}}
            transition={{duration: 0.1}}
            className="flex items-center gap-5 shadow-md group cursor-pointer px-3 py-3">
            <div className="">
                <Image className={'object-contain'} alt={''} width={70} height={50} src={ApiImage + image}/>
            </div>
            <div className="">
                <div className="text-[1.4rem]">{name.length > 20 ? name.slice(0,20) + '...' : name}</div>
                <div
                    className="text-[1.2rem] ">{transformCurrency(Math.floor((((1 - (sale / 100)) * parseInt(price))) / 1000) * 1000)}</div>
            </div>
        </motion.div>
    );
}

export default BoxProductSearch;
