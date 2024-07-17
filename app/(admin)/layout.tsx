"use client";
import React from 'react';
import {Button} from "@/components/ui/button";
import Logo from "@/components/logo";
import Link from 'next/link';
import {BiSolidCategory} from "react-icons/bi";
import {ScrollArea} from "@/components/ui/scroll-area";
import {FaHome} from "react-icons/fa";
import {usePathname} from "next/navigation";
import {TbCategory, TbTruckDelivery} from "react-icons/tb";
import {LuPackage} from "react-icons/lu";
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
    DropdownMenu, DropdownMenuCheckboxItem,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const links = [
    {
        href: "/dashboard",
        name: "trang quản trị",
        icon: <FaHome/>
    },
    {
        href: "/dashboard/categories",
        name: "danh mục",
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
        href: "/dashboard/orders",
        name: "đơn hàng",
        icon: <BiSolidCategory/>
    }
]

function Layout({children}: { children: React.ReactElement }) {
    const path = usePathname();

    console.log(links.filter(link => link.href === path)[0].name);

    return (
        <div className="w-full h-screen py-5 px-10 flex min-h-screen bg-muted/40">
            <div className="left-bar w-[15%]">
                <Logo className="pl-10" href={'/dashboard'}/>
                <p className="p pl-10 text-primary">Bring technology to everyone</p>
                <ScrollArea className="mt-[3rem] h-[60dvh]">
                    <div className="flex flex-col gap-[1rem] h-max">
                        {links.map((link, index) => (
                            <Link key={index} className={`text-[2rem] capitalize flex w-max py-5 px-10
                                 items-center gap-5 ${path === link.href ? 'bg-primary rounded-full text-secondary' : ''}`}
                                  href={link.href}>
                                {link.icon}
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </ScrollArea>
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
                    <Breadcrumb className="hidden md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link className="text-3xl" href="/dashboard">Trang quản trị</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                {path !== '/dashboard' && (
                                    <>
                                        <BreadcrumbSeparator/>
                                        <BreadcrumbPage
                                            className="text-3xl cursor-pointer">{links.filter(link => link.href === path)[0].name}</BreadcrumbPage>
                                    </>
                                )}
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="relative ml-auto h-[4rem] flex-1 md:grow-0">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="w-full lg:h-[3.5rem] text-3xl outline-0 rounded-lg bg-background pl-8 md:w-[200px] lg:w-[400px]"
                        />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="overflow-hidden rounded-full"
                            >
                                <Image
                                    src="/images/sections/avatar-user-review-3.jpg"
                                    width={36}
                                    height={36}
                                    alt="Avatar"
                                    className="overflow-hidden rounded-full"
                                />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="sm:px-6 sm:py-0 md:gap-8">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;
