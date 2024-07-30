import React from 'react';
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import Loading from "@/app/(page)/loading";
import {Suspense} from 'react'

function Layout({children}: { children: React.ReactElement }) {
    return (
        <>
            <MainHeader/>
            <Suspense fallback={<Loading/>}>
                {children}
            </Suspense>
            <MainFooter/>
        </>
    );
}

export default Layout;
