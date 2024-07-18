"use client";
import {motion} from "framer-motion";
import React, {FormEvent, FormEventHandler, useEffect, useState} from 'react';
import Link from "next/link";
import {FaSearch} from "react-icons/fa";
import {LuShoppingCart} from "react-icons/lu";
import TopHeader from "@/components/TopHeader";
import {usePathname} from "next/navigation";
import Logo from "@/components/logo";
import {FaRegUser} from "react-icons/fa";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {useAppSelector, useAppDispatch} from '@/redux/hooks'
import {searchChange} from "@/redux/reducers/search.reducer";
import {useRouter} from 'next/navigation';
import ProductsModel from "@/models/products/products.model";
import BoxProductSearch from "@/components/BoxProductSearch";
import Image from "next/image";

const imagesBrands = [
    {
        name: 'iphone logo',
        src: 'iphoneBrands.png'
    },
    {
        name: 'samsung logo',
        src: 'samsung-logo.png'
    },
    {
        name: 'xiaomi logo',
        src: 'xiaomiLogo.png'
    },
    {
        name: 'oppo logo',
        src: 'oppo-brand-logo.png'
    },
    {
        name: 'realme logo',
        src: 'realmeLogo.png'
    },
    {
        name: 'vivo logo',
        src: 'Vivo-Logo.png'
    },

]

const links = [
    {
        path: '/', name: "Trang chủ"
    },
    {
        path: '/products', name: "sản phẩm"
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
    const router = useRouter();
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [header, setHeader] = useState(false);
    useEffect(() => {
        const listenerScroll = () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        };
        window.addEventListener('scroll', listenerScroll);
        return () => window.removeEventListener('scroll', listenerScroll);
    }, []);
    const path = usePathname();
    const search = useAppSelector((state) => state.search.searchContent);
    const {data: productsListSearch, isLoading: isSearching} = ProductsModel.GetProductsByKeyword(4, search);
    const dispatch = useAppDispatch()
    const handleSearchSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/products?search=${search}`);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchChange(e.target.value));
        if (e.target.value.length === 0) {
            setShowSearchBox(false)
        } else {
            setShowSearchBox(true);
        }
    }

    const handleInputFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (search === '') {
            setShowSearchBox(false)
        } else {
            setShowSearchBox(true)
        }
    }

    return (
        <>
            <TopHeader/>
            <header
                className={`w-full h-max py-[2rem] sticky top-0 z-30 bg-white transition-all dark:bg-accent ${header ? 'shadow-lg' : ''}`}>
                <div className="container flex justify-between">
                    <div className="flex gap-5 items-center">
                        <Logo href={'/'}/>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={'text-[2rem] bg-none'}>Danh
                                        Mục</NavigationMenuTrigger>
                                    <NavigationMenuContent
                                        className="flex gap-5 py-5 px-5 lg:w-max lg:max-w-[62rem] flex-col">
                                        <NavigationMenuLink asChild>
                                            <ul className="container h-full flex gap-7 border-gray-300 border-b-2 border-solid pb-5">
                                                {links.map((link, index) => (
                                                    <li key={index} className={'text-left'}>
                                                        <Link
                                                            className="text-[2rem] relative hover:text-primary hover:text-gray-600 transition-all capitalize"
                                                            href={link.path}>
                                                            {link.path === path && (
                                                                <motion.span initial={{y: '-100%'}}
                                                                             animate={{y: 0}}
                                                                             transition={{type: 'tween'}}
                                                                             layoutId={'underline'}
                                                                             className={`absolute left-0 top-full h-[2px] w-full bg-primary`}/>
                                                            )}
                                                            {link.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink className={'grid grid-cols-2'}>
                                            <div className="">
                                                <h1 className={`text-center text-2xl`}>Các Hãng điện thoại phổ biến</h1>
                                                <div className="flex flex-col gap-5">
                                                    {imagesBrands.map((image, index) => (
                                                        <div key={index} className="cursor-pointer">
                                                            {image.name}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-5">
                                                <Link href="/docs" title="Introduction">
                                                    Re-usable components built using Radix UI and Tailwind CSS.
                                                </Link>
                                                <Link href="/docs/installation" title="Installation">
                                                    How to install dependencies and structure your app.
                                                </Link>
                                                <Link href="/docs/primitives/typography" title="Typography">
                                                    Styles for headings, paragraphs, lists...etc
                                                </Link>
                                            </div>
                                        </NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="w-max flex items-center gap-5 relative">
                        <form onSubmit={handleSearchSubmit} className="relative h-max">
                            <input
                                value={search}
                                onChange={handleInputChange}
                                onBlur={() => setTimeout(() => setShowSearchBox(false), 200)}
                                onFocus={handleInputFocus}
                                className="text-[1.6rem] pl-[1rem] border-[0.2px] border-solid border-primary pr-[2.5rem] rounded-[5px] w-[60rem] h-[5rem] outline-none"
                                placeholder="Bạn đang tìm gì ?" type="text"/>
                            <button type='submit'>
                                <FaSearch
                                    className="absolute text-primary top-5 right-4 font-black cursor-pointer text-[2rem]"/>
                            </button>
                            {showSearchBox && (
                                <div onClick={() => setShowSearchBox(true)}
                                     className="absolute group: px-8 py-5 border border-solid border-black bg-white shadow-md  rounded w-full h-max top-[7rem] grid grid-cols-2 gap-5">
                                    {productsListSearch && productsListSearch.map((product, index) => (
                                        <BoxProductSearch name={product.name} image={product.image}
                                                          sale={product.sale_off} price={product.price.toString()}
                                                          key={index} brand={product.brand_name} id={product.id_product}
                                                          index={index}/>
                                    ))}
                                    {productsListSearch && productsListSearch.length <= 0 && (
                                        <p className="text-2xl">Không tìm thấy sản phẩm phù hợp</p>
                                    )}
                                </div>
                            )}
                        </form>

                        {/*<Sheet>*/}
                        {/*    <SheetTrigger asChild>*/}
                        {/*        <div className="text-2xl cursor-pointer rounded-[3px] h-max p-1 w-max">*/}
                        {/*            Sản phẩm*/}
                        {/*        </div>*/}
                        {/*    </SheetTrigger>*/}
                        {/*    <SheetContent className="h-[8rem]" side={'top'}>*/}

                        {/*    </SheetContent>*/}
                        {/*</Sheet>*/}
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
    )
        ;
}

export default MainHeader;
