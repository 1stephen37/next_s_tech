'use client';
import React, {useEffect, useState} from 'react';
import BrandsModel from "@/models/brands/brands.model";
import {cn} from "@/lib/utils";
import ProductsModel from "@/models/products/products.model";
import BoxProduct from "@/components/BoxProduct";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

const SectionCategories = () => {
    const router = useRouter();
    const [indexBrand, setIndexBrand] = useState(0);
    const [idBrand, setIdBrand] = useState('1');
    const {data: Brands, isLoading, isError} = BrandsModel.GetBrandsByLimit(5);
    const [productsList, setProductsList] = useState<ProductBox[]>([]);

    const {trigger} = ProductsModel.GetHotProductsByIdBrand(0, 10, idBrand)

    useEffect(() => {
        if (Brands) {
            trigger().then((data) => {
                setProductsList(data.data);
            });
        }
    }, [Brands, idBrand]);

    const handleChangeBrand = (index: number) => {
        setIndexBrand(index);
        setIdBrand(Brands[index].id_brand);
    }

    return (
        <section className="w-full h-max mt-[4rem]">
            <h1 className="text-center heading">Các sản phẩm được xem nhiều</h1>
            {isError && (
                <h1 className='text-center mt-10 text-2xl'>Có lỗi trong quá trình lấy dữ liệu</h1>
            )}
            <div className="flex w-max mt-10 mx-auto gap-10">
                {!isLoading && Brands?.map((brand, index) => (
                    <div onClick={() => handleChangeBrand(index)} className={cn(`capitalize select-none cursor-pointer shadow-md rounded
                     px-10 py-3 text-center text-[2rem] ${indexBrand === index ? 'bg-[rgba(0,0,0,0.75)] text-[rgba(255,255,255,1)]' : ''}`)}
                         key={index}>{brand.name}</div>
                ))}
            </div>
            <div className="h-max mt-10 grid grid-cols-5 gap-y-10 gap-x-10">
                {productsList?.map((product, index) => (
                    <BoxProduct key={index} id={product.id_product} sale={product.sale_off}
                                price={product.price.toString()} index={index} views={parseInt(product.views)}
                                memory={product.memory} color={product.color}
                                brand={product.brand_name} image={product.image} name={product.name}/>
                ))}
            </div>
            <Button onClick={() => router.push('/products')} variant={'link'} size={'lg'} className="py-5 mt-5 mx-auto">Xem
                thêm</Button>
        </section>
    );
};

export default SectionCategories;
