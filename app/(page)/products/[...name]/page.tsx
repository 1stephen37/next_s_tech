'use client';
import React from 'react';
import {useState, useEffect} from 'react';
import ProductsModel from "@/models/products/products.model";

// import {useRouter} from "next/navigation";

function Page() {
    const [idProduct, setIdProduct] = useState(null);

    useEffect(() => {
        setIdProduct(JSON.parse(localStorage.getItem('id_product') as string));
    }, []);

    // const {data : productsList} = ProductsModel.GetProductById(idProduct);

    return (
        <section className="container ">
            <div>name is {idProduct}</div>
        </section>
    );
}

export default Page;
