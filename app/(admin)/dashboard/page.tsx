'use client';
import {CalendarDateRangePicker} from '@/components/Date-range-picker';
import {RecentSales} from '@/components/Recent-sales';
import {Button} from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import {ScrollArea} from '@/components/ui/scroll-area';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {useAppSelector} from "@/redux/hooks";
import {FaRegMoneyBill1} from "react-icons/fa6";
import {transformCurrency} from "@/app/constants";
import DashboardModel from "@/models/dashboard/dashboard.model";
import { LuSmartphoneCharging } from "react-icons/lu";

export default function Page() {
    const user = useAppSelector(state => state.user.user)

    const {data : statistical} = DashboardModel.GetStatistical();

    console.log(statistical);

    return (
        <ScrollArea className="w-full h-full">
            <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Xin chào {user.name}, quản trị viên của STECH 👋
                    </h2>
                    <div className="hidden items-center space-x-2 md:flex">
                        <CalendarDateRangePicker/>
                        <Button className={'py-[2rem]'}>Tải xuống</Button>
                    </div>
                </div>
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList>
                        <TabsTrigger className={'text-2xl'} value="overview">Tổng quan</TabsTrigger>
                        <TabsTrigger className={'text-2xl'} value="analytics">
                            Dữ liệu
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {statistical && Object.keys(statistical).length > 1 && (
                                <>
                                    <Card>
                                        <CardHeader
                                            className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-2xl font-medium">
                                                Tổng doanh thu
                                            </CardTitle>
                                            <FaRegMoneyBill1 size={24}/>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-3xl font-bold">{transformCurrency(statistical.totalRevenue)}</div>
                                            <p className="text-xl mt-2 text-muted-foreground">
                                                +{statistical.compare.revenue} so với tháng trước
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader
                                            className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-2xl font-medium">
                                                Tổng sản phẩm bán ra
                                            </CardTitle>
                                            <LuSmartphoneCharging size={24}/>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">+2350</div>
                                            <p className="text-xs text-muted-foreground">
                                                +180.1% from last month
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader
                                            className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Sales</CardTitle>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="h-4 w-4 text-muted-foreground"
                                            >
                                                <rect width="20" height="14" x="2" y="5" rx="2"/>
                                                <path d="M2 10h20"/>
                                            </svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">+12,234</div>
                                            <p className="text-xs text-muted-foreground">
                                                +19% from last month
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader
                                            className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Active Now
                                            </CardTitle>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="h-4 w-4 text-muted-foreground"
                                            >
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                                            </svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">+573</div>
                                            <p className="text-xs text-muted-foreground">
                                                +201 since last hour
                                            </p>
                                        </CardContent>
                                    </Card>
                                </>
                            )}
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-4">
                                <CardHeader>
                                    <CardTitle>Overview</CardTitle>
                                </CardHeader>
                                <CardContent className="pl-2">
                                    {/*<Overview />*/}
                                </CardContent>
                            </Card>
                            <Card className="col-span-4 md:col-span-3">
                                <CardHeader>
                                    <CardTitle>Recent Sales</CardTitle>
                                    <CardDescription>
                                        You made 265 sales this month.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <RecentSales/>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </ScrollArea>
    );
}
