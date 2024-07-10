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
import {MdOutlineMenu} from "react-icons/md";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import {useAppSelector, useAppDispatch} from '@/redux/hooks'
import {searchChange} from "@/redux/reducers/search.reducer";
import {useRouter} from 'next/navigation';
import ProductsModel from "@/models/products/products.model";
import BoxProductSearch from "@/components/BoxProductSearch";

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
    const { data : productsListSearch, isLoading : isSearching } = ProductsModel.GetProductsByKeyword(4, search);
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
                    <Logo href={'/'}/>
                    <div className="w-max flex items-center gap-5 relative">
                        <form onSubmit={handleSearchSubmit} className="relative h-max">
                            <input
                                value={search}
                                onChange={handleInputChange}
                                onBlur={() => setTimeout(() => setShowSearchBox(false), 800)}
                                onFocus={handleInputFocus}
                                className="text-[1.6rem] pl-[1rem] border-[0.2px] border-solid border-primary pr-[2.5rem] rounded-[5px] w-[60rem] h-[5rem] outline-none"
                                placeholder="Bạn đang tìm gì ?" type="text"/>
                            <button type='submit'>
                                <FaSearch
                                    className="absolute text-primary top-5 right-4 font-black cursor-pointer text-[2rem]"/>
                            </button>
                            {showSearchBox && (
                                <div onClick={() => setShowSearchBox(true)} className="absolute group: px-8 py-5 border border-solid border-black bg-white shadow-md  rounded w-full h-max top-[7rem] grid grid-cols-2 gap-5">
                                    {productsListSearch && productsListSearch.map((product, index) => (
                                        <BoxProductSearch name={product.name} image={product.image} sale={product.sale_off} price={product.price.toString()}
                                                          key={index} brand={product.brand_name} id={product.id_product} index={index} />
                                    ))}
                                </div>
                            )}
                        </form>
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
                                            <Link
                                                className="text-[2rem] relative hover:text-primary transition-all capitalize"
                                                href={link.path}>
                                                {link.path === path && (
                                                    <motion.span initial={{y: '-100%'}} animate={{y: 0}}
                                                                 transition={{type: 'tween'}}
                                                                 layoutId={'underline'}
                                                                 className={`absolute left-0 top-full h-[2px] w-full bg-primary`}/>
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
