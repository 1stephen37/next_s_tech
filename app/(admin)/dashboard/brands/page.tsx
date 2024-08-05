'use client';
import React, {useEffect, useState} from 'react';
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Image from "next/image";
import {ApiImage, BrandStatus} from "@/app/constants";
import {Badge} from "@/components/ui/badge";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import BrandsModel from "@/models/brands/brands.model";

type BrandStatusKey = keyof typeof BrandStatus;


function Page() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10)
    const {data: brands} = BrandsModel.GetBrandsLimitPage(page, limit)

    useEffect(() => {
        console.log(brands)
    }, [brands]);
    return (
        <ScrollArea className="w-full h-full">
            <section className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                <Card x-chunk="dashboard-06-chunk-0">
                    <CardHeader>
                        <CardTitle className={'text-[2rem]'}>Thương hiệu</CardTitle>
                        <CardDescription className={'text-[1.6rem]'}>
                            Quản lý thương hiệu
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="hidden w-[20rem] sm:table-cell">
                                        <span className="sr-only">Image</span>
                                    </TableHead>
                                    <TableHead className={'text-[2rem] text-center'}>Tên thương hiệu</TableHead>
                                    <TableHead className={'text-[2rem] text-center'}>Trạng thái</TableHead>
                                    <TableHead className="hidden text-[2rem] text-center md:table-cell">
                                        Số lượng sản phẩm
                                    </TableHead>
                                    <TableHead className="text-[2rem] text-center">
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
                                                width={150}
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
                                                    <Button
                                                        aria-haspopup="true"
                                                        size="icon"
                                                        variant="ghost"
                                                        className={'mx-auto'}
                                                    >
                                                        <MoreHorizontal className="h-4 w-4"/>
                                                        <span className="sr-only">Toggle menu</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="start">
                                                    <DropdownMenuItem
                                                        className={'text-2xl'}>Xem chi tiết</DropdownMenuItem>
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
                            {/*/Showing <strong>1-{limit}</strong> of <strong>{productPaging?.total}</strong>{" "}*/}
                            Hiển thị {limit} trên 10
                        </div>
                    </CardFooter>
                </Card>
            </section>
        </ScrollArea>
    );
}

export default Page;
