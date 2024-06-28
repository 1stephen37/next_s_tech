"use client";
import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {LuChevronDown} from "react-icons/lu";
import {motion} from "framer-motion"
import {ModeToggle} from "@/components/ButtonSwitchTheme";

function TopHeader() {
    return (
        <div className="bg-primary w-full h-[5rem]">
            <div className="container relative">
                <motion.div animate={{
                    x: ["0px", "20px", "0px"],
                    transition: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    },
                }} className="text-center select-none cursor-pointer text-secondary leading-[5rem] text-[1.5rem]">
                    Chương trình khuyến mãi siêu ưu đãi dành cho hội viên thân thiết - Giảm tới 50% <Link className="font-bold text-[1.5rem] hover:underline" href="/shop">Mua
                    Ngay</Link>
                </motion.div>
                <div className="absolute left-8 top-5">
                    <ModeToggle/>
                </div>
                <div className="absolute right-4 top-4 ">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className={"text-2xl"} variant="default">
                                Tiếng việt
                                <LuChevronDown/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-max">
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <span className="text-2xl">Tiếng Anh</span>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <span className="text-2xl">Tiếng Đức</span>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <span className="text-2xl">Tiếng Pháp</span>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;
