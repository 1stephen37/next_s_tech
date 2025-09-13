import React from 'react';
import Logo from "@/components/Logo";
import Link from "next/link";

function MainFooter() {
    const linkStyle = "text-[1.6rem] hover:underline";

    return (
        <footer className="bg-white w-full mt-[4rem] dark:bg-gray-900">
            <div className="container lg:py-8">
                <div className="xl:flex xl:justify-between">
                    <div className="">
                        <Logo className={"text-primary"}/>
                        <div className="">
                            <h1 className="text-[1.6rem] w-max">Mang công nghệ đến tất cả mọi người</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 xl:gap-x-[15rem] sm:grid-cols-3">
                        <div className='pt-3'>
                            <h2 className="mb-4 text-[2rem] font-semibold text-gray-900 uppercase dark:text-white">Về
                                chúng tôi</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href={'/about'} className={linkStyle}>S Tech</Link>
                                </li>
                                <li>
                                    <Link target={'_blank'} href={'https://stephen-nguyen-portfolio.vercel.app/en'}
                                          className={linkStyle}>Stephen Nguyen</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='pt-3'>
                            <h2 className="mb-4 text-[2rem] font-semibold text-gray-900 uppercase dark:text-white">Theo
                                dõi chúng tôi</h2>
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
                            <h2 className="mb-4 text-[2rem] font-semibold text-gray-900 uppercase dark:text-white">Giấy
                                phép</h2>
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
