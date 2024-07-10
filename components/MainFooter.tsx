import React from 'react';
import Logo from "@/components/logo";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

function MainFooter() {
    const linkStyle = "text-[1.6rem] hover:underline";

    return (
        // <footer className="mt-[4rem] shadow-2xl text-primary h-[30rem]">
        //     <div className="container h-max border-t p-5 border-solid border-primary flex items-center justify-between">
        //         <div className="h-max">
        //             <Logo className={"text-primary"}/>
        //         </div>
        //         <div className="w-[15%] min-h-[16rem] h-full">
        //             <ul className="flex min-h-[16rem] h-full flex-col justify-around">
        //                 <li className={cn(linkStyle + 'font-black')}>
        //                     Về S Tech
        //                 </li>
        //                 <li>
        //                     <Link className={linkStyle + 'block'} href={''}>Điều khoản</Link>
        //                 </li>
        //                 <li>
        //                     <Link className={linkStyle} href={''}>Chính Sách</Link>
        //                 </li>
        //                 <li>
        //                     <Link className={linkStyle} href={''}>Giấy phép</Link>
        //                 </li>
        //                 <li>
        //                     <Link className={linkStyle} href={''}>Chính Sách</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="w-[15%]">
        //             <ul className="flex flex-col gap-5">
        //                 <li>
        //                     <Link className={linkStyle} href={''}>Chính Sách</Link>
        //                 </li>
        //                 <li>
        //                     <Link className={linkStyle} href={''}>Điều khoản</Link>
        //                 </li>
        //                 <li>
        //                     <Link className={linkStyle} href={''}>Chính Sách</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="w-[15%]">
        //             <ul className="w-full flex flex-col gap-5">
        //                 <li>
        //                     <Link className={linkStyle + ' text-right block '} href={''}>Chính Sách</Link>
        //                 </li>
        //                 <li>
        //                     <Link className={linkStyle + ' text-right block '} href={''}>Điều khoản</Link>
        //                 </li>
        //                 <li>
        //                     <Link className={linkStyle + ' text-right block '} href={''}>Chính Sách</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        //     <div className="text-[1.8rem] text-center py-5 font-bold">@Copyright by Stephen Nguyễn - S team</div>
        // </footer>

        <footer className="bg-white w-full mt-[4rem] dark:bg-gray-900">
            <div className="container lg:py-8">
                <div className="xl:flex xl:justify-between">
                    <div className="">
                        <Logo className={"text-primary"}/>
                        <div className="">
                            <h1 className="text-[1.6rem] w-max">Đăng kí để nhận thông tin khuyến mãi sớm nhất</h1>
                            <div className="mt-5 flex gap-2 h-max items-center">
                                <input placeholder="Email của bạn"
                                       className="outline-none text-2xl border border-solid border-primary w-[20rem] h-[3.5rem] pl-5 rounded"
                                       type="text"/>
                                <Button size={'lg'} className="">Gửi ngay</Button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 xl:gap-x-[15rem] sm:grid-cols-3">
                        <div className='pt-3'>
                            <h2 className="mb-4 text-[2rem] font-semibold text-gray-900 uppercase dark:text-white">Về chúng tôi</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className={linkStyle}>S Tech</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className={linkStyle}>S Team</a>
                                </li>
                            </ul>
                        </div>
                        <div className='pt-3'>
                            <h2 className="mb-4 text-[2rem] font-semibold text-gray-900 uppercase dark:text-white">Theo dõi chúng tôi</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite"
                                       className={linkStyle}>Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className={linkStyle}>Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div className='pt-3'>
                            <h2 className="mb-4 text-[2rem] font-semibold text-gray-900 uppercase dark:text-white">Giấy phép</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className={linkStyle}>Điều khoản sử dụng</a>
                                </li>
                                <li>
                                    <a href="#" className={linkStyle}>Điều khoản về quyền riêng tư</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="text-[1.8rem] text-center font-bold">
                    @Copyright by Stephen Nguyễn - S team
                </div>
            </div>
        </footer>
    );
}

export default MainFooter;
