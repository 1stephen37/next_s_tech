'use client';
import Image from 'next/image'
import {useRouter} from 'next/navigation'

export default function NotFound() {
    const router = useRouter();
    return (
        <main className='bg-foreground dark:bg-black min-h-[99.5vh] overflow-hidden flex items-center justify-center'>
            <div className="w-[55rem] flex flex-col gap-[2rem]">
                <div>
                    <div className="font-bold text-[8rem] leading-[125%] text-secondary text-center dark:text-primary">Lỗi 404</div>
                    <div className="font-semibold text-white leading-[125%] text-[4rem] text-center dark:text-primary">Không tìm thấy
                    </div>
                    <div
                        className="font-extralight leading-[125%] mt-[1rem] text-center text-[#D9D9D9] text-[1.8rem] dark:text-primary">Tìm
                        kiếm của bạn đã vượt ra ngoài tầm hiểu biết của vũ trụ.
                    </div>
                </div>
                <button
                    onClick={() => router.back()}
                    className="w-max cursor-pointer mx-auto bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9]
                 p-[.2rem] rounded-xl hover:from-[#7F60F9] hover:to-[#6DDCFF] transition-colors ease-in-out duration-700">
                    <div
                        className="bg-black hover:text-stroke-white font-semibold transition-colors ease-in-out duration-700 text-secondary text-[2rem] text-center py-[1.5rem] px-[1rem] rounded-xl dark:text-primary">
                        Trở về trang trước
                    </div>
                </button>
            </div>
            <div className="relative w-[60rem] h-[56rem]">
                <Image alt={'not fund'} className={'object-contain'} src={'/images/sections/notfund.png'} fill/>
            </div>
        </main>
    )
}