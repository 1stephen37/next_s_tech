import React from 'react';
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

function Layout({children} : { children : React.ReactElement}) {
    return (
        <>
            <MainHeader/>
            {children}
            <MainFooter/>
        </>
    );
}

export default Layout;
