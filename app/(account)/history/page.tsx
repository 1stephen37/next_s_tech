'use client';
import {useState, useEffect} from "react";
import React from 'react';
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import OrdersModel from "@/models/ỏders/orders.model";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {transformCurrency} from "@/app/constants";
import {getInitialFromLocalStorage} from "@/redux/reducers/user.reducer";
import {ScrollArea} from "@/components/ui/scroll-area";

function Page() {
    const router = useRouter();

    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user.user);

    useEffect(() => {
        dispatch(getInitialFromLocalStorage());
    }, []);

    const [orderHistory, setOrderHistory] = useState<Order[]>([]);
    const {trigger: orderTrigger} = OrdersModel.GetHistoryOrdersByIdUser();

    useEffect(() => {
        orderTrigger({token: user.accessToken, id_user: user.id_user})
            .then(res => {
                console.log(res)
                setOrderHistory(res.data as Order[])
            })
    }, [user]);

    return (
        <section className={'w-max h-max '}>
            <div
                className="bg-white min-h-[40dvh] min-w-[40dvh] mx-auto w-max shadow-xl border border-solid px-10 rounded-md py-5 border-gray-300">
                <Button size={'default'} onClick={() => router.push('/', {scroll: false})} variant='link'
                        className="text-2xl mb-3 text-gray-500">
                    Trở về trang chủ
                </Button>
                <h1 className={'heading text-center'}>Lịch sử mua hàng</h1>
                <ScrollArea className="h-[55rem] mt-5">
                    <div className={'flex flex-col gap-5'}>
                        {orderHistory && orderHistory.length > 0 && orderHistory.map((order, index) => (
                            <div key={index}
                                 className="bg-white border border-gray-100 border-solid shadow-md rounded-lg p-6 space-y-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[2rem] font-bold">Đơn hàng #ST-{order.id_order}</h2>
                                    <p className="text-gray-500 text-2xl">{order.created_at}</p>
                                </div>

                                <div className="space-y-2">
                                    {order.details?.map((detail, index) => (
                                        <div key={index} className="flex justify-between items-center">
                                            <div>
                                                <h3 className="font-medium text-[1.8rem]">{detail.product_name}</h3>
                                                <p className="text-gray-500 text-[1.6rem]">Đơn
                                                    giá: {transformCurrency(detail.sale_price)}</p>
                                                <p className="text-gray-500 text-2xl">Số lượng: {detail.quantity}</p>
                                            </div>
                                            <p className="font-medium">{transformCurrency(detail.sale_price * detail.quantity)}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t pt-4 space-y-2">
                                    <p className="flex justify-between items-center">
                                        <span className="font-medium text-[1.6rem]">Tổng giá trị đơn hàng:</span>
                                        <span
                                            className="font-bold text-[1.4rem]">{transformCurrency(order.total)}</span>
                                    </p>
                                    <p className="flex justify-between items-center">
                                        <span className="font-medium text-[1.6rem]">Phí giao hàng:</span>
                                        <span
                                            className="font-bold text-[1.4rem]">{transformCurrency(order.ship_fee)}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
                <Button onClick={() => router.push('/products')} className={'mx-auto py-[2rem]'}>Tiếp tục mua</Button>
            </div>
        </section>
    )
}

export default Page;
