'use client';
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {SubmitHandler, useForm} from "react-hook-form";
import React, {useState} from "react";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import UsersModel from "@/models/users/users.model";
import { useRouter } from 'next/navigation'

type UserCreate = {
    name: string,
    phone: string,
    address: string,
    email: string,
    password: string
}

export default function LoginForm() {
    const router = useRouter()
    const {trigger, isMutating, error} = UsersModel.UserSignUp()
    const {register, handleSubmit, formState: {errors}} = useForm<UserCreate>();
    const onSubmit: SubmitHandler<UserCreate> = async (formData) => {
        await trigger(formData);
        console.log(error);
    };
    const [showPassword, setShowPassword] = useState(true);

    return (
        <section className="mt-[4rem] container">
            <Card className="mx-auto shadow-md h-max min-h-[47dvh] w-[40%] border-primary">
                <Button onClick={() => router.push('/', { scroll: false })} variant='link' className="mt-[1rem] text-left text-gray-500">
                    Trở về trang chủ
                </Button>
                <CardHeader>
                    <CardTitle className="text-[3rem] text-center">Đăng kí</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                        <div className="grid grid-cols-2 h-max gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="first-name" className="text-[2rem]">Họ và tên</Label>
                                <Input id="first-name"
                                       placeholder="Nhập họ tên của bạn"
                                       className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                       {...register('name', {
                                           required: "Bạn phải nhập họ và tên", minLength: {
                                               value: 10,
                                               message: "Họ và tên phải có ít nhất 10 kí tự"
                                           }
                                       })}
                                />
                                {errors.name && <span
                                    className="text-[1.4rem] pl-1 text-destructive font-medium">{errors.name.message}</span>}
                                {errors.phone && <span
                                    className="text-[1.4rem] pl-1 text-destructive opacity-0">1</span>}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="last-name" className="text-[2rem]">Số điện thoại</Label>
                                <Input id="last-name"
                                       type='number'
                                       className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                       placeholder="Số điện thoại của bạn"
                                       {...register('phone', {
                                           required: "Bạn phải nhập số điện thoại", minLength: {
                                               value: 10,
                                               message: "Số điện thoại phải có 10 chữ số"
                                           }, maxLength: {
                                               value: 10,
                                               message: "Số điện thoại phải có 10 chữ số"
                                           }
                                       })}
                                />
                                {errors.phone && <span
                                    className="text-[1.4rem] pl-1 text-destructive font-medium">{errors.phone.message}</span>}
                                {errors.name && <span
                                    className="text-[1.4rem] pl-1 text-destructive opacity-0">1</span>}
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-[2rem]">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                {...register('email', {
                                    required: "Bạn phải nhập email", validate: (value) => {
                                        if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
                                            return "Email phải đúng định dạng";
                                        }
                                        return true;
                                    }
                                })}
                            />
                            {errors.email && <span
                                className="text-[1.4rem] pl-1 text-destructive font-medium">{errors.email.message}</span>}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="address" className="text-[2rem]">Địa chỉ</Label>
                            <Input
                                id="address"
                                type="text"
                                placeholder="Nhập địa chỉ của bạn"
                                className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                {...register('address', {
                                    required: "Bạn phải nhập địa chỉ"
                                })}
                            />
                            {errors.address && <span
                                className="text-[1.4rem] pl-1 text-destructive font-medium">{errors.address.message}</span>}
                        </div>
                        <div className="grid gap-2 relative">
                            <Label htmlFor="password" className="text-[2rem]">Mật khẩu</Label>
                            <Input id="password"
                                   className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                   type={showPassword ? 'text' : 'password'}
                                   {...register('password', {
                                       required: "Bạn phải nhập mật khẩu",
                                       minLength: {
                                           value: 8,
                                           message: "Mật khẩu phải có ít nhất 8 kí tự"
                                       },
                                       validate: (value) => {
                                           if (!(/^(?=.*[A-Z])(?=.*[!@#$%^&*_+/])(?=.*[0-9]).{8,}$/.test(value))) {
                                               return "Mật khẩu phải có số, chữ cái in hoa và kí tự đặc biệt"
                                           }
                                           return true;
                                       }
                                   })}
                            />
                            {errors.password && <span
                                className="text-[1.4rem] pl-1 text-destructive font-medium">{errors.password.message}</span>}
                            <div onClick={() => setShowPassword(!showPassword)}
                                 className={`absolute group right-5  text-[2rem] cursor-pointer select-none ${!errors.password ? 'bottom-[.9rem]' : 'bottom-[3.4rem]'}`}>
                                {showPassword ? (
                                    <FaRegEye/>
                                ) : (
                                    <FaRegEyeSlash/>
                                )}
                            </div>
                        </div>
                        <Button type="submit" className="w-full py-10">
                            Tạo tài khoản
                        </Button>
                        <Button variant="outline" className="w-full shadow-md py-10">
                            Đăng kí với google
                        </Button>
                    </form>
                    <div className="mt-4 text-center text-[1.8rem]">
                        Đã có tài khoản ?{" "}
                        <Link href="/sign-in" className="underline">
                            Đăng nhập
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
