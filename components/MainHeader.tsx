"use client";
import { motion } from "framer-motion";
import React, {useEffect, useState} from 'react';
import { FaRegCircleQuestion } from "react-icons/fa6"
import Link from "next/link";
import {FaUser, FaHeart, FaShoppingCart, FaSearch} from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import TopHeader from "@/components/TopHeader";
import {usePathname} from "next/navigation";
import Logo from "@/components/logo";
import { FaRegUser } from "react-icons/fa";
import {MdOutlineMenu} from "react-icons/md";
import {
    Sheet, SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";

const links = [
    {
        path: '/', name: "Trang chủ"
    },
    {
        path: '/shop', name: "sản phẩm"
    },
    {
        path: '/policy', name: "chính sách"
    },
    {
        path: '/about', name: "về chúng tôi"
    },
    {
        path: '/contact', name: "liên hệ"
    },
]

function MainHeader() {
    const linkStyle = "text-primary capitalize text-[2rem]";
    const path = usePathname();

    return (
        <>
            <TopHeader/>
            <header className={`w-full h-max mt-[2rem] py-[2rem] sticky top-0 z-30 transition-all
            py-4 bg-white shadow-lg dark:bg-accent`}>
                <div className="container flex justify-between">
                    <Logo href={'/'}/>
                    <div className="w-max flex items-center gap-5">
                        <div className="relative h-max">
                            <input
                                className="text-[1.6rem] pl-[1rem] border-[0.2px] border-solid border-primary pr-[2.5rem] rounded-[5px] w-[60rem] h-[5rem] outline-none"
                                placeholder="Bạn đang tìm gì ?" type="text"/>
                            <FaSearch
                                className="absolute text-primary top-5 right-4 font-black cursor-pointer text-[2rem]"/>
                        </div>
                        <Sheet>
                            <SheetTrigger asChild>
                                <div className="bg-primary rounded-[3px] h-max p-1  w-max">
                                    <MdOutlineMenu className="text-secondary text-[2rem] cursor-pointer"/>
                                </div>
                            </SheetTrigger>
                            <SheetContent className="h-[8rem]" side={'top'}>
                                <ul className="container h-full flex items-center justify-around">
                                    {links.map((link, index) => (
                                        <li key={index} className={''}>
                                            <Link className="text-[2rem] relative hover:text-primary transition-all capitalize" href={link.path}>
                                                {link.path === path && (
                                                    <motion.span initial={{y: '-100%'}} animate={{y: 0}} transition={{type: 'tween'}}
                                                                 layoutId={'underline'} className={`absolute left-0 top-full h-[2px] w-full bg-primary`}/>
                                                )}
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="flex gap-5 items-center">
                        <Link href={'/sign-in'} className="flex gap-3 items-center">
                            <FaRegUser className="text-[2rem] cursor-pointer"/>
                            <span className="text-[2rem]">Tài khoản</span>
                        </Link>
                        <Link href="/cart" className="flex gap-3 items-center">
                            <LuShoppingCart className="text-[2rem] cursor-pointer"/>
                            <span className="text-[2rem]">Giỏ hàng</span>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default MainHeader;
