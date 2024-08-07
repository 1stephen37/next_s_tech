import React from 'react';
import Link from "next/link";

function Logo({className, href}: { className?: string, href?: string }) {
    return (
        <Link className={"text-primary text-[4rem] font-bold hover:drop-shadow-2xl " + className}
              href={href || '/'}>STECH</Link>
    );
}

export default Logo;
