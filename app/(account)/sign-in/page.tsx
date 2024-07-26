'use client';
import React, {useState} from 'react';
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
import {GoogleLogin} from '@react-oauth/google';
import {jwtDecode} from "jwt-decode";
import {useGoogleLogin} from '@react-oauth/google';

type Inputs = {
    email: string,
    password: string,
};

function Page() {
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
                                        router.push('/')
                                    }
                                }, 2000)
                            }
                        })
                    console.log(response);
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
                if (data.message) {
                    setErrorMessage(data.message);
                } else {
                    let user = data.data as User;
                    localStorage.setItem("user", JSON.stringify(user))
                    localStorage.setItem("isLogin", "true");
                    setShowAlert(true);
                    setTimeout(() => {
                        if (user.role === 1 && !showAlert) {
                            router.push('/dashboard')
                        } else if (user.role === 0 && !showAlert) {
                            router.push('/')
                        }
                    }, 2000)
                }
            })
            .catch(err => {
                console.log(err);
            })
    };
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <section className={"mt-[4rem] container"}>
                <Card className="mx-auto shadow-md h-max min-h-[47dvh] w-[40%] border-primary">
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
                                    placeholder="Nhập email của bạn"
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
                                           placeholder="Nhập mật khẩu của bạn"
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
                                {/*<GoogleLogin*/}
                                {/*    onSuccess={credentialResponse => {*/}
                                {/*        const decoded = jwtDecode(credentialResponse?.credential as string);*/}
                                {/*        console.log(decoded);*/}
                                {/*        // console.log(credentialResponse);*/}
                                {/*    }}*/}
                                {/*    onError={() => {*/}
                                {/*        console.log('Login Failed');*/}
                                {/*    }}*/}
                                {/*    useOneTap*/}
                                {/*/>;*/}
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
            <Alert showAlert={showAlert} setShowAlert={setShowAlert}
                   subMessage={'Bạn đã đăng nhập vào hệ thống của STECH bằng tài khoản và mật khẩu, bạn sẽ được hưởng các ưu đãi đặc biệt dành cho thành viên của chúng tôi.'}
                   message={'Đăng nhập thành công'}/>
        </>
    );
}

export default Page;
