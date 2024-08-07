'use client';
import React, {useEffect, useState} from 'react';
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import DeliveriesModel from "@/models/deliveries/deliveries.model";
import {
    DropdownMenu, DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {File, ListFilter, MoreHorizontal, PlusCircle} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {DeliveryStatus, transformCurrency, DeliveryStatusKey} from "@/app/constants";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppSelector} from "@/redux/hooks";
import Confirm from "@/components/Confirm";
import toast, {Toaster} from "react-hot-toast";

type DeliveryCreate = {
    name: string;
    price: number,
    speed: string
}

function Page() {
    const user = useAppSelector(state => state.user.user);
    const [limit, setLimit] = useState(4);
    const [page, setPage] = useState(1);
    const [indexEdit, setIndexEdit] = useState(-1);
    const [indexDelete, setIndexDelete] = useState(-1);
    const {data: Deliveries} = DeliveriesModel.GetDeliveriesLimitPage(page, limit);
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [showFormEdit, setShowFormEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const {register, setValue, handleSubmit, formState: {errors}} = useForm<DeliveryCreate>();
    const {trigger: updateTrigger} = DeliveriesModel.UpdateDelivery();
    const {trigger: createTrigger} = DeliveriesModel.CreateDelivery();
    const {trigger: deleteTrigger} = DeliveriesModel.DeleteDelivery();
    useEffect(() => {
        if (indexEdit !== -1) {
            setValue('name', Deliveries[indexEdit].name);
            setValue('price', Deliveries[indexEdit].price);
            setValue('speed', Deliveries[indexEdit].speed || '');
        }
    }, [indexEdit, setValue]);

    const onSubmit: SubmitHandler<DeliveryCreate> = async (formData) => {
        if (showFormEdit) {
            let id = Deliveries[indexEdit].id_delivery;
            updateTrigger({token: user.accessToken, data: formData, id})
                .then(res => {
                    console.log(res);
                    setShowFormEdit(false);
                    toast.success('Đã sửa đơn vị vận chuyển thành công', {
                        duration: 2000,
                        className: 'text-2xl flex item-center',
                        iconTheme: {
                            primary: '#000',
                            secondary: '#fff',
                        },
                    })
                })
        } else if (showFormAdd) {
            createTrigger({token: user.accessToken, data: formData})
                .then(res => {
                    console.log(res);
                    setShowFormAdd(false);
                    toast.success('Đã thêm đơn vị vận chuyển thành công', {
                        duration: 2000,
                        className: 'text-2xl flex item-center',
                        iconTheme: {
                            primary: '#000',
                            secondary: '#fff',
                        },
                    })
                })
        }
    };

    useEffect(() => {
        if (isDelete) {
            let id = Deliveries[indexDelete].id_delivery;
            deleteTrigger({token: user.accessToken, id})
                .then(res => {
                    console.log(res);
                    toast.success('Đã xóa đơn vị vận chuyển thành công', {
                        duration: 2000,
                        className: 'text-2xl flex item-center',
                        iconTheme: {
                            primary: '#000',
                            secondary: '#fff',
                        },
                    })
                })
            setIsDelete(false);
        }
    }, [indexDelete, setIndexDelete, isDelete, setIsDelete]);

    return (
        <>
            <ScrollArea className="w-full h-full">
                <section className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                    <div className="ml-auto w-max flex items-center gap-2">
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
                                    Archived
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button size="sm" variant="outline" className="h-8 py-[2rem] gap-1">
                            <File className="h-[2rem] w-[2rem]"/>
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Xuất File</span>
                        </Button>
                        <Button size='lg' onClick={() => setShowFormAdd(true)}
                                className="h-8 py-[2rem] gap-1">
                            <PlusCircle className="h-[2rem] w-[2rem]"/>
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Thêm đơn vị vận chuyển</span>
                        </Button>
                    </div>
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
                                                        <DropdownMenuItem onClick={() => {
                                                            setIndexEdit(index);
                                                            setShowFormEdit(true);
                                                        }}
                                                                          className={'text-2xl'}>Sửa</DropdownMenuItem>
                                                        <DropdownMenuItem onClick={() => {
                                                            setIndexDelete(index);
                                                            setShowDelete(true);
                                                        }}
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
            {showFormAdd && (
                <div onClick={() => setShowFormAdd(false)}
                     className="fixed left-0 z-50 top-0 bg-[rgba(0,0,0,0.7)] grid place-items-center w-full h-screen">
                    <div className="bg-white rounded-2xl shadow-xl h-max px-10 py-5 w-[50rem]"
                         onClick={(e) => e.stopPropagation()}>
                        <div className="heading">Thêm đơn vị vận chuyển</div>
                        <ScrollArea className={'h-[40rem] px-5'}>
                            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8 mt-5">
                                <div className="grid gap-5">
                                    <Label className="text-[2rem]">Tên sản phẩm</Label>
                                    <Input
                                        type='text'
                                        aria-invalid="true"
                                        placeholder="Nhập tên sản phẩm"
                                        {...register('name', {required: 'Bạn phải nhập tên sản phẩm'})}
                                        className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                    />
                                </div>
                                <div className="grid gap-5">
                                    <Label className="text-[2rem]">Giá trên mỗi km</Label>
                                    <Input
                                        type='text'
                                        aria-invalid="true"
                                        placeholder="Ví dụ: 10000000"
                                        {...register('price', {required: 'Bạn phải nhập giá đơn vị vận chuyển'})}
                                        className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid
                                    text-2xl"
                                    />
                                </div>
                                <div className="grid gap-5">
                                    <Label className="text-[2rem]">Tốc độ</Label>
                                    <Input
                                        type='text'
                                        aria-invalid="true"
                                        placeholder="Ví dụ: nhanh, chậm"
                                        {...register('speed', {required: 'Bạn phải nhập tốc độ vận chuyển'})}
                                        className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid
                                    text-2xl"
                                    />
                                </div>
                                <div className="grid gap-5">
                                    <Button type="submit" className="w-full mx-auto py-10">
                                        Thêm sản phẩm
                                    </Button>
                                </div>
                            </form>
                        </ScrollArea>
                    </div>
                </div>
            )}
            {showFormEdit && (
                <div onClick={() => setShowFormEdit(false)}
                     className="fixed left-0 z-50 top-0 bg-[rgba(0,0,0,0.7)] grid place-items-center w-full h-screen">
                    <div className="bg-white rounded-2xl shadow-xl h-max px-10 py-5 w-[50rem]"
                         onClick={(e) => e.stopPropagation()}>
                        <div className="heading">Thêm đơn vị vận chuyển</div>
                        <ScrollArea className={'h-[40rem] px-5'}>
                            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8 mt-5">
                                <div className="grid gap-5">
                                    <Label className="text-[2rem]">Tên sản phẩm</Label>
                                    <Input
                                        type='text'
                                        aria-invalid="true"
                                        placeholder="Nhập tên đơn vị vận chuyển"
                                        {...register('name', {
                                            required: 'Bạn phải nhập tên đơn vị vận chuyển',
                                        })}
                                        className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                    />
                                </div>
                                <div className="grid gap-5">
                                    <Label className="text-[2rem]">Giá trên mỗi km</Label>
                                    <Input
                                        type='text'
                                        aria-invalid="true"
                                        placeholder="Ví dụ: 10000000"
                                        {...register('price', {
                                            required: 'Bạn phải nhập giá đơn vị vận chuyển',
                                        })}
                                        className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid
                                    text-2xl"
                                    />
                                </div>
                                <div className="grid gap-5">
                                    <Label className="text-[2rem]">Tốc độ</Label>
                                    <Input
                                        type='text'
                                        aria-invalid="true"
                                        placeholder="Ví dụ: nhanh, chậm"
                                        {...register('speed', {
                                            required: 'Bạn phải nhập tốc độ vận chuyển',
                                        })}
                                        className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid
                                    text-2xl"
                                    />
                                    {errors.speed && (
                                        <div
                                            className={'text-2xl font-semibold mt-3 text-red-500'}>{errors.speed.message}</div>
                                    )}
                                </div>
                                <div className="grid gap-5">
                                    <Button type="submit" className="w-full mx-auto py-10">
                                        Cập nhật đơn vị vận chuyển
                                    </Button>
                                </div>
                            </form>
                        </ScrollArea>
                    </div>
                </div>
            )}
            <Confirm showConfirm={showDelete} setShowConfirm={setShowDelete} outState={isDelete}
                     setOutState={setIsDelete} message={'Bạn có chắc chắb muốn xóa đơn vị vận chuyển này ?'}
                     subMessage={'Hành động này là một hành động mạo hiểm, toàn bộ dữ liệu về đơn vị vận chuyển sẽ bị xóa.'}/>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>

    );
}

export default Page;
