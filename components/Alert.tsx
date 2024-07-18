import React from 'react';
import {Button} from "@/components/ui/button";

function Alert({showAlert, setShowAlert, message, callBack = () => setShowAlert(false), subMessage}: {
    showAlert: boolean,
    setShowAlert: React.Dispatch<React.SetStateAction<boolean>>,
    message: string,
    callBack?: () => void;
    subMessage?: string
}) {

    if (showAlert) {
        return (
            <div onClick={() => setShowAlert(false)}
                 className="fixed left-0 z-50 top-0 bg-[rgba(0,0,0,0.7)] grid place-items-center w-full h-screen">
                <div className="bg-secondary p-10 rounded-2xl w-[35%] min-h-[180px] h-max text-[2rem]"
                     onClick={(e) => e.stopPropagation()}>
                    <h1 className="text-[1.8rem] font-semibold">{message}</h1>
                    <p className={'text-gray-500 text-[1.6rem] mt-5'}>{subMessage}</p>
                    <Button variant={'default'} size={'lg'} className='mt-5 block w-max ml-auto' onClick={callBack}>
                        Xác nhận</Button>
                </div>
            </div>
        )
    }

}

export default Alert;
