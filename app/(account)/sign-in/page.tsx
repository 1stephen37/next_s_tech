'use client';
import React, {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Link from "next/link";
import {SubmitHandler, useForm} from "react-hook-form";
import UsersModel from "@/models/users/users.model";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import {useRouter} from "next/navigation";
import Alert from "@/components/Alert";
import {useGoogleLogin} from '@react-oauth/google';
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {getLinkFromLocalStorage, saveLinkToLocalStorage} from "@/redux/reducers/router.reducer";
import Logo from "@/components/Logo";

type Inputs = {
    email: string,
    password: string,
};

function Page() {
    const dispatch = useAppDispatch();
    const previous = useAppSelector(state => state.router.link)
    useEffect(() => {
        dispatch(getLinkFromLocalStorage())
    }, []);
    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            googleTrigger({token: tokenResponse.access_token})
                .then(response => {
                    const user = {
                        email: response.email,
                        name: response.given_name + ' ' + response.family_name,
                        image: response.picture,
                    };
                    userGoogleTrigger(user)
                        .then((response) => {
                            if (response.message) {
                                setErrorMessage(response.message);
                            } else {
                                let user = response.data as User;
                                localStorage.setItem("user", JSON.stringify(user))
                                localStorage.setItem("isLogin", "true");
                                setShowAlert(true);
                                setTimeout(() => {
                                    if (user.role === 1 && !showAlert) {
                                        router.push('/dashboard')
                                    } else if (user.role === 0 && !showAlert) {
                                        if (previous) {
                                            router.push(previous)
                                        } else {
                                            router.push('/')
                                        }
                                    }
                                }, 2000)
                            }
                        })
                })
        },
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const router = useRouter();
    const {trigger: googleTrigger} = UsersModel.GetInformationFormGoogle();
    const {trigger: userGoogleTrigger} = UsersModel.UserSignInWithGoogle();
    const {trigger, error} = UsersModel.UserSignIn();
    const {register, handleSubmit, formState: {errors}}
        = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        await trigger(formData)
            .then(data => {
                if (data.error) {
                    setErrorMessage(data.error);
                } else {
                    let user = data.data as User;
                    localStorage.setItem("user", JSON.stringify(user))
                    localStorage.setItem("isLogin", "true");
                    setShowAlert(true);
                    setTimeout(() => {
                        if (user.role === 1 && !showAlert) {
                            router.push('/dashboard')
                        } else if (user.role === 0 && !showAlert) {
                            if (previous) {
                                router.push(previous);
                            } else {
                                router.push('/');
                            }
                        }
                    }, 1000)
                }
            })
            .catch(err => {
                console.log(err);
            })
    };
    const [showPassword, setShowPassword] = useState(false);


    return (
        <>
            <section className={"flex gap-10"}>
                <section
                    className="w-max bg-white rounded-lg max-w-[35rem] shadow-md border border-solid border-gray-300 py-2 px-5">
                    <Logo/>
                    <div className="text-[1.6rem] font-semibold text-gray-500">Mang công nghệ đến với tất cả mọi người
                    </div>
                    <div className="w-full mt-2 text-left text-[1.5rem] text-gray-500 h-max break-all">
                        Chúng tôi rất vui mừng được chào đón bạn đến với trang web của chúng tôi. Để trải nghiệm
                        tối <br/> ưu
                        các tính năng và dịch vụ, chúng tôi trân trọng khuyến nghị bạn đăng nhập vào tài khoản
                        của <br/> mình.
                        <br/>
                        Bằng cách đăng nhập, bạn sẽ có quyền truy cập các thông tin cá nhân, lịch sử giao dịch,
                        cũng <br/> như
                        được hưởng các ưu đãi và dịch vụ ưu tiên <br/> dành riêng cho thành viên. Đăng nhập cũng giúp
                        chúng
                        tôi bảo vệ an toàn dữ liệu của bạn và <br/> cung cấp cho bạn những trải nghiệm được
                        cá <br/> nhân hóa.
                        <br/>
                        Nếu bạn chưa có tài khoản, đừng ngần ngại <br/> đăng ký ngay hôm nay. Chỉ mất vài phút, bạn sẽ
                        có thể
                        tận hưởng đầy đủ các tiện ích mà trang <br/> web của chúng tôi mang lại.
                    </div>
                </section>
                <section className={'w-max'}>
                    <Card className="mx-auto shadow-md h-max min-h-[47dvh] w-max min-w-[50rem] border-gray-300">
                        <Button size={'default'} onClick={() => router.push('/', {scroll: false})} variant='link'
                                className="mt-[1rem] text-2xl text-gray-500">
                            Trở về trang chủ
                        </Button>
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
                                        placeholder="Ví dụ: tencuaban@gmail.com"
                                        className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                    />
                                    {errors.email && <span
                                        className="text-[1.5rem] pl-1 text-destructive font-medium">{errors.email.message}</span>}
                                </div>
                                <div className="grid gap-5 ">
                                    <div className="flex items-center">
                                        <Label htmlFor="password" className="text-[2rem]">Mật khẩu</Label>
                                        <Link href="/forget-password"
                                              className="ml-auto inline-block text-[1.4rem] underline">
                                            Quên mật khẩu ?
                                        </Link>
                                    </div>
                                    <div className="relative">
                                        <Input id="password" type={showPassword ? 'text' : 'password'}
                                               {...register("password", {
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
                                               placeholder="Ví dụ: Password@123"
                                               className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                        />
                                        <div onClick={() => setShowPassword(!showPassword)}
                                             className={`absolute group right-5 text-[2rem] cursor-pointer select-none bottom-[0.8rem]`}>
                                            {showPassword ? (
                                                <FaRegEye/>
                                            ) : (
                                                <FaRegEyeSlash/>
                                            )}
                                        </div>
                                    </div>
                                    {errors.password && <span
                                        className="text-[1.5rem] pl-1 text-destructive font-medium">{errors.password.message}</span>}
                                    {errorMessage && <span
                                        className="text-[1.6rem] text-center text-destructive font-medium">{errorMessage}</span>}
                                </div>
                                <div className="grid gap-5">
                                    <Button type="submit" className="w-full mx-auto py-10">
                                        Đăng nhập
                                    </Button>
                                    <Button onClick={() => login()} type="button" variant="outline"
                                            className="w-full shadow-md mx-auto py-10">
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
            </section>
            <Alert showAlert={showAlert} setShowAlert={setShowAlert}
                   subMessage={'Bạn đã đăng nhập vào hệ thống của STECH bằng tài khoản và mật khẩu, bạn sẽ được hưởng các ưu đãi đặc biệt dành cho thành viên của chúng tôi.'}
                   message={'Đăng nhập thành công'}/>
        </>
    );
}

export default Page;
