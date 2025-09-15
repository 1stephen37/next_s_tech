'use client';
import React, {useEffect, useState} from 'react';
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Image from "next/image";
import {ApiImage, BrandStatus, BrandStatusKey} from "@/app/constants";
import {Badge} from "@/components/ui/badge";
import {
    DropdownMenu, DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {File, ListFilter, MoreHorizontal, PlusCircle} from "lucide-react";
import BrandsModel from "@/models/brands/brands.model";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import Link from 'next/link';

function Page() {
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
    const [countPage, setCountPage] = useState(1);
    const limit = 4;
    const {data: brands, paging, isLoading} = BrandsModel.GetBrandsLimitPage(page, limit)

    console.log(paging)

    useEffect(() => {
        if (paging) {
            setTotal(paging.total);
            setCountPage(Math.ceil(paging.total / limit));
        }
    }, [brands, paging]);

    return (
        <>
            <ScrollArea className="w-full h-full">
                <section className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                    <div className="flex items-center">
                        <div className="ml-auto flex items-center gap-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm" className="h-8 py-[2rem] gap-1">
                                        <ListFilter className="w-[2rem] h-[2rem]"/>
                                        <span
                                            className="sr-only text-[2rem] sm:not-sr-only sm:whitespace-nowrap">Bộ lọc</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel className={'text-[1.4rem]'}>TIêu chí</DropdownMenuLabel>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuCheckboxItem className={'text-2xl'} checked>
                                        Đang bán
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem
                                        className={'text-2xl'}>Draft</DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem className={'text-2xl'}>
                                        Ngưng bán
                                    </DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button size="sm" variant="outline" className="h-8 py-[2rem] gap-1">
                                <File className="h-[2rem] w-[2rem]"/>
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Xuất File</span>
                            </Button>
                            <Button size='lg'
                                    className="h-8 py-[2rem] gap-1">
                                <PlusCircle className="h-[2rem] w-[2rem]"/>
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Thêm sản phẩm</span>
                            </Button>
                        </div>
                    </div>
                    <Card x-chunk="dashboard-06-chunk-0">
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className={'tableHeading'}>Logo</TableHead>
                                        <TableHead className={'tableHeading '}>Tên thương hiệu</TableHead>
                                        <TableHead className={'tableHeading '}>Trạng thái</TableHead>
                                        <TableHead className="tableHeading ">
                                            Số lượng sản phẩm
                                        </TableHead>
                                        <TableHead className="tableHeading ">
                                            Hành động
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {brands && brands.map((brand, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="hidden sm:table-cell">
                                                <Image
                                                    alt="Product image"
                                                    className="aspect-square mx-auto rounded-md object-contain"
                                                    height="30"
                                                    src={ApiImage + brand.logo}
                                                    width={120}
                                                />
                                            </TableCell>
                                            <TableCell className="font-medium capitalize text-center text-2xl">
                                                {brand.name}
                                            </TableCell>
                                            <TableCell>
                                                <Badge className={'text-2xl mx-auto block w-max'}
                                                       variant="outline">{BrandStatus[brand.status as BrandStatusKey]}</Badge>
                                            </TableCell>
                                            <TableCell className="hidden text-2xl text-center md:table-cell">
                                                {brand.count}
                                            </TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <MoreHorizontal className="mx-auto h-8 w-8"/>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="start">
                                                        <DropdownMenuItem
                                                            className={'text-2xl'}>
                                                            <Link href={`/dashboard/brands/detail/${brand.id_brand}`}>Xem
                                                                chi tiết</Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            className={'text-2xl'}>Sửa</DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            className={'text-2xl'}>Delete</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                        <CardFooter>
                            <div className="text-2xl text-muted-foreground">
                                Hiển thị {limit} trên {total}
                            </div>
                            {countPage > 1 && (
                                <Pagination className={'mx-0 justify-end'}>
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
                                                    // onClick={() => handleSwitchPage(index)}
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
                        </CardFooter>
                    </Card>
                </section>
            </ScrollArea>
        </>
    );
}

export default Page;
