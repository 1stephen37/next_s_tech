"use client";
import React, {useEffect} from 'react';
import {Button} from "@/components/ui/button";
import Logo from "@/components/Logo";
import Link from 'next/link';
import {ScrollArea} from "@/components/ui/scroll-area";
import {FaHome} from "react-icons/fa";
import {usePathname} from "next/navigation";
import {TbCategory, TbTruckDelivery} from "react-icons/tb";
import {LuPackage} from "react-icons/lu";
import {IoMdSettings} from "react-icons/io";
import {FaTicketAlt} from "react-icons/fa";
import {FaRegUser} from "react-icons/fa";
import {CiShop} from "react-icons/ci";
import {FaArrowLeft} from "react-icons/fa";
import {
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    Search,
    ShoppingCart,
    Users2
} from "lucide-react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {Input} from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import {FaBox} from 'react-icons/fa';
import {FaComment} from "react-icons/fa";
import {IoDocument} from "react-icons/io5";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {getInitialFromLocalStorage} from "@/redux/reducers/user.reducer";

const links = [
    {
        href: "/dashboard",
        name: "trang quản trị",
        icon: <FaHome/>
    },
    {
        href: "/dashboard/brands",
        name: "thương hiệu",
        icon: <TbCategory/>
    },
    {
        href: "/dashboard/products",
        name: "sản phẩm",
        icon: <LuPackage/>
    },
    {
        href: "/dashboard/deliveries",
        name: "vận chuyển",
        icon: <TbTruckDelivery/>
    },
    {
        href: "/dashboard/reviews",
        name: "Bình luận",
        icon: <FaComment/>
    },
    {
        href: "/dashboard/vouchers",
        name: "mã giảm giá",
        icon: <FaTicketAlt/>
    },
    {
        href: "/dashboard/users",
        name: "người dùng",
        icon: <FaRegUser/>
    },
    {
        href: "/dashboard/shop",
        name: "Cửa hàng",
        icon: <CiShop/>
    },
    {
        href: "/dashboard/orders",
        name: "đơn hàng",
        icon: <FaBox/>
    },
]

const linksChildPage = [
    {
        href: "/dashboard",
        name: "trang quản trị",
    },
    {
        href: "/dashboard/brands",
        name: "thương hiệu",
    },
    {
        href: "/dashboard/products",
        name: "sản phẩm",
    },
    {
        href: "/dashboard/products/detail",
        name: "Chi tiết sản phẩm",
    },
    {
        href: "/dashboard/deliveries",
        name: "vận chuyển",
    },
    {
        href: "/dashboard/reviews",
        name: "Bình luận",
    },
    {
        href: "/dashboard/vouchers",
        name: "mã giảm giá",
    },
    {
        href: "/dashboard/users",
        name: "người dùng",
    },
    {
        href: "/dashboard/shop",
        name: "Cửa hàng",
    },
    {
        href: "/dashboard/orders",
        name: "đơn hàng",
    },
]

function Layout({children}: { children: React.ReactElement }) {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user.user);

    const currentPath = usePathname();
    const basePath = currentPath?.split('/').slice(0, 3).join('/'); // Lấy 3 phần đầu: "/dashboard/categories"

    const currentPageIndex = links.findIndex(link => link.href === basePath);

    const trimmedPath = currentPath.replace(/\/\d+$/, '');
    const path  = linksChildPage.find(link => trimmedPath.endsWith(link.href)) || {
        name: 'Không tìm thấy trang',
        href: '/'
    };

    useEffect(() => {
        dispatch(getInitialFromLocalStorage());
    }, []);

    return (
        <div className="w-full h-screen py-5 px-10 flex min-h-screen bg-muted/40 relative">
            <div className="left-bar w-[15%]">
                <Logo className="pl-10" href={'/dashboard'}/>
                <p className="p pl-10 text-primary">Mang công nghệ tới mọi người</p>
                <ScrollArea className="mt-[3rem] min-h-[60rem] h-[62dvh]">
                    <div className="flex flex-col gap-[1rem] h-max">
                        {links.map((link, index) => (
                            <Link key={index} className={`text-[2rem] capitalize flex w-max py-5 px-10
                                 items-center gap-5 ${currentPageIndex === index ? 'bg-primary rounded-full text-secondary' : ''}`}
                                  href={link.href}>
                                {link.icon}
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </ScrollArea>
                <div className="bg-white w-max shadow-md rounded px-10 py-5 flex flex-col gap-5">
                    <Link href={'/system/setting'} className="flex items-center gap-5 cursor-pointer w-max ">
                        <IoMdSettings size={24}/>
                        <span className="text-[2rem] hover:underline">Cài đặt</span>
                    </Link>
                    <Link href={'/system/document'} className="flex items-center gap-5 cursor-pointer w-max">
                        <IoDocument size={24}/>
                        <span className="text-[2rem] hover:underline">Tài liệu</span>
                    </Link>
                    <Link href={'/'} className="flex items-center gap-5 cursor-pointer w-max">
                        <FaArrowLeft size={24}/>
                        <span className="text-[2rem] hover:underline">Trở về trang chủ</span>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <header
                    className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelLeft className="h-5 w-5"/>
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="sm:max-w-xs">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                                >
                                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110"/>
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Home className="h-5 w-5"/>
                                    Dashboard
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <ShoppingCart className="h-5 w-5"/>
                                    Orders
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-foreground"
                                >
                                    <Package className="h-5 w-5"/>
                                    Products
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Users2 className="h-5 w-5"/>
                                    Customers
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <LineChart className="h-5 w-5"/>
                                    Settings
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Breadcrumb className="hidden md:flex items-center">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link className="text-[2.4rem]" href="/dashboard">Trang quản trị</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {path.href !== '/dashboard' && (
                                <BreadcrumbSeparator className={'text-[2.4rem]'}/>
                            )}
                            <BreadcrumbItem>
                                {path.href !== '/dashboard' && (
                                    <BreadcrumbPage
                                        className="text-[2.4rem] capitalize font-medium cursor-pointer">{path.name}</BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="ml-auto">
                        notification
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="overflow-hidden h-max w-max rounded-full"
                            >
                                <Image
                                    src="/images/sections/avatar-user-review-2.jpg"
                                    width={40}
                                    height={40}
                                    alt="Avatar"
                                    className="overflow-hidden w-max h-max rounded-full"
                                />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel className={'text-2xl capitalize'}>{user.name}</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem className={'text-2xl'}>Hồ sơ cá nhân</DropdownMenuItem>
                            <DropdownMenuItem className={'text-2xl'}>Hỗ trợ</DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem className={'text-2xl'}>Đăng xuất</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;
