import React from 'react';
import Logo from "@/components/logo";
import Link from "next/link";
import {Button} from "@/components/ui/button";

function MainFooter() {
    const linkStyle = "text-[1.6rem]";

    return (
        <footer className="mt-[4rem] shadow-2xl text-primary h-[30rem]">
            <div className="container  border-t p-5 border-solid border-primary flex items-center justify-between">
                <div className="">
                    <Logo className={"text-primary"} />
                    <div className="">
                        <h1 className="text-[2rem]">Đăng kí ngay</h1>
                        <div className="text-[1.6rem]">Để nhận thông tin khuyến mãi sớm nhất</div>
                        <div className="mt-5 flex gap-2 h-max items-center">
                            <input placeholder="Email của bạn" className="outline-none text-2xl border border-solid border-primary w-[20rem] h-[3.5rem] pl-5 rounded" type="text"/>
                            <Button size={'lg'} className="">Gửi ngay</Button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <ul className="flex flex-col gap-5">
                        <li>
                            <Link className={linkStyle} href={''}>Chính Sách</Link>
                        </li>
                        <li>
                            <Link className={linkStyle} href={''}>Chính Sách</Link>
                        </li>
                        <li>
                            <Link className={linkStyle} href={''}>Chính Sách</Link>
                        </li>
                    </ul>
                </div>
                <div className="">

                </div>
                <div className=""></div>
            </div>
            <div className="text-[1.8rem] text-center py-5 font-bold">@Copyright by Stephen Nguyễn - S team</div>
        </footer>
    );
}

export default MainFooter;
