'use client';
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import Heading from "@/components/sections/Heading";
import RelatedProducts from "@/components/RelatedProducts";
import {ApiImage, transformCurrency} from "@/app/constants";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import Link from "next/link";
import Image from 'next/image';
import {
    downQuantityByIndex,
    removeCartItemByIndex, resetCart,
    saveCartToLocalStorage,
    upQuantityByIndex
} from "@/redux/reducers/cart.reducer";
import Confirm from "@/components/Confirm";
import Alert from "@/components/Alert";

const Cart: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch()
    const [isShowConfirm, setIsShowConfirm] = useState(false);
    const [isShowAlert, setIsShowAlert] = useState(false);
    const [isRemoveCartItem, setIsRemoveCartItem] = useState(false);
    const [isHydrated, setIsHydrated] = useState(false);
    const [index, setIndex] = useState(0);
    const cart = useAppSelector((state) => state.cart.cart);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsHydrated(true);
        }
    }, []);

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.salePrice * item.quantity, 0);
    };

    const handleUpQuantity = (index: number) => {
        if (cart[index].quantity > 9) {
            setIsShowAlert(true);
        } else {
            dispatch(upQuantityByIndex(index));
            dispatch(saveCartToLocalStorage());
        }
    }

    const handleDownQuantity = (index: number) => {
        if (cart[index].quantity >= 2) {
            dispatch(downQuantityByIndex(index));
            dispatch(saveCartToLocalStorage());
        } else {
            setIndex(index);
            setIsShowConfirm(true);
        }
    }

    const handleRemoveCartItem = (index: number) => {
        setIndex(index);
        setIsShowConfirm(true);
    }

    useEffect(() => {
        if (isRemoveCartItem) {
            if (cart.length === 1) {
                dispatch(resetCart());
            } else {
                dispatch(removeCartItemByIndex(index));
                dispatch(saveCartToLocalStorage());
            }
            setIsRemoveCartItem(false);
        }
    }, [isRemoveCartItem, index, isShowConfirm]);

    return (
        <>
            <div className="container mx-auto mt-[4rem]">
                <Heading title={'Giỏ hàng của bạn'}/>
                {isHydrated && cart.length === 0 && (
                    <div className="text-center text-[2.4rem] font-medium mt-[4rem]">
                        Giỏ hàng của bạn đang trống, <Link href={'/products'} className="font-black text-orange-500">mua
                        sắm
                        ngay !</Link>
                    </div>
                )}
                {isHydrated && cart.length > 0 && (
                    <div className="mt-[4rem] py-5 border-[.1rem] border-solid border-gray-300 shadow-md rounded-xl">
                        <div className="flex justify-between text-center items-center py-5 px-10">
                            <div className="text-[2.4rem] w-[38rem] font-semibold">Thông tin sản phẩm</div>
                            <div className="text-[2.4rem] w-[10rem] font-semibold">Số lượng</div>
                            <div className="text-[2.4rem] w-[20rem] font-semibold">Tạm tính</div>
                        </div>
                        {cart.map((item, index) => (
                            <div key={index} className="py-5 px-10">
                                <div
                                    className="flex border-b pb-3 border-gray-400 border-solid items-center justify-between">
                                    <div className="flex w-[42rem] items-center">
                                        <Link href={`products/${item.id_product}`} className="">
                                            <Image className="object-contain cursor-pointer" src={ApiImage + item.image}
                                                   alt={item.name} width={150} height={100}/>
                                        </Link>
                                        <div className="flex flex-col gap-1">
                                            <Link href={`products/${item.id_product}`}
                                                  className="font-medium max-w-[26rem] max-h-[3rem] overflow-hidden text-[2rem] cursor-pointer">{item.name}</Link>
                                            <div className="text-2xl">Số lượng còn lại trong kho: {item.stock}</div>
                                            <div className="text-2xl">Bộ nhớ trong: {item.memory}</div>
                                            <div className="text-2xl">Màu: {item.color}</div>
                                            <div onClick={() => handleRemoveCartItem(index)}
                                                 className="text-orange-500 font-semibold hover:underline cursor-pointer select-none text-2xl">Xóa
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-[10rem] text-center items-center gap-5 text-[2rem]">
                                        <span className="cursor-pointer select-none"
                                              onClick={() => handleDownQuantity(index)}>-</span>
                                        <div className="text-2xl select-none">{item.quantity}</div>
                                        <span className="cursor-pointer select-none"
                                              onClick={() => handleUpQuantity(index)}>+</span>
                                    </div>
                                    <div className="text-[2.4rem] select-none w-[20rem]">
                                        {transformCurrency(item.quantity * item.salePrice)}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="text-[2.2rem] font-semibold text-center mt-5">Tổng
                            : {transformCurrency(getTotalPrice())}</div>
                        <Button size={'lg'} onClick={() => router.push('/checkout')} className="w-max mx-auto mt-5">Thanh
                            toán</Button>
                    </div>
                )}
                <RelatedProducts/>
            </div>
            <Confirm showConfirm={isShowConfirm} setShowConfirm={setIsShowConfirm} outState={isRemoveCartItem}
                     setOutState={setIsRemoveCartItem}
                     subMessage={'Hành động này sẽ xóa sản phẩm ra khỏi và hàng của bạn. Bạn có thể thêm lại bằng cách tìm sản phẩm và thêm và lại vào giỏ hàng.'}
                     message={'Bạn có chắc chắn muốn xóa sản phẩm khỏi giỏ hàng không ?'}/>
            <Alert showAlert={isShowAlert} message={'Bạn không thể cùng lúc mua quá nhiều cùng một sản phẩm'}
                   setShowAlert={setIsShowAlert}
                   subMessage={'Chúng tôi rất tiếc về sự bất tiện này, tuy nhiên nhằm ngăn chặn hành vi gian lận, quản lý tồn kho hiệu quả, duy trì quan hệ công bằng với khách hàng và tuân thủ quy định pháp lý.'}/>
        </>
    )
        ;
};

export default Cart;
