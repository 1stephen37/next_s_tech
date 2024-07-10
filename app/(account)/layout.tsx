import React from 'react';

function Layout({children} : { children : React.ReactElement}) {
    return (
        <main className="container flex justify-center py-[5%] h-screen">
            {children}
        </main>
    );
}

export default Layout;
