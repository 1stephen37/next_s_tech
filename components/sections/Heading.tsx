import Link from 'next/link';
import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

function Heading({className, title}: { className?: string, title: string }) {
    return (
        <>
            <h1 className={className + " text-center text-[3.2rem] capitalize font-semibold"}>{title}</h1>
            <Breadcrumb className="w-max mx-auto h-max text-4xl items-center mt-5 flex gap-5">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link className='text-[1.4rem] leading-8' href="/">Trang chủ</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-[1.4rem]" />
                    <BreadcrumbItem>
                        <BreadcrumbPage className={'text-[1.4rem] leading-8 cursor-pointer'}>{title}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </>
    );
}

export default Heading;
