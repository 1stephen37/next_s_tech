'use client';
import React, {useState} from 'react';
import BoxProduct from "@/components/BoxProduct";
import ProductsModel from "@/models/products/products.model";
import {Button} from "@/components/ui/button";

// const productsList = [
//     {
//         name: "Iphone 15 Pro Max 6/128GB",
//         image: "",
//         brand: "iphone",
//         price: 5800000,
//         sale: 10
//     },
//     {
//         name: "Iphone 15 Pro Max 6/128GB",
//         image: "",
//         brand: "samsung",
//         price: 10800000,
//         sale: 15
//     },
//     {
//         name: "Iphone 15 Pro Max 6/128GB",
//         image: "",
//         brand: "xiaomi",
//         price: 20800000,
//         sale: 20
//     },
//     {
//         name: "Iphone 15 Pro Max 6/128GB",
//         image: "",
//         brand: "oppo",
//         price: 25800000,
//         sale: 25
//     },
//     {
//         name: "Iphone 15 Pro Max 6/128GB",
//         image: "",
//         brand: "vivo",
//         price: 25800000,
//         sale: 20
//     }
// ];

function SectionSale() {
    const [limit, setLimit] = useState(5);
    const {data : productsList} = ProductsModel.GetSaleProducts(0, limit);
    // const initialized = useRef(false)
    // if (!initialized.current) {
    //     store.dispatch(initializeProduct(product))
    //     initialized.current = true
    // }

    return (
        <section className="w-full mt-[4rem] h-max">
            <h1 className="text-[3.6rem] bg-primary w-max text-secondary p-5 rounded-[10px] font-bold">Sản phẩm giảm giá
                sốc</h1>
            <div className="mt-10 grid grid-cols-5 gap-x-10">
                {productsList?.map((product,index) => (
                    <BoxProduct key={index} id={product.id_product} sale={product.sale_off} price={product.price.toString()}
                                brand={product.brand_name} image={product.image} name={product.name} />
                ))}
            </div>
            {limit < 10 && (
                <Button variant={'default'} size={'lg'} className="py-5 mt-10 mx-auto" onClick={() => setLimit(10)}>Tải thêm</Button>
            )}
        </section>
    );
}

export default SectionSale;
