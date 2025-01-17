'use client';
import React, {useEffect, useState} from 'react';
import Heading from "@/components/sections/Heading";
import ProductsModel from "@/models/products/products.model";
import BoxProduct from "@/components/BoxProduct";
import {
    Pagination,
    PaginationContent,
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
import {MdOutlineCancelPresentation} from "react-icons/md";
import {useAppSelector} from "@/redux/hooks";
import {useSearchParams} from "next/navigation";

const filterList = [
    {
        filterName: 'Ram'
    },
    {
        filterName: 'Bộ nhớ trong'
    }
]

const limit = 15;

function Page() {
    const searchParams = useSearchParams();
    const id_brand = searchParams.get('id_brand');
    const search = useAppSelector((state) => state.search.searchContent);
    const [page, setPage] = useState(1);
    const {data: Brands, isLoading, isError} = BrandsModel.GetAllBrands();
    const [idBrand, setIdBrand] = useState('');
    const {
        data: productsList,
        isLoading: isProductsListLoading,
        paging
    } = ProductsModel.GetProductsLimitByPage(page, limit, idBrand);
    const [countPage, setCountPage] = useState(0);
    const {
        data: productsListSearch,
        paging: searchPaging,
        isLoading: isSearching
    } = ProductsModel.GetProductsByKeywordAndPage(limit, page, search, idBrand);

    useEffect(() => {
        if (search) {
            setCountPage(Math.ceil(searchPaging?.total / limit));
        } else {
            setCountPage(Math.ceil(paging?.total / limit));
        }
    }, [paging?.total, searchPaging?.total, idBrand, countPage]);

    useEffect(() => {
        if (id_brand) {
            setIdBrand(id_brand.toString());
        }
    }, [id_brand]);

    const handleSwitchBrand = (id_brand: string) => {
        setPage(1);
        setIdBrand(id_brand);
    }

    const handleSwitchPage = (index: number) => {
        setPage(index);
        window.scrollTo(0, 90);
    }

    return (
        <section className="container mt-[4rem]">
            {search !== '' ? (
                <h1 className={" text-center text-[3.2rem] font-semibold"}>Kết quả tìm kiếm của từ khóa : {search}</h1>
            ) : (
                <Heading title={'Sản phẩm'} className={''}/>
            )}
            <div className="flex flex-col gap-10 mt-[4rem]">
                {search !== '' ? (
                    <div className="w-full h-max flex flex-col gap-10 ">
                        <div className="flex gap-10 items-center flex-wrap">
                            <h3 className="text-[2rem] font-semibold min-w-[100px]">Thương hiệu: </h3>
                            {Brands && Brands.map((brand, index) => (
                                <div key={index} onClick={() => handleSwitchBrand(brand.id_brand)}
                                     className={cn(`relative shadow-md cursor-pointer border-solid rounded border-[.5px]
                             border-gray-400 w-[150px] h-[35px] hover:border-orange-400 ${idBrand === brand.id_brand ? 'border-orange-400' : ''}`)}>
                                    <Image className={'object-contain'} alt={brand.name}
                                           src={ApiImage + brand.logo}
                                           fill
                                           priority={true}/>
                                </div>
                            ))}
                            <div onClick={() => setIdBrand('')} className="">
                                <MdOutlineCancelPresentation
                                    className='text-[3rem] cursor-pointer select-none hover:opacity-60'/>
                            </div>
                        </div>
                        <div className="flex gap-10 items-center">
                            <h2 className="text-[2rem] font-bold">Bộ lọc :</h2>
                            {filterList.map((filter, index) => (
                                <div className={cn(`border border-solid border-primary text-[1.8rem] px-3 py-1 rounded
                            `)} key={index}>{filter.filterName}</div>
                            ))}
                        </div>
                        <div className="w-full grid grid-cols-5 gap-6">
                            {isSearching && (
                                <Skeleton className="w-[200px] h-[120px] rounded"/>
                            )}
                            {!isSearching && productsListSearch?.map((product, index) => (
                                <BoxProduct key={index} id={product.id_product} sale={product.sale_off}
                                            price={product.price.toString()} index={index}
                                            memory={product.memory}
                                            color={product.color} views={parseInt(product.views)}
                                            brand={product.brand_name} image={product.image}
                                            name={product.name}/>
                            ))}
                            {productsListSearch?.length <= 0 && (
                                <h1 className='text-center col-span-5 text-3xl'>Không có sản phẩm phù hơp với từ khóa
                                    của bạn</h1>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-max flex flex-col gap-10 ">
                        <div className="flex gap-10 items-center flex-wrap">
                            <h3 className="text-[2rem] font-semibold min-w-[100px]">Thương hiệu: </h3>
                            {Brands && Brands.map((brand, index) => (
                                <div key={index} onClick={() => handleSwitchBrand(brand.id_brand)}
                                     className={cn(`relative shadow-md cursor-pointer border-solid rounded border-[.5px]
                             border-gray-400 w-[150px] h-[35px] hover:border-orange-400 ${idBrand === brand.id_brand ? 'border-orange-400' : ''}`)}>
                                    <Image className={'object-contain'} alt={brand.name}
                                           src={ApiImage + brand.logo}
                                           fill
                                           priority={true}/>
                                </div>
                            ))}
                            <div onClick={() => setIdBrand('')} className="">
                                <MdOutlineCancelPresentation
                                    className='text-[3rem] cursor-pointer select-none hover:opacity-60'/>
                            </div>
                        </div>
                        <div className="flex gap-10 items-center">
                            <h2 className="text-[2rem] font-bold">Bộ lọc :</h2>
                            {filterList.map((filter, index) => (
                                <div className={cn(`border border-solid border-primary text-[1.8rem] px-3 py-1 rounded
                            `)} key={index}>{filter.filterName}</div>
                            ))}
                        </div>
                        <div className="w-full grid grid-cols-5 gap-6">
                            {isProductsListLoading && (
                                <Skeleton className="w-[200px] h-[120px] rounded"/>
                            )}
                            {!isProductsListLoading && productsList?.map((product, index) => (
                                <BoxProduct key={index} id={product.id_product} sale={product.sale_off}
                                            price={product.price.toString()} index={index}
                                            memory={product.memory}
                                            color={product.color} views={parseInt(product.views)}
                                            brand={product.brand_name} image={product.image}
                                            name={product.name}/>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            {countPage > 1 && (
                <Pagination className={'mt-[4rem]'}>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious className={'cursor-pointer select-none'}
                                                onClick={() => {
                                                    if (page > 1) {
                                                        setPage(page - 1);
                                                    }
                                                }}/>
                        </PaginationItem>
                        {Array.from({length: countPage}, (_, i) => i + 1).map(index => (
                            <PaginationItem key={index}>
                                <PaginationLink className={'cursor-pointer select-none'}
                                                onClick={() => handleSwitchPage(index)}
                                                isActive={index === page}>{index}</PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext className={'cursor-pointer select-none'}
                                            onClick={() => {
                                                if ((page + 1) <= countPage) {
                                                    setPage(page + 1);
                                                }
                                            }}/>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}

        </section>
    );
}

export default Page;
