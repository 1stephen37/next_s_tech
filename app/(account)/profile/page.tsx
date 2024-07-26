'use client';
import React from 'react';
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

function Page() {
    const router = useRouter();
    return (
        <section className={'w-max h-max'}>
            <div className="bg-gray-100 shadow-lg rounded-lg w-full p-8">
                <Button onClick={() => router.push('/', {scroll: false})} variant='link'
                        className="mt-[1rem] mb-5 text-gray-500">
                    Trở về trang chủ
                </Button>
                <div className="flex flex-col items-center">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Ảnh đại diện"
                        className="rounded-full w-32 h-32 object-cover mb-4"
                    />
                    <h1 className="text-[2.4rem] font-semibold capitalize mb-2">Nguyễn Thị Lan</h1>
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
                            Họ và tên: Nguyễn Thị Lan
                            <br/>
                            Địa chỉ: 123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh
                            <br/>
                            Số điện thoại: 0123456789
                            <br/>
                            Email: lannguyenvan@email.com
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

export default Page;
