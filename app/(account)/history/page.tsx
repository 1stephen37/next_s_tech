'use client';
import {useState, useEffect} from "react";
import React from 'react';
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

function Page() {
    const router = useRouter();
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {

    }, []);

    return (
        <section className={'container'}>
            <div
                className="bg-white min-h-[40dvh] min-w-[40dvh] mx-auto w-max shadow-xl border border-solid px-10 rounded-md py-5 border-primary">
                <Button size={'default'} onClick={() => router.push('/', {scroll: false})} variant='link'
                        className="text-2xl mb-3 text-gray-500">
                    Trở về trang chủ
                </Button>
                <h1 className={'heading text-center'}>Lịch sử mua hàng</h1>
            </div>
        </section>
    )
}

export default Page;
