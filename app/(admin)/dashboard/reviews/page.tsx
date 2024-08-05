'use client';
import React, {useState} from 'react';
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import ReviewsModel from "@/models/reviews/reviews.model";
import Image from "next/image";
import {ApiImage} from "@/app/constants";

function Page() {
    const [limit, setLimit] = useState(4);
    const [page, setPage] = useState(1);
    const {data: Reviews} = ReviewsModel.GetReviewAndRepliesLimitByPage(page, limit);

    return (
        <ScrollArea className="w-full h-full">
            <section className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                <Card x-chunk="dashboard-06-chunk-0">
                    <CardHeader>
                        <CardTitle className={'text-[2rem]'}>Bình luận</CardTitle>
                        <CardDescription className={'text-[1.6rem]'}>
                            Quản lý bình luận
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="hidden w-[100px] sm:table-cell">
                                        <span className="sr-only">Image</span>
                                    </TableHead>
                                    <TableHead className={'text-[2rem] w-[18rem]'}>Người đánh giá</TableHead>
                                    <TableHead className={'text-[2rem] text-center'}>Sản phẩm được đánh giá</TableHead>
                                    <TableHead className={'text-[2rem] text-center w-[40rem]'}>Nội dung</TableHead>
                                    <TableHead className="hidden text-[2rem] text-center md:table-cell">
                                        Số lượng trả lời
                                    </TableHead>
                                    <TableHead className="text-[2rem] text-center">
                                        Hành động
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {Reviews && Reviews.map((review, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="hidden sm:table-cell">
                                            <Image
                                                alt="Product image"
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src={review.avatar ? (review.avatar.startsWith('https') ? (review.avatar) : (ApiImage + review.avatar)) : ('/images/sections/avatar-user-review-3.jpg')}
                                                width="70"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium text-2xl">
                                            {review.name}
                                        </TableCell>
                                        <TableCell className="md:table-cell text-center text-2xl">
                                            {review.product_name}
                                        </TableCell>
                                        <TableCell className="md:table-cell text-center text-2xl">
                                            {review.content}
                                        </TableCell>
                                        <TableCell className="hidden text-2xl text-center md:table-cell">
                                            {review.replies.length}
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
                                                        className={'text-2xl'}>Sửa</DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        className={'text-2xl'}>Xóa</DropdownMenuItem>
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
                            Đang xem <strong>1-{limit}</strong> trong <strong>123</strong>
                        </div>
                    </CardFooter>
                </Card>
            </section>
        </ScrollArea>
    );
}

export default Page;
