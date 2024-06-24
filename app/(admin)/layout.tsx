import React from 'react';
import {Button} from "@/components/ui/button";

function Layout({children} : { children : React.ReactElement}) {
    return (
        <div>
            <h1 className="text-center text-[2rem]">
                header admin
            </h1>
            <Button variant="secondary" className="ml-10">test</Button>
            <div className="">{children}</div>
        </div>
    );
}

export default Layout;
