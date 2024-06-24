import React from 'react';
import MainHeader from "@/components/MainHeader";

function Layout({children} : { children : React.ReactElement}) {
    return (
        <main>
            <MainHeader/>
            <div className=""></div>
            {children}
        </main>
    );
}

export default Layout;
