import React, {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button";

function Confirm({showConfirm, setShowConfirm, message, subMessage, outState, setOutState}: {
    showConfirm: boolean,
    setShowConfirm: React.Dispatch<React.SetStateAction<boolean>>,
    message: string,
    subMessage?: string,
    outState: boolean,
    setOutState: React.Dispatch<React.SetStateAction<boolean>>,
}) {


    if (showConfirm) {
        return (
            <div onClick={() => setShowConfirm(false)}
                 className="fixed left-0 z-50 top-0 bg-[rgba(0,0,0,0.7)] grid place-items-center w-full h-screen">
                <div className="bg-secondary p-10 rounded-2xl w-[35%] min-h-[180px] h-max text-[2rem]"
                     onClick={(e) => e.stopPropagation()}>
                    <h1 className="text-[1.8rem] font-semibold">{message}</h1>
                    <p className={'text-gray-500 text-[1.6rem] mt-5'}>{subMessage}</p>
                    <div className="w-max ml-auto flex gap-5 mt-5">
                        <Button variant={'default'} size={'lg'} className=''
                                onClick={() => {
                                    setShowConfirm(false)
                                    setOutState(false)
                                }}>
                            Hủy
                        </Button>
                        <Button variant={'default'} size={'lg'} className=''
                                onClick={() => {
                                    setShowConfirm(false)
                                    setOutState(true)
                                }}>
                            Xác nhận
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Confirm;
