'use client';
import React from 'react';
import ProductsModel from "@/models/products/products.model";
import {ApiImage} from "@/app/constants";
import Heading from "@/components/sections/Heading";
import Image from 'next/image';

function Page({params}: { params: { id: string } }) {
    const {data, isLoading, isError} = ProductsModel.GetProductById(params.id);
    console.log(data, isLoading);

    if (isLoading) {
        return (
            <>
                đang tải ...
            </>
        )
    }

    if (isError) {
        return (
            <>Sản phẩm không tồn tại</>
        )
    }

    if (data) {
        return (
            <section className="container">
                <Heading title={'Chi tiết sản phẩm'}/>
                <section className="mt-[4rem] text-gray-700 body-font w-full">
                    <div className="lg:w-full mx-auto flex gap-20">
                        <div className="w-[40%] flex gap-5">
                            <div className="w-[30%]">

                            </div>
                            <div className="relative w-[68%] h-[350px]">
                                <Image alt="ecommerce" fill
                                       className="object-cover object-center rounded"
                                       src={ApiImage + data?.image}/>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
                            <h2 className="text-2xl title-font text-gray-600 tracking-widest capitalize">{data.brand_name}</h2>
                            <h1 className="text-gray-900 text-[2.4rem] title-font font-medium mb-1">{data?.name}</h1>
                        </div>
                    </div>
                </section>
            </section>
        );
    }

}

export default Page;
