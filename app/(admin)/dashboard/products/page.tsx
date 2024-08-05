'use client';
import React, {useState} from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
    DropdownMenu, DropdownMenuCheckboxItem,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {File, ListFilter, MoreHorizontal, PlusCircle} from "lucide-react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import ProductsModel from "@/models/products/products.model";
import {ScrollArea} from "@/components/ui/scroll-area";
import {ApiImage, ProductStatus, transformCurrency} from "@/app/constants";
import {useRouter} from "next/navigation";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import BrandsModel from "@/models/brands/brands.model";
import {SubmitHandler, useForm} from "react-hook-form";

type ProductStatusKey = keyof typeof ProductStatus;

type ProductCreate = {
    name: string,
    id_brand: string,
    options: {
        color: '',
        price: '',
        storage: '',
        image: null,
    }[]
}

function Page() {
    const router = useRouter();
    const [options, setOptions] = useState([
        {
            color: '',
            price: '',
            storage: '',
            image: null,
        },
    ]);
    const handleAddOption = () => {
        setOptions([
            ...options,
            {
                color: '',
                price: '',
                storage: '',
                image: null,
            },
        ]);
    };

    const [technicalSpecifications, setTechnicalSpecifications] = useState([
        {
            specificationCategory: '',
            details: [{
                name: '',
                value: ''
            }]
        },
    ]);

    const {register, handleSubmit, formState: {errors}}
        = useForm<ProductCreate>();
    const onSubmit: SubmitHandler<ProductCreate> = async (formData) => {
        console.log(formData)
    };


    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    // const [idBrand, setIdBrand] = useState<number | undefined>(undefined);
    const {data: brands} = BrandsModel.GetAllBrands();
    const {data: products, paging: productPaging} = ProductsModel.GetProductsLimitByPage(page, limit);
    const [showFormAdd, setShowFormAdd] = useState(false);

    return (
        <>
            <ScrollArea className="w-full h-full">
                <section className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                    <Tabs defaultValue="all">
                        <div className="flex items-center">
                            <TabsList>
                                <TabsTrigger className={'text-3xl'} value="all">Tất cả</TabsTrigger>
                                <TabsTrigger value="active">Active</TabsTrigger>
                                <TabsTrigger value="draft">Draft</TabsTrigger>
                                <TabsTrigger value="archived" className="hidden sm:flex">
                                    Archived
                                </TabsTrigger>
                            </TabsList>
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
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Thêm sản phẩm</span>
                                </Button>
                            </div>
                        </div>
                        <TabsContent value="all">
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
                                                <TableHead className={'text-[2rem]'}>Thông tin sản phẩm</TableHead>
                                                <TableHead className={'text-[2rem] text-center'}>Trạng thái</TableHead>
                                                <TableHead className="hidden text-[2rem] text-center md:table-cell">
                                                    Giá
                                                </TableHead>
                                                <TableHead className="hidden text-[2rem] text-center md:table-cell">
                                                    Giảm giá
                                                </TableHead>
                                                <TableHead className="hidden text-[2rem] text-center md:table-cell">
                                                    Lượt xem
                                                </TableHead>
                                                <TableHead className="text-[2rem] text-center">
                                                    Hành động
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {products && products.map((product, index) => (
                                                <TableRow key={index}>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <Image
                                                            alt="Product image"
                                                            className="aspect-square rounded-md object-cover"
                                                            height="64"
                                                            src={ApiImage + product.image}
                                                            width="70"
                                                        />
                                                    </TableCell>
                                                    <TableCell className="font-medium cursor-pointer text-2xl">
                                                        {product.name}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge className={'text-2xl cursor-pointer mx-auto block w-max'}
                                                               variant="outline">{ProductStatus[product.status as ProductStatusKey]}</Badge>
                                                    </TableCell>
                                                    <TableCell className="md:table-cell text-center text-2xl">
                                                        {transformCurrency(product.price)}
                                                    </TableCell>
                                                    <TableCell className="hidden text-2xl text-center md:table-cell">
                                                        {product.sale_off}%
                                                    </TableCell>
                                                    <TableCell className="hidden text-2xl text-center md:table-cell">
                                                        {product.views}
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
                                                                    className={'text-2xl'}>Xem chi
                                                                    tiết</DropdownMenuItem>
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
                                        Showing <strong>1-{limit}</strong> of <strong>{productPaging?.total}</strong>{" "}
                                        products
                                    </div>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </section>
            </ScrollArea>
            {showFormAdd && (
                <div onClick={() => setShowFormAdd(false)}
                     className="fixed left-0 z-50 top-0 bg-[rgba(0,0,0,0.7)] grid place-items-center w-full h-screen">
                    <div className="bg-white rounded-2xl shadow-xl h-max px-10 py-5 w-[50rem]"
                         onClick={(e) => e.stopPropagation()}>
                        <div className="heading">Thêm sản phẩm</div>
                        <ScrollArea className={'h-[75rem] px-5'}>
                            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8 mt-5">
                                <div className="grid gap-5">
                                    <Label className="text-[2rem]">Tên sản phẩm</Label>
                                    <Input
                                        type='text'
                                        aria-invalid="true"
                                        placeholder="Nhập tên sản phẩm"
                                        {...register('name')}
                                        className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                    />
                                </div>
                                <div className="grid gap-5">
                                    <Label htmlFor="email" className="text-[2rem]">Thương hiệu</Label>
                                    <Select {...register('id_brand', {required: "Bạn phải chọn một thương hiệu"})}>
                                        <SelectTrigger className="w-[98%] mx-auto text-2xl">
                                            <SelectValue placeholder="Thương hiệu"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {brands && brands.map((brand, index) => (
                                                <SelectItem key={index} className={'text-2xl'}
                                                            value={brand.id_brand}>{brand.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.id_brand && <span
                                        className="text-[1.5rem] pl-1 text-destructive font-medium">{errors.id_brand.message}</span>}
                                </div>
                                <div className="grid gap-5">
                                    <Label className="text-[2rem]">Hình ảnh đại diện</Label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            id="file-input"
                                            className="sr-only peer"
                                            aria-invalid="true"
                                        />
                                        <label
                                            htmlFor="file-input"
                                            className="inline-flex text-2xl items-center justify-center px-4 py-2 bg-primary text-white rounded-md cursor-pointer hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                        >
                                            Chọn file
                                        </label>
                                    </div>
                                    <div className="">

                                    </div>
                                </div>
                                <div className="grid gap-5">
                                    <Label className="text-[2rem]">Các tùy chọn của sản phẩm</Label>
                                    {options.map((option, index) => (
                                        <div key={index} className="grid gap-5">
                                            <div className="flex justify-between items-center">
                                                <Label className="text-[1.6rem]">Tùy
                                                    chọn {index + 1} {index === 0 ? '(bắt buộc)' : ''}</Label>
                                                {index !== 0 && (
                                                    <div className="text-2xl pr-5 cursor-pointer hover:underline">loại
                                                        bỏ</div>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-5">
                                                <Label className="text-[1.4rem] w-max">Màu:</Label>
                                                <Input
                                                    aria-invalid="true"
                                                    placeholder="Nhập màu, ví dụ: trắng"
                                                    className="focus:border-primary flex-1 border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                                    value={option.color}
                                                    // onChange={(e) => handleOptionChange(index, 'color', e.target.value)}
                                                />
                                            </div>
                                            <div className="flex items-center gap-5">
                                                <Label className="text-[1.4rem] w-max">Giá:</Label>
                                                <Input
                                                    aria-invalid="true"
                                                    placeholder="Nhập giá, ví dụ: 10000000"
                                                    className="focus:border-primary flex-1 border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                                    value={option.price}
                                                    // onChange={(e) => handleOptionChange(index, 'price', e.target.value)}
                                                />
                                            </div>
                                            <div className="flex items-center gap-5">
                                                <Label className="text-[1.4rem] w-max">Bộ nhớ trong:</Label>
                                                <Input
                                                    aria-invalid="true"
                                                    placeholder="Nhập bộ nhớ trong, ví dụ: 4GB/64GB"
                                                    className="focus:border-primary flex-1 border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                                    value={option.storage}
                                                    // onChange={(e) => handleOptionChange(index, 'storage', e.target.value)}
                                                />
                                            </div>
                                            <div className="flex items-center gap-5">
                                                <Label className="text-[1.4rem] w-max">Hình ảnh của tùy chọn:</Label>
                                                <Input
                                                    type="file"
                                                    aria-invalid="true"
                                                    placeholder="Nhập bộ nhớ trong, ví dụ: 4GB/64GB"
                                                    className="focus:border-primary flex-1 border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                                    // onChange={(e) => handleOptionChange(index, 'image', e.target.files[0])}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    <Button variant={'ghost'} className={'text-[1.6rem]'} onClick={handleAddOption}>
                                        + Thêm tùy chọn
                                    </Button>
                                </div>
                                <div className="grid gap-5">
                                    <Label className="text-[2rem]">Các Thông số kĩ thuật của sản phẩm</Label>
                                    <p className={'text-[1.2rem]'}>Lưu ý: không nhập Ram và Bộ nhớ trong vì đã nhập ở
                                        tùy chọn</p>
                                    {technicalSpecifications.map((specification, index) => (
                                        <div key={index} className="grid gap-5">
                                            <div className="flex items-center gap-5">
                                                <Label className="text-[1.6rem] w-max">Danh mục kĩ thuật: </Label>
                                                <Input
                                                    aria-invalid="true"
                                                    placeholder="Ví dụ: Màn hình, Bộ nhớ trong, ..."
                                                    className="focus:border-primary flex-1 border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                                    // onChange={(e) => handleOptionChange(index, 'color', e.target.value)}
                                                />
                                            </div>
                                            {specification.details.map((detail, index) => (
                                                <div key={index} className={'grid gap-5'}>
                                                    <div className="flex items-center gap-5">
                                                        <Label className="text-[1.4rem] w-max">Tên thông số:</Label>
                                                        <Input
                                                            aria-invalid="true"
                                                            placeholder="Ví dụ: Kích thước màn hình, ..."
                                                            className="focus:border-primary flex-1 border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                                            // onChange={(e) => handleOptionChange(index, 'color', e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="flex items-center gap-5">
                                                        <Label className="text-[1.4rem] w-max">Giá trị thông số:</Label>
                                                        <Input
                                                            aria-invalid="true"
                                                            placeholder="Ví dụ: 6,1 inch, ..."
                                                            className="focus:border-primary flex-1 border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                                            // onChange={(e) => handleOptionChange(index, 'color', e.target.value)}
                                                        />
                                                    </div>
                                                    <Button variant={'ghost'} className={'text-[1.4rem]'}
                                                            onClick={handleAddOption}>
                                                        + Thêm thông số
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                    <Button variant={'ghost'} className={'text-[1.6rem]'} onClick={handleAddOption}>
                                        + Thêm danh mục kĩ thuật
                                    </Button>
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
        </>
    );
}

export default Page;
