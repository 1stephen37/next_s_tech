import React from 'react';

function Heading({className, title} : { className?: string, title : string }) {
    return (
        <>
            <h1 className={className + " text-center text-[2rem]"}>{title}</h1>
        </>
    );
}

export default Heading;
