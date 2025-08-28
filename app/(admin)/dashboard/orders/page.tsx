'use client';
import React, {useEffect, useState} from 'react';
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import OrdersModel from "@/models/ỏders/orders.model";
import {useAppSelector} from "@/redux/hooks";
import {Badge} from "@/components/ui/badge";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import Image from 'next/image';
import {ApiImage, OrderStatus, transformCurrency, OrderStatusKey} from "@/app/constants";

function Page() {
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const {trigger: orderTrigger} = OrdersModel.GetOrdersLimitPage(page, limit);
    const [orders, setOrders] = useState<Order[]>([])
    const user = useAppSelector(state => state.user.user);

    useEffect(() => {
        orderTrigger({token: user.accessToken})
            .then((res) => {
                setOrders(res.data as Order[]);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [user]);

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
                                    <TableHead className={'text-[2rem] w-[30rem]'}>Thông tin Đặt hàng</TableHead>
                                    <TableHead className={'text-[2rem] text-center'}>Trạng thái</TableHead>
                                    <TableHead className="hidden text-[2rem] text-center md:table-cell">
                                        Tổng tiền
                                    </TableHead>
                                    <TableHead className="hidden text-[2rem] text-center md:table-cell">
                                        Số lượng sản phẩm
                                    </TableHead>
                                    <TableHead className="hidden text-[2rem] text-center md:table-cell">
                                        Phương thức thanh toán
                                    </TableHead>
                                    <TableHead className="text-[2rem] text-center">
                                        Hành động
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {orders && orders.map((order, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="hidden sm:table-cell">
                                            <Image
                                                alt="Product image"
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src={order.avatar ? (order.avatar.startsWith('https') ? (order.avatar) : (ApiImage + order.avatar)) : ('/images/sections/avatar-user-review-2.jpg')}
                                                width="70"
                                            />
                                        </TableCell>
                                        <TableCell className="font-normal text-2xl">
                                            <p>Tên: {order.name}</p>
                                            <p>Email: {order.email}</p>
                                            <p>Số điện thoại người đặt: {order.phone}</p>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className={'text-2xl mx-auto block w-max'}
                                                   variant="outline">{OrderStatus[order.status as OrderStatusKey]}</Badge>
                                        </TableCell>
                                        <TableCell className="md:table-cell text-center text-2xl">
                                            {transformCurrency(order.total)}
                                        </TableCell>
                                        <TableCell className="hidden text-2xl text-center md:table-cell">
                                            {order.details?.reduce((total, item) => total += item.quantity, 0)}
                                        </TableCell>
                                        <TableCell className="hidden text-2xl text-center md:table-cell">
                                            {order.payment_method}
                                        </TableCell>
                                        <TableCell className={''}>
                                            <Button className="mx-auto">Xem chi tiết</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                    <CardFooter>
                        <div className="text-2xl text-muted-foreground">
                            {/*/Showing <strong>1-{limit}</strong> of <strong>{productPaging?.total}</strong>{" "}*/}
                            products
                        </div>
                    </CardFooter>
                </Card>
            </section>
        </ScrollArea>
    );
}

export default Page;
