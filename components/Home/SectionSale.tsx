import React from 'react';
import BoxProduct from "@/components/BoxProduct";

const productsList = [
    {
        name: "Iphone 15 Pro Max 6/128GB",
        image: "",
        brand: "iphone",
        price: 5800000,
        sale: 10
    },
    {
        name: "Iphone 15 Pro Max 6/128GB",
        image: "",
        brand: "samsung",
        price: 10800000,
        sale: 15
    },
    {
        name: "Iphone 15 Pro Max 6/128GB",
        image: "",
        brand: "xiaomi",
        price: 20800000,
        sale: 20
    },
    {
        name: "Iphone 15 Pro Max 6/128GB",
        image: "",
        brand: "oppo",
        price: 25800000,
        sale: 25
    },
    {
        name: "Iphone 15 Pro Max 6/128GB",
        image: "",
        brand: "vivo",
        price: 25800000,
        sale: 20
    }
];

function SectionSale() {
    return (
        <section className="w-full mt-10 h-max">
            <h1 className="text-[3.6rem] bg-primary w-max text-secondary p-5 rounded-[10px] font-bold">Sản phẩm giảm giá
                sốc</h1>
            <div className="mt-10 grid grid-cols-5 gap-x-10">
                {productsList.map((product,index) => (
                    <BoxProduct key={index} sale={product.sale} price={product.price} brand={product.brand} image={product.image} name={product.name} />
                ))}
            </div>
        </section>
    );
}

export default SectionSale;
