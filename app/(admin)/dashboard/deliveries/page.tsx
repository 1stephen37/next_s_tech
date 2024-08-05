'use client';
import React, {useState} from 'react';
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import DeliveriesModel from "@/models/deliveries/deliveries.model";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {DeliveryStatus, transformCurrency} from "@/app/constants";

type DeliveryStatusKey = keyof typeof DeliveryStatus;

function Page() {
    const [limit, setLimit] = useState(4);
    const [page, setPage] = useState(1);
    const {data: Deliveries} = DeliveriesModel.GetDeliveriesLimitPage(page, limit);

    return (
        <ScrollArea className="w-full h-full">
                <section className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                    <Card x-chunk="dashboard-06-chunk-0">
                        <CardHeader>
                            <CardTitle className={'text-[2rem]'}>Giao hàng</CardTitle>
                            <CardDescription className={'text-[1.6rem]'}>
                                Quản lý giao hàng
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className={'text-[2rem]'}>Đơn vị giao hàng</TableHead>
                                        <TableHead className={'text-[2rem] text-center'}>Trạng thái</TableHead>
                                        <TableHead className="hidden text-[2rem] text-center md:table-cell">
                                            Giá
                                        </TableHead>
                                        <TableHead className="hidden text-[2rem] text-center md:table-cell">
                                            Tốc độ
                                        </TableHead>
                                        <TableHead className="text-[2rem] text-center">
                                            Hành động
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {Deliveries && Deliveries.map((delivery, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium text-2xl">
                                                {delivery.name}
                                            </TableCell>
                                            <TableCell className="md:table-cell text-center text-2xl">
                                                <Badge className={'text-2xl cursor-pointer mx-auto block w-max'}
                                                       variant="outline">{DeliveryStatus[delivery.status as DeliveryStatusKey]}</Badge>
                                            </TableCell>
                                            <TableCell className="hidden text-2xl text-center md:table-cell">
                                                {transformCurrency(delivery.price)}
                                            </TableCell>
                                            <TableCell className="hidden text-2xl text-center md:table-cell">
                                                {delivery.speed}
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
