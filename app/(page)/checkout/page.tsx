"use client";
import React, {useEffect, useState} from 'react';
import Heading from "@/components/sections/Heading";
import {Button} from "@/components/ui/button";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {getCartFromLocalStorage} from "@/redux/reducers/cart.reducer";
import {transformCurrency} from "@/app/constants";

const PaymentInterface: React.FC = () => {
    const dispatch = useAppDispatch()
    const [receiver, setReceiver] = useState(false);
    const [isHydrated, setIsHydrated] = useState(false);
    const [voucher, setVoucher] = useState('');

    const cart = useAppSelector((state) => state.cart.cart);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsHydrated(true);
        }
        dispatch(getCartFromLocalStorage());
    }, []);
    // const cart = [
    //     {id: 1, name: 'Product 1', price: 10.99, quantity: 2},
    //     {id: 2, name: 'Product 2', price: 15.49, quantity: 1},
    //     {id: 3, name: 'Product 3', price: 7.99, quantity: 3},
    // ];


    return (
        <div className="container mt-[4rem]">
            <div className="mx-auto">
                <Heading title={'Thanh Toán'}/>
                <div className="flex gap-8 mt-5">
                    <div className="bg-white w-[60%] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Thông tin giao hàng
                            </h2>
                            <div
                                className="text-2xl flex items-center gap-2 w-max text-gray-600 cursor-pointer">
                                <span className="w-max">Người nhận khác người đặt ?</span>
                                <input type={'checkbox'} className={'w-8 h-8'} onChange={() => setReceiver(!receiver)}/>
                            </div>
                        </div>
                        <form className={`grid grid-cols-2 gap-10`}>
                            <div className="">
                                <div className="mb-5">
                                    <label
                                        className="block text-gray-700 text-2xl font-bold mb-2"
                                        htmlFor="mainName"
                                    >
                                        Tên người đặt hàng
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
                                        htmlFor="mainEmail"
                                    >
                                        Email người đặt hàng
                                    </label>
                                    <input
                                        className="shadow text-2xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="mainEmail"
                                        type="text"
                                        placeholder="Nhập email người đặt"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label
                                        className="block text-gray-700 text-2xl font-bold mb-2"
                                        htmlFor="mainPhone"
                                    >
                                        Số điện thoại người đặt hàng
                                    </label>
                                    <input
                                        className="shadow text-2xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="mainPhone"
                                        type="text"
                                        placeholder="Nhập số điện thoại người đặt"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label
                                        className="block text-gray-700 text-2xl font-bold mb-2"
                                        htmlFor="mainAddress"
                                    >
                                        Địa chỉ người đặt hàng
                                    </label>
                                    <input
                                        className="shadow text-2xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="mainAddress"
                                        type="text"
                                        placeholder="Nhập địa chỉ người đặt"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <div className="mb-4">
                                    <label
                                        className="block text-2xl text-gray-700 font-bold mb-2"
                                        htmlFor="shippingMethod"
                                    >
                                        Đơn vị vận chuyển
                                    </label>
                                    <select
                                        className="shadow text-2xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="shippingMethod"
                                    >
                                        <option value="standard">Tiêu chuẩn</option>
                                        <option value="express">Nhanh chóng</option>
                                        <option value="priority">Ưu tiên</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                        {!receiver && (
                            <Button type={'submit'} className="w-max mx-auto">Thanh toán</Button>
                        )}
                    </div>
                    <div className="bg-white w-[40%] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Giỏ hàng
                        </h2>
                        <div className="divide-y divide-gray-200">
                            {isHydrated && cart.length > 0 && cart.map((item) => (
                                <div
                                    key={item.id_product}
                                    className="py-4 flex justify-between items-center"
                                >
                                    <div>
                                        <h3 className="text-2xl font-bold">{item.name}</h3>
                                        <p className="text-gray-800 text-xl">
                                            Giá: {transformCurrency(item.salePrice)}
                                        </p>
                                    </div>
                                    <div className="text-gray-500t text-xl">
                                        Số lượng: {item.quantity}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex justify-end">
                            <p className="text-gray-700 font-bold">
                                Tổng cộng:
                            </p>
                        </div>
                    </div>
                </div>
                {receiver && (
                    <>
                        <div className="bg-white w-[59%] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    Thông tin người nhận hàng
                                </h2>
                            </div>
                            <form className={`grid grid-cols-2 gap-10`}>
                                <div className="">
                                    <div className="mb-5">
                                        <label
                                            className="block text-gray-700 text-2xl font-bold mb-2"
                                            htmlFor="mainName"
                                        >
                                            Tên người đặt hàng
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
                                            htmlFor="mainEmail"
                                        >
                                            Email người đặt hàng
                                        </label>
                                        <input
                                            className="shadow text-2xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="mainEmail"
                                            type="text"
                                            placeholder="Nhập email người đặt"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            className="block text-gray-700 text-2xl font-bold mb-2"
                                            htmlFor="mainPhone"
                                        >
                                            Số điện thoại người đặt hàng
                                        </label>
                                        <input
                                            className="shadow text-2xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="mainPhone"
                                            type="text"
                                            placeholder="Nhập số điện thoại người đặt"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            className="block text-gray-700 text-2xl font-bold mb-2"
                                            htmlFor="mainAddress"
                                        >
                                            Địa chỉ người đặt hàng
                                        </label>
                                        <input
                                            className="shadow text-2xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="mainAddress"
                                            type="text"
                                            placeholder="Nhập địa chỉ người đặt"
                                        />
                                    </div>
                                </div>
                            </form>
                            <Button type={'submit'} className="w-max mx-auto">Thanh toán</Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default PaymentInterface;
