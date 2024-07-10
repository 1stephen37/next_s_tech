'use client';
import React, {useState} from 'react';
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
import Image from 'next/image';
import {ApiImage} from "@/app/constants";
import {cn} from "@/lib/utils";

function Page() {
    const [page, setPage] = useState(1);
    const {data: Brands, isLoading, isError} = BrandsModel.GetAllBrands();
    const {data: productsList, isLoading: isProductsListLoading} = ProductsModel.GetProductsLimitByPage(page, 15);
    const [idBrand, setIdBrand] = useState('');

    return (
        <section className="container mt-[4rem]">
            <Heading title={'Sản phẩm'} className={''}/>
            <div className="flex flex-col gap-10 mt-10">
                <div className="w-full h-max sticky top-0 ">
                    <div className="flex gap-10 items-center">
                        <h3 className="text-[2rem] font-semibold">Thương hiệu : </h3>
                        {Brands && Brands.map((brand, index) => (
                            <div key={index} onClick={() => setIdBrand(brand.id_brand)} className={cn(`relative shadow-md cursor-pointer border-solid rounded border-[.5px]
                             border-gray-400 w-[150px] h-[35px] hover:border-orange-400 ${idBrand === brand.id_brand ? 'border-orange-400' : ''}`)}>
                                <Image className={'object-contain'} alt={brand.name} src={ApiImage + brand.logo} fill
                                       priority={true}/>
                            </div>
                        ))}
                    </div>
                    <h2 className="text-[2rem] font-bold mb-4">Bộ lọc</h2>
                </div>
                <div className="w-full grid grid-cols-5 gap-6">
                    {isProductsListLoading && (
                        <Skeleton className="w-[200px] h-[120px] rounded"/>
                    )}
                    {!isProductsListLoading && productsList?.map((product, index) => (
                        <BoxProduct key={index} id={product.id_product} sale={product.sale_off}
                                    price={product.price.toString()} index={index} memory={product.memory}
                                    color={product.color} views={parseInt(product.views)}
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
                        <PaginationLink href="#">5</PaginationLink>
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
