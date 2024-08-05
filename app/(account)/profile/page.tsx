'use client';
import React, {useEffect} from 'react';
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import Image from "next/image";
import {getInitialFromLocalStorage} from "@/redux/reducers/user.reducer";
import {ApiImage, UserRole} from "@/app/constants";

type UserRoleKey = keyof typeof UserRole;

function Page() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getInitialFromLocalStorage());
    }, []);
    const userInformation = useAppSelector((state) => state.user.user);
    const router = useRouter();
    if (userInformation.image) {
        return (
            <section className={'w-max h-max flex gap-10 items-center'}>
                <div className="bg-white w-[50rem] shadow-lg rounded-lg p-5">
                    <Button onClick={() => router.push('/', {scroll: false})} variant='link'
                            className="text-2xl mb-3 text-gray-500">
                        Trở về trang chủ
                    </Button>
                    <div className="flex flex-col items-center">
                        <Image src={userInformation.image} className={'object-contain rounded-full'} alt={''}
                               width={150} height={150}/>
                        <h1 className="text-[2.4rem] font-semibold capitalize mb-2">{userInformation.name}</h1>
                        <p className="text-gray-500 text-2xl mb-4">Khách hàng</p>
                        <div className="flex space-x-4 text-2xl mb-4">
                            <a
                                href="#"
                                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                            >
                                Lịch sử mua hàng
                            </a>
                        </div>
                        <div className="mb-4 w-[80%] mx-auto">
                            <h2 className="text-[2.2rem] font-medium mb-2">Thông tin cá nhân</h2>
                            <p className="text-gray-600 text-[1.6rem]">
                                Họ và tên: {userInformation.name}
                                <br/>
                                Địa chỉ: {userInformation.address || "chưa cập nhật"}
                                <br/>
                                Số điện thoại: {userInformation.phone || "chưa cập nhật"}
                                <br/>
                                Email: {userInformation.email || "chưa cập nhật"}
                            </p>
                        </div>
                        <Button className={"py-8 rounded-xl px-5"}>Đăng xuất</Button>
                    </div>
                </div>
                <div className="bg-white w-[50rem] h-max shadow-lg rounded-lg p-5">
                    <h2 className="text-[2.2rem] text-center mb-5 font-medium mb-2">Cập nhật thông tin người dùng</h2>
                    <form className="flex flex-col">
                        <div className="mb-5">
                            <label
                                className="block text-gray-700 text-2xl font-bold mb-2"
                                htmlFor="mainName"
                            >
                                Họ và tên người dùng
                            </label>
                            <input
                                className="shadow text-2xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="mainName"
                                type="text"
                                placeholder="Nhập tên người đặt hàng"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                className="block text-gray-700 text-2xl font-bold mb-2"
                                htmlFor="mainName"
                            >
                                Địa chỉ người dùng
                            </label>
                            <input
                                className="shadow text-2xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="mainName"
                                type="text"
                                placeholder="Nhập tên người đặt hàng"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                className="block text-gray-700 text-2xl font-bold mb-2"
                                htmlFor="mainName"
                            >
                                Số điện thoại người dùng
                            </label>
                            <input
                                className="shadow text-2xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="mainName"
                                type="text"
                                placeholder="Nhập tên người đặt hàng"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                className="block text-gray-700 text-2xl font-bold mb-2"
                                htmlFor="mainName"
                            >
                                Email người dùng
                            </label>
                            <input
                                className="shadow text-2xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="mainName"
                                type="text"
                                placeholder="Nhập tên người đặt hàng"
                            />
                        </div>
                    </form>
                    <Button className={"py-8 mx-auto w-max rounded-xl px-5"}>Cập nhật</Button>
                </div>
            </section>
        );
    } else {
        return (
            <section className={'w-max h-max flex gap-10 items-center'}>
                <div className="bg-white w-[30rem] shadow-lg rounded-lg p-5">
                    <Button onClick={() => router.push('/', {scroll: false})} variant='link'
                            className="text-2xl mb-3 text-gray-500">
                        Trở về trang chủ
                    </Button>
                    <div className="flex flex-col items-center">
                        <Image
                            src={userInformation.image ? (userInformation.image.startsWith('https') ? (userInformation.image) : (ApiImage + userInformation.image)) : '/images/sections/avatar-user-review-2.jpg'}
                            className={'object-contain rounded-full'} alt={''}
                            width={150} height={150}/>
                        <h1 className="text-[2.4rem] font-semibold capitalize mb-2">{userInformation.name}</h1>
                        <p className="text-gray-500 text-2xl mb-4 first-letter:capitalize">{UserRole[userInformation.role as UserRoleKey]}</p>
                        <div className="flex space-x-4 text-2xl mb-4">
                            <a
                                href="#"
                                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                            >
                                Lịch sử mua hàng
                            </a>
                        </div>
                        <div className="mb-4 w-[80%] mx-auto">
                            <h2 className="text-[2.2rem] font-medium mb-2">Thông tin cá nhân</h2>
                            <p className="text-gray-600 text-[1.6rem]">
                                Họ và tên: {userInformation.name}
                                <br/>
                                Địa chỉ: {userInformation.address || "chưa cập nhật"}
                                <br/>
                                Số điện thoại: {userInformation.phone || "chưa cập nhật"}
                                <br/>
                                Email: {userInformation.email || "chưa cập nhật"}
                            </p>
                        </div>
                        <Button className={"py-8 rounded-xl px-5"}>Đăng xuất</Button>
                    </div>
                </div>
                <div className="bg-white w-[50rem] h-max shadow-lg rounded-lg p-5">
                    <h2 className="text-[2.2rem] text-center mb-5 font-medium mb-2">Cập nhật thông tin người dùng</h2>
                    <form className="flex flex-col">
                        <div className="mb-5">
                            <label
                                className="block text-gray-700 text-2xl font-bold mb-2"
                                htmlFor="mainName"
                            >
                                Họ và tên người dùng
                            </label>
                            <input
                                className="shadow text-2xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="mainName"
                                type="text"
                                placeholder="Nhập tên người đặt hàng"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                className="block text-gray-700 text-2xl font-bold mb-2"
                                htmlFor="mainName"
                            >
                                Địa chỉ người dùng
                            </label>
                            <input
                                className="shadow text-2xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="mainName"
                                type="text"
                                placeholder="Nhập tên người đặt hàng"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                className="block text-gray-700 text-2xl font-bold mb-2"
                                htmlFor="mainName"
                            >
                                Số điện thoại người dùng
                            </label>
                            <input
                                className="shadow text-2xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="mainName"
                                type="text"
                                placeholder="Nhập tên người đặt hàng"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                className="block text-gray-700 text-2xl font-bold mb-2"
                                htmlFor="mainName"
                            >
                                Email người dùng
                            </label>
                            <input
                                className="shadow text-2xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="mainName"
                                type="text"
                                placeholder="Nhập tên người đặt hàng"
                            />
                        </div>
                    </form>
                    <Button className={"py-8 mx-auto w-max rounded-xl px-5"}>Cập nhật</Button>
                </div>
            </section>
        );
    }
}

export default Page;
