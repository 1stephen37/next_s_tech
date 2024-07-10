'use client';
import React, {useState} from 'react';
import BoxProduct from "@/components/BoxProduct";
import ProductsModel from "@/models/products/products.model";
import {Button} from "@/components/ui/button";

function SectionSale() {
    const [limit, setLimit] = useState(5);
    const {data: productsList, isLoading: isProductsListLoading} = ProductsModel.GetSaleProducts(0, limit);

    return (
        <section className="w-full mt-[4rem] h-max">
            <h1 className="heading w-max">Sản phẩm giảm giá
                sốc !</h1>
            <div className="h-max mt-10 grid grid-cols-5 gap-y-10 gap-x-10">
                {isProductsListLoading && (
                    <div className="text-[2rem] text-center">product is loading...</div>
                )}
                {!isProductsListLoading && productsList?.map((product, index) => (
                    <BoxProduct key={index} id={product.id_product} sale={product.sale_off}
                                price={product.price.toString()} index={index} views={parseInt(product.views)}
                                color={product.color} memory={product.memory}
                                brand={product.brand_name} image={product.image} name={product.name}/>
                ))}
            </div>
            {limit < 10 && (
                <Button variant={'link'} size={'lg'} className="py-5 mt-10 mx-auto"
                        onClick={() => setTimeout(() => setLimit(10), 300)}>Tải thêm</Button>
            )}
        </section>
    );
}

export default SectionSale;
