'use client';
import React, {useEffect, useState} from 'react';
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useAppSelector} from "@/redux/hooks";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import Image from "next/image";
import {ApiImage, UserRole, UserRoleKey} from "@/app/constants";
import UsersModel from "@/models/users/users.model";
import {Badge} from "@/components/ui/badge";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";

function Page() {
    const user = useAppSelector(state => state.user.user)
    const limit = 5;
    const [countPage, setCountPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState<User[]>([])
    const {trigger: userTrigger} = UsersModel.GetUsersLimitPage(page, limit);

    useEffect(() => {
        userTrigger({token: user.accessToken})
            .then((res) => {
                setUsers(res.data as User[]);
                setTotal(res.paging.total);
                setCountPage(Math.ceil(res.paging.total / limit));
                console.log(res.data);
            })
    }, []);

    const handleSwitchPage = (index: number) => {
        setPage(index);
        window.scrollTo(0, 90);
    }

    return (
        <ScrollArea className="w-full h-full">
            <section className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                <Card x-chunk="dashboard-06-chunk-0">
                    <CardHeader>
                        <CardTitle className={'text-[2rem]'}>Sản phẩm</CardTitle>
                        <CardDescription className={'text-[1.6rem]'}>
                            Quản lý sản phẩm
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="hidden w-[100px] sm:table-cell">
                                        <span className="sr-only">Image</span>
                                    </TableHead>
                                    <TableHead className={'text-[2rem] w-[30rem]'}>Thông tin người dùng</TableHead>
                                    <TableHead className={'text-[2rem] text-center'}>Vai trò</TableHead>
                                    <TableHead className="hidden text-[2rem] text-center md:table-cell">
                                        Số bình luận
                                    </TableHead>
                                    <TableHead className="hidden text-[2rem] text-center md:table-cell">
                                        Số đơn hàng đã mua
                                    </TableHead>
                                    <TableHead className="hidden text-[2rem] text-center md:table-cell">
                                        Tổng số tiền đã mua
                                    </TableHead>
                                    <TableHead className="text-[2rem] text-center">
                                        Hành động
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users && users.map((user, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="hidden sm:table-cell">
                                            <Image
                                                alt="Product image"
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src={user.image ? (user.image.startsWith('https') ? (user.image) : (ApiImage + user.image)) : ('/images/sections/avatar-user-review-2.jpg')}
                                                width="70"
                                            />
                                        </TableCell>
                                        <TableCell className="font-normal text-2xl">
                                            <p>Tên: {user.name}</p>
                                            <p>Email: {user.email}</p>
                                            <p>Số điện thoại: {user.phone}</p>
                                            <p>Địa chỉ: {user.address}</p>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className={'text-2xl mx-auto block w-max'}
                                                   variant="outline">{UserRole[user.role as UserRoleKey]}</Badge>
                                        </TableCell>
                                        <TableCell className="md:table-cell text-center text-2xl">
                                            <div className="">1</div>
                                        </TableCell>
                                        <TableCell className="hidden text-2xl text-center md:table-cell">
                                            <div className="">1</div>
                                        </TableCell>
                                        <TableCell className="hidden text-2xl text-center md:table-cell">
                                            <div className="">1</div>
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
                            Hiển thị {limit} trên {total} người dùng
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
                    </CardFooter>
                </Card>
            </section>
        </ScrollArea>
    );
}

export default Page;
