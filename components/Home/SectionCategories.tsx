'use client';
import React, {useState} from 'react';
import BrandsModel from "@/models/brands/brands.model";
import {cn} from "@/lib/utils";

const SectionCategories = () => {
    const [indexBrand, setIndexBrand] = useState(0);
    const { data , isLoading, isError} = BrandsModel.GetAllBrands();

    return (
        <section className="w-full h-max mt-[4rem]">
            <h1 className="text-center text-[3rem] font-medium">Sản phẩm bán chạy theo hãng</h1>
            {isError && (
                <h1 className='text-center mt-10 text-2xl'>Có lỗi trong quá trình lấy dữ liệu</h1>
            )}
            <div className="flex w-max mt-10 mx-auto gap-10">
                {!isLoading && data?.map((brand, index) => (
                    <div onClick={() => setIndexBrand(index)} className={cn(`capitalize select-none cursor-pointer shadow-md rounded
                     px-10 py-3 text-center text-[2rem] ${indexBrand === index ? 'bg-primary text-secondary' : ''}`)} key={index}>{brand.name}</div>
                ))}
            </div>
            <div className="grid grid-cols-5 grid-rows-2">

            </div>
        </section>
    );
};

export default SectionCategories;
