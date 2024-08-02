'use client';
import Heading from '@/components/sections/Heading';
import React, {useState} from 'react';
import ShopModel from "@/models/shop/shop.model";
import {FaMapMarker, FaPhoneAlt, FaGithub, FaFacebook, FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import Link from "next/link";
import {Button} from "@/components/ui/button";

function Page() {
    const [showForm, setShowForm] = useState(false);
    const {data: shop} = ShopModel.GetInformationShop();
    return (
        <>
            <section className="container ">
                <Heading title={'Liên hệ'}/>
                <section className={'mt-[4rem] bg-white shadow-md p-5 grid grid-cols-2 gap-x-10'}>
                    <section className={''}>
                        <h2 className="heading">Thông tin liên hệ</h2>
                        {shop && (
                            <div className="space-y-6 mt-10">
                                <div className="flex items-center gap-5 text-[2rem]">
                                    <FaMapMarker size={24}/>
                                    <p>Địa chỉ: {shop.address}</p>
                                </div>
                                <div className="flex items-center gap-5 text-[2rem]">
                                    <FaPhoneAlt size={24}/>
                                    <p>Số điện thoại: {shop.phone}</p>
                                </div>
                                <div className="flex items-center gap-5 text-[2rem]">
                                    <MdEmail size={24}/>
                                    <p>Địa chỉ email: {shop.email}</p>
                                </div>
                            </div>
                        )}
                        <Button onClick={() => setShowForm(true)} className="mt-10 py-[2rem]">Gửi thông tin đến chúng
                            tôi ngay !</Button>
                    </section>
                    <section>
                        <h2 className="heading">Mạng xã hội</h2>
                        <div className="flex mt-10 flex-col gap-5">
                            <Link href={'https://github.com/1stephen37'}
                                  className={'flex hover:underline items-center gap-5'}
                                  target={'_blank'}>
                                <FaGithub size={24}/>
                                <span className={'text-[2rem]'}>https://github.com/STECH</span>
                            </Link>
                            <Link href={'https://github.com/1stephen37'}
                                  className={'flex hover:underline items-center gap-5'}
                                  target={'_blank'}>
                                <FaFacebook size={24}/>
                                <span className={'text-[2rem]'}>https://facebook.com/STECH</span>
                            </Link>
                            <Link href={'https://github.com/1stephen37'}
                                  className={'flex items-center hover:underline gap-5'}
                                  target={'_blank'}>
                                <FaInstagramSquare size={24}/>
                                <span className={'text-[2rem]'}>https://instagram.com/STECH</span>
                            </Link>
                            <Link href={'https://github.com/1stephen37'}
                                  className={'flex items-center hover:underline gap-5'}
                                  target={'_blank'}>
                                <FaLinkedin size={24}/>
                                <span className={'text-[2rem]'}>https://linkend.com/STECH</span>
                            </Link>
                        </div>
                    </section>
                </section>
                {showForm && (
                    <div onClick={() => setShowForm(false)}
                         className="fixed left-0 z-50 top-0 bg-[rgba(0,0,0,0.7)] grid place-items-center w-full h-screen">
                        <div onClick={(e) => e.stopPropagation()} className="bg-white py-5 px-10 rounded">
                            <div className="flex flex-col items-center justify-center h-full dark:bg-gray-900">
                                <h2 className="heading">Liên hệ trực tiếp với chúng tôi</h2>
                                <p className="mb-8 text-[1.6rem] mt-3 font-normal text-gray-500 dark:text-gray-400">Liên
                                    hệ
                                    và
                                    nhận
                                    phản hồi nhanh nhất từ chúng tôi.</p>
                                <form
                                    className="w-[40dvh] bg-white border border-gray-200 rounded-lg shadow-md p-6 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="mb-4">
                                        <label
                                            className="block mb-2 text-[2rem] font-medium text-gray-900 dark:text-white"
                                            htmlFor="name">Họ và tên</label>
                                        <input type="text" id="name"
                                               className="block w-full text-2xl p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                               placeholder="Tên của bạn"/>
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="block mb-2 text-[2rem] font-medium text-gray-900 dark:text-white"
                                            htmlFor="email">Email</label>
                                        <input type="email" id="email"
                                               className="block w-full p-2.5 text-2xl border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                               placeholder="Email của bạn"/>
                                    </div>
                                    <div className="mb-4 flex flex-col gap-3">
                                        <label
                                            className="block mb-2 text-[2rem] font-medium text-gray-900 dark:text-white"
                                            htmlFor="message">Tin nhắn</label>
                                        <textarea id="message" rows={4}
                                                  className="block w-full p-2.5 text-2xl border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                  placeholder="Tin nhắn của bạn"></textarea>
                                    </div>
                                    <Button type="submit"
                                            className="w-max mx-auto py-[2rem] rounded-md">Gửi đến chúng tôi
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>

    );
}

export default Page;
