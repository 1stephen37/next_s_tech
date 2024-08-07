import React from 'react';

function Layout({children}: { children: React.ReactElement }) {
    return (
        <main className="flex justify-center items-center h-screen">
            {children}
        </main>
    );
}

export default Layout;
