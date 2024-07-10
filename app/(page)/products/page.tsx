'use client';
import React from 'react';
import Heading from "@/components/sections/Heading";
import ProductsModel from "@/models/products/products.model";
import BoxProduct from "@/components/BoxProduct";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {Skeleton} from "@/components/ui/skeleton";
import BrandsModel from "@/models/brands/brands.model";


function Page() {
    const {data: Brands, isLoading, isError} = BrandsModel.GetAllBrands();
    const {data: productsList, isLoading: isProductsListLoading} = ProductsModel.GetProductsLimitByPage(1, 15);

    return (
        <section className="container mt-[4rem]">
            <Heading title={'Sản phẩm'} className={''}/>
            <div className="flex flex-col gap-10 mt-10">
                <div className="w-1/4 h-max sticky top-0 ">
                    <h2 className="text-[2rem] font-bold mb-4">Bộ lọc</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl mb-4 font-semibold">Thương hiệu</h3>
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-5 gap-6">
                    {isProductsListLoading && (
                        <Skeleton className="w-[200px] h-[120px] rounded" />
                    )}
                    {!isProductsListLoading && productsList?.map((product, index) => (
                        <BoxProduct key={index} id={product.id_product} sale={product.sale_off}
                                    price={product.price.toString()} index={index}
                                    brand={product.brand_name} image={product.image} name={product.name}/>
                    ))}
                </div>
            </div>
            <Pagination className="mt-20">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#"/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#"/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </section>
    );
}

export default Page;
