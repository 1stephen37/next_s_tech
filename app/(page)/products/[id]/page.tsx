'use client';
import React from 'react';
import ProductsModel from "@/models/products/products.model";

function Page({ params } : { params : { id : string }}) {
    const { data, isLoading, isError } = ProductsModel.GetProductById(params.id);
    // console.log(data, isLoading, isError);

    return (
        <section className="container">
            <div>
                chi tiết hàng
            </div>
        </section>
    );
}

export default Page;
