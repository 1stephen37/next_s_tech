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
import React, {useEffect, useState} from "react";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import UsersModel from "@/models/users/users.model";
import {useRouter} from 'next/navigation'
import Alert from "@/components/Alert";
import {useGoogleLogin} from "@react-oauth/google";
import Logo from "@/components/Logo";
import Image from 'next/image';
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {getLinkFromLocalStorage} from "@/redux/reducers/router.reducer";

type UserCreate = {
    name: string,
    phone: string,
    address: string,
    email: string,
    password: string
}

export default function Page() {
    const dispatch = useAppDispatch();
    const previous = useAppSelector(state => state.router.link)
    useEffect(() => {
        dispatch(getLinkFromLocalStorage())
    }, []);
    const {trigger: googleTrigger} = UsersModel.GetInformationFormGoogle();
    const {trigger: userGoogleTrigger} = UsersModel.UserSignInWithGoogle();
    const router = useRouter()
    const {trigger} = UsersModel.UserSignUp()
    const {register, handleSubmit, reset, formState: {errors}} = useForm<UserCreate>();
    const onSubmit: SubmitHandler<UserCreate> = async (formData) => {
        await trigger(formData)
            .then((data) => {
                if (data.error) {
                    setErrorMessage(data.error);
                } else {
                    let user = data.data as User;
                    localStorage.setItem("user", JSON.stringify(user))
                    localStorage.setItem("isLogin", "true");
                    setShowAlert(true);
                    setTimeout(() => {
                        if (previous) {
                            router.push(previous);
                        } else {
                            router.push('/');
                        }
                    }, 2000)
                    reset();
                }
            })
    };
    const [showPassword, setShowPassword] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

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
                                            router.push(previous);
                                        } else {
                                            router.push('/');
                                        }
                                    }
                                }, 2000)
                            }
                        })
                })
        },
    });

    return (
        <>
            <section className="flex gap-10">
                <section
                    className="w-max bg-white rounded-lg max-w-[40rem] shadow-md border border-solid border-gray-300 py-2 px-5">
                    <Logo/>
                    <div className="text-[1.6rem] font-semibold text-gray-500">Mang công nghệ đến với tất cả mọi người
                    </div>
                    <div className="w-full text-left mt-2 text-[1.5rem] text-gray-500 h-max break-all">
                        Chúng tôi rất vui mừng khi bạn đến với Website của <br/> chúng tôi. Để trải nghiệm tối đa các
                        tính năng và dịch vụ độc quyền, chúng tôi trân trọng mời bạn đăng ký tài <br/> khoản với chúng
                        tôi.

                        Chỉ với vài bước đơn giản, bạn sẽ sở hữu một tài khoản cá nhân đầy đủ quyền lợi. Với
                        tài <br/> khoản
                        này, bạn sẽ được: <br/>

                        <b> - Truy cập và quản lý thông tin cá nhân của bạn</b> <br/>
                        <b> - Theo dõi lịch sử giao dịch và hoạt động của mình</b> <br/>
                        <b> - Nhận những ưu đãi đặc biệt dành cho thành viên</b> <br/>
                        <b> - Tận hưởng các tính năng và dịch vụ được cá nhân hóa</b> <br/>
                        Hơn nữa, đăng ký tài khoản hoàn toàn miễn phí, nhanh <br/> chóng và dễ dàng. Bạn chỉ cần dành
                        vài phút
                        để hoàn <br/> tất đăng ký và ngay lập tức trở thành một thành viên của chúng tôi.
                    </div>
                    <Image alt={''} className={'object-contain mx-auto mt-10 rounded'} height={30} width={250}
                           src={'/images/sections/ACTUAL DESIGN - This is what we publish!.png'}/>
                </section>
                <section className="">
                    <Card className="mx-auto shadow-md h-max min-h-[47dvh] min-w-[55rem] border-gray-300">
                        <Button onClick={() => router.push('/', {scroll: false})} variant='link'
                                className="mt-[1rem] text-2xl text-left text-gray-500">
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
                                    <div onClick={() => setShowPassword(!showPassword)}
                                         className={`absolute group right-5  text-[2rem] cursor-pointer select-none ${!errors.password ? 'bottom-[.9rem]' : 'bottom-[3.4rem]'}`}>
                                        {showPassword ? (
                                            <FaRegEye/>
                                        ) : (
                                            <FaRegEyeSlash/>
                                        )}
                                    </div>
                                </div>
                                {errors.password && <span
                                    className="text-[1.4rem] pl-1 text-destructive font-medium">{errors.password.message}</span>}
                                {errorMessage && <span
                                    className="text-[1.6rem] text-center text-destructive font-medium">{errorMessage}</span>}
                                <Button type="submit" className="w-full py-10">
                                    Tạo tài khoản
                                </Button>
                                <Button onClick={() => login()} type="button" variant="outline"
                                        className="w-full shadow-md py-10">
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
            </section>
            <Alert showAlert={showAlert} setShowAlert={setShowAlert}
                   subMessage={'Bạn đã đăng kí và đănng nhập vào hệ thống của STECH bằng tài khoản và mật khẩu, bạn sẽ được hưởng các ưu đãi đặc biệt dành cho thành viên của chúng tôi.'}
                   message={'Đăng kí thành công'}/>
        </>
    )
}
