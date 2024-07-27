'use client';
import React, {useEffect} from 'react';
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import Image from "next/image";
import {getInitialFromLocalStorage} from "@/redux/reducers/user.reducer";
import {getCartFromLocalStorage} from "@/redux/reducers/cart.reducer";

function Page() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getInitialFromLocalStorage());
    }, []);
    const userInformation = useAppSelector((state) => state.user.user);
    console.log(userInformation);
    const router = useRouter();
    if (userInformation.image) {
        return (
            <section className={'w-max h-max'}>
                <div className="bg-gray-100 shadow-lg rounded-lg w-full p-8">
                    <Button onClick={() => router.push('/', {scroll: false})} variant='link'
                            className="text-2xl mb-5 text-gray-500">
                        Trở về trang chủ
                    </Button>
                    <div className="flex flex-col items-center">
                        <Image src={userInformation.image} className={'object-contain rounded-full'} alt={''} width={150} height={150}/>
                        <h1 className="text-[2.4rem] font-semibold capitalize mb-2">{userInformation.name}</h1>
                        <p className="text-gray-500 text-2xl mb-4">Khách hàng</p>
                        <div className="flex space-x-4 text-2xl mb-4">
                            <a
                                href="#"
                                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                            >
                                Lịch sử mua hàng
                            </a>
                            <a
                                href="#"
                                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                            >
                                Cập nhận thông tin
                            </a>
                        </div>
                        <div className="mb-4 w-[80%] mx-auto">
                            <h2 className="text-[2.2rem] font-medium mb-2">Thông tin cá nhân</h2>
                            <p className="text-gray-600 text-[1.6rem]">
                                Họ và tên: {userInformation.name}
                                <br/>
                                Địa chỉ: {userInformation.address}
                                <br/>
                                Số điện thoại: {userInformation.phone}
                                <br/>
                                Email: {userInformation.email}
                            </p>
                        </div>
                        <div className="mb-4 w-[80%] mx-auto">
                            <h2 className="text-2xl font-bold mb-2 ">Lịch sử mua hàng</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-200 rounded-lg p-4">
                                    <h3 className="text-lg font-bold mb-2">iPhone 13 Pro Max</h3>
                                    <p className="text-gray-600 mb-2">Đã mua ngày 15/05/2023</p>
                                    <p className="text-gray-600">Giá: 30.000.000 VND</p>
                                </div>
                                <div className="bg-gray-200 rounded-lg p-4">
                                    <h3 className="text-lg font-bold mb-2">Samsung Galaxy S22 Ultra</h3>
                                    <p className="text-gray-600 mb-2">Đã mua ngày 10/03/2022</p>
                                    <p className="text-gray-600">Giá: 25.000.000 VND</p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white text-2xl mt-5 font-bold py-2 px-4 rounded transition-colors duration-300">
                            Liên hệ
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Page;
