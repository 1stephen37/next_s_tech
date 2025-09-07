'use client';
import {useRouter} from "next/navigation";
import ProductsModel from "@/models/products/products.model";
import {ScrollArea} from "@/components/ui/scroll-area";
import {FaRegEye} from "react-icons/fa";
import React from "react";

function Page({params}: { params: { id: string } }) {
    const router = useRouter();

    const id_product = params.id;

    const {data: product} = ProductsModel.GetProductById(id_product);

    console.log(product);

    return (
        <ScrollArea className="w-full h-full">
            <section className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                {product && (
                    <div className="flex rounded-md bg-muted p-1">
                        <div className="w-1/2">
                            <h2 className="text-2xl title-font text-gray-600 tracking-widest capitalize">{product.brand_name}</h2>
                            <h1 className="text-gray-900 text-[2.4rem] font-medium mb-1">{product.name}</h1>
                            <p className="flex items-center gap-3 mt-1">
                                <FaRegEye className='text-3xl'/>
                                <span className={'text-2xl'}>{product.views} lượt xem</span>
                            </p>
                        </div>
                        <div className="w-1/2">

                        </div>
                    </div>
                )}
            </section>
        </ScrollArea>
    );
}

export default Page;