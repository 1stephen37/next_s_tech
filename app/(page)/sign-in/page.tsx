'use client';
import React, {useState} from 'react';
import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import Link from "next/link";
import {SubmitHandler, useForm} from "react-hook-form";
import UsersModel from "@/models/users/users.model";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

type Inputs = {
    email: string,
    password: string,
};

function Page() {
    const {trigger, isMutating} = UsersModel.UserSignIn();

    const {register, handleSubmit, formState: {errors}}
        = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        await trigger(formData,)
    };

    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className={"mt-[4rem] container"}>
            <Card className="mx-auto shadow-md h-max min-h-[47dvh] w-[40%] border-primary">
                <CardHeader>
                    <CardTitle className="text-[3rem] text-center">Đăng nhập</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
                        <div className="grid gap-5">
                            <Label htmlFor="email" className="text-[2rem]">Email</Label>
                            <Input
                                {...register("email", {
                                    required: "Bạn phải nhập email để đăng nhập",
                                    validate: (data) => {
                                        if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data))) {
                                            return "Email phải đúng định dạng";
                                        }
                                        return true;
                                    }
                                })}
                                aria-invalid="true"
                                id="email"
                                placeholder="Nhập email của bạn"
                                className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                            />
                            {errors.email && <span
                                className="text-[1.4rem] pl-1 text-destructive font-medium">{errors.email.message}</span>}
                        </div>
                        <div className="grid gap-5 relative">
                            <div className="flex items-center">
                                <Label htmlFor="password" className="text-[2rem]">Password</Label>
                                <Link href="/forget-password" className="ml-auto inline-block text-[1.4rem] underline">
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input id="password" type={showPassword ? 'text' : 'password'}
                                   {...register("password", {
                                       required: "Bạn phải nhập mật khẩu",
                                       minLength: {
                                           value: 8,
                                           message: "Mật khẩu phải có ít nhất 8 kí tự"
                                       },
                                       validate: (value) => {
                                           if(!(/^(?=.*[A-Z])(?=.*[!@#$%^&*_+/])(?=.*[0-9]).{8,}$/.test(value))) {
                                               return "Mật khẩu phải có số, chữ cái in hoa và kí tự đặc biệt"
                                           }
                                           return true;
                                       }
                                   })}
                                   placeholder="Nhập mật khẩu của bạn"
                                   className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                            />
                            <div onClick={() => setShowPassword(!showPassword)}
                                 className={`absolute group right-5 text-[2rem] cursor-pointer select-none ${!errors.password ? "bottom-[0.8rem]" : "bottom-[4.2rem]"}`}>
                                {showPassword ? (
                                    <FaRegEye/>
                                ) : (
                                    <FaRegEyeSlash/>
                                )}
                            </div>
                            {errors.password && <span
                                className="text-[1.4rem] pl-1 text-destructive font-medium">{errors.password.message}</span>}
                        </div>
                        <div className="grid gap-5">
                            <Button type="submit" className="w-full mx-auto py-10">
                                Đăng nhập
                            </Button>
                            <Button variant="outline" className="w-full shadow-md mx-auto py-10">
                                Đăng nhập với Google
                            </Button>
                        </div>
                    </form>
                    <div className="mt-5 text-center text-[1.8rem]">
                        Bạn chưa có tài khoản?{" "}
                        <Link href="/sign-up" className="underline font-medium">
                            Đăng kí ngay
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}

export default Page;
