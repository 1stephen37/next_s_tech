import React from 'react';
import Image from 'next/image';
import {Button} from "@/components/ui/button";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Link from "next/link";


function Hero() {
    return (
        <section className="w-full mt-[4rem] bg-primary xl:min-h-[40rem] xl:max-h-[45dvh] rounded-[5px]">
            <Carousel className="w-full h-full xl:min-h-[40rem] flex py-10 px-20">
                <CarouselContent className="w-full h-full">
                    <CarouselItem className="h-full grid grid-cols-2 place-items-center">
                        <div className="text-center">
                            <div className="text-secondary text-[3rem] font-bold">Apple iphone 15 Pro Max</div>
                            <div className="text-secondary">
                                <div className="text-[1.8rem] mt-5">
                                    Thay đổi cuộc chơi - hiệu năng dẫn đầu
                                </div>
                                <div className="text-[1.4rem] w-3/4 mx-auto mt-5">
                                    Là chiếc điện thoại thông minh cao cấp nhất của Apple, iPhone 15 Pro Max mang đến sự kết hợp hoàn hảo giữa thiết kế thanh lịch, màn hình OLED siêu sắc nét và hiệu năng vượt trội nhờ chip Apple A17 Bionic. Với 4 camera chuyên nghiệp, khả năng kết nối 5G và sạc không dây MagSafe, đây chính là lựa chọn hoàn hảo cho những ai yêu thích sự đẳng cấp và muốn trải nghiệm di động tối ưu.
                                </div>
                            </div>
                            <div className="mt-10 mx-auto w-max flex gap-5">
                                <Button size={'lg'}
                                        className="bg-primary text-secondary border border-solid border-secondary"
                                        variant={'secondary'}>
                                    <Link href={'/shop'}>Xem thêm</Link>
                                </Button>
                                <Button size={'lg'} variant={'secondary'}>Mua ngay</Button>
                            </div>
                        </div>
                        <div className="relative mx-auto w-[70rem] select-none cursor-pointer h-[30rem]">
                            <Image alt={''} sizes={'(max-width: 1200px) 5   0vw'} fill className="object-cover" src={'/images/sections/iPhone-15-Pro-Max-running-Genshin-Impact.png'}/>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="h-full grid grid-cols-2 place-items-center">
                        <div className="text-center">
                            <div className="text-secondary text-[3rem] font-bold">Apple iphone 13 mini 4GB/128GB đỏ</div>
                            <div className="text-secondary">
                                <div className="text-[1.8rem] mt-5">
                                    Tinh tế và mạnh mẽ với iPhone 14 mini màu đỏ
                                </div>
                                <div className="text-[1.4rem] w-3/4 mx-auto mt-5">
                                    Với thiết kế nhỏ gọn nhưng vẫn đầy đủ tính năng, iPhone 14 mini màu đỏ là lựa chọn hoàn
                                    hảo cho những ai yêu thích sự tinh tế và đẳng cấp. Sở hữu màn hình OLED sống động, chip
                                    A15 Bionic mạnh mẽ và hệ thống camera kép, chiếc iPhone này mang đến trải nghiệm di động
                                    tuyệt vời.
                                </div>
                            </div>
                            <div className="mt-10 mx-auto w-max flex gap-5">
                                <Button size={'lg'}
                                        className="bg-primary text-secondary border border-solid border-secondary"
                                        variant={'secondary'}>
                                    <Link href={'/shop'}>Xem thêm</Link>
                                </Button>
                                <Button size={'lg'} variant={'secondary'}>Mua ngay</Button>
                            </div>
                        </div>
                        <div className="relative mx-auto w-[38rem] select-none cursor-pointer h-[34rem]">
                            <Image alt={''} fill sizes={''} src={'/images/sections/iPhone-14-plusred.png'}/>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="h-full grid grid-cols-2 place-items-center">
                        <div className="text-center">
                            <div className="text-secondary mx-auto w-[90%] text-[3rem] font-bold">Samsung Galaxy S22 Plus (5G) 8GB/128GB trắng
                            </div>
                            <div className="text-secondary">
                                <div className="text-[1.8rem] mt-5">
                                    Sức mạnh và tinh tế với Samsung Galaxy S22 Plus (5G) trắng
                                </div>
                                <div className="text-[1.4rem] w-3/4 mx-auto mt-5">
                                    Trang bị chip Snapdragon 8 Gen 1 mạnh mẽ, bộ nhớ RAM 8GB và dung lượng lưu trữ 128GB, Samsung Galaxy S22 Plus (5G) mang đến hiệu năng ấn tượng cho mọi tác vụ. Với màn hình AMOLED 6,6 inch sắc nét, camera chụp ảnh chuyên nghiệp và khả năng kết nối 5G, đây là chiếc smartphone cao cấp đáng lựa chọn.
                                </div>
                            </div>
                            <div className="mt-10 mx-auto w-max flex gap-5">
                                <Button size={'lg'}
                                        className="bg-primary text-secondary border border-solid border-secondary"
                                        variant={'secondary'}>
                                    <Link href={'/shop'}>Xem thêm</Link>
                                </Button>
                                <Button size={'lg'} variant={'secondary'}>Mua ngay</Button>
                            </div>
                        </div>
                        <div className="relative mx-auto w-[35rem] select-none cursor-pointer h-[35rem]">
                            <Image alt={''} sizes={''} fill src={'/images/sections/avt-samsung-s22-trang.png'}/>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </section>
    );
}

export default Hero;
