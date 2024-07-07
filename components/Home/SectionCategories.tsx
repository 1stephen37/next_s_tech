'use client';
import React, {useEffect, useState} from 'react';
import BrandsModel from "@/models/brands/brands.model";
import {cn} from "@/lib/utils";
import ProductsModel from "@/models/products/products.model";
import BoxProduct from "@/components/BoxProduct";

const SectionCategories = () => {
    const [indexBrand, setIndexBrand] = useState(0);
    const [idBrand, setIdBrand] = useState('1');
    const {data: Brands, isLoading, isError} = BrandsModel.GetAllBrands();
    const [productsList , setProductsList] = useState<ProductBox[]>([]);

    const { trigger } = ProductsModel.GetHotProductsByIdBrand(0, 10, idBrand)

    useEffect(() => {
        if(Brands) {
            trigger().then((data) => {
                console.log(data.data);
                setProductsList(data.data);
            });
        }
    }, [Brands, idBrand]);

    const handleChangeBrand = (index : number) => {
        setIndexBrand(index);
        setIdBrand(Brands[index].id_brand);
    }

    return (
        <section className="w-full h-max mt-[4rem]">
            <h1 className="text-center text-[3rem] font-medium">Sản phẩm bán chạy theo hãng</h1>
            {isError && (
                <h1 className='text-center mt-10 text-2xl'>Có lỗi trong quá trình lấy dữ liệu</h1>
            )}
            <div className="flex w-max mt-10 mx-auto gap-10">
                {!isLoading && Brands?.map((brand, index) => (
                    <div onClick={() => handleChangeBrand(index)} className={cn(`capitalize select-none cursor-pointer shadow-md rounded
                     px-10 py-3 text-center text-[2rem] ${indexBrand === index ? 'bg-primary text-secondary' : ''}`)}
                         key={index}>{brand.name}</div>
                ))}
            </div>
            <div className="h-max mt-10 grid grid-cols-5 gap-y-10 gap-x-10">
                {/*{isProductsListLoading && (*/}
                {/*    <div className="text-[2rem] text-center">product is loading...</div>*/}
                {/*)}*/}
                {productsList?.map((product, index) => (
                    <BoxProduct key={index} id={product.id_product} sale={product.sale_off}
                                price={product.price.toString()} index={index}
                                brand={product.brand_name} image={product.image} name={product.name}/>
                ))}
            </div>
        </section>
    );
};

export default SectionCategories;
