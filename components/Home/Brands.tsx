import React from 'react';
import Image from 'next/image';

const imagesBrands = [
    {
        name: 'iphone logo',
        src : 'iphoneBrands.png'
    },
    {
        name: 'samsung logo',
        src : 'samsung-logo.png'
    },
    {
        name: 'xiaomi logo',
        src : 'xiaomiLogo.png'
    },
    {
        name: 'oppo logo',
        src : 'oppo-brand-logo.png'
    },
    {
        name: 'realme logo',
        src : 'realmeLogo.png'
    },
    {
        name: 'vivo logo',
        src : 'Vivo-Logo.png'
    },

]

function Brands() {
    return (
        <section className="w-full h-[10rem] mt-10 dark:bg-primary rounded-[5px] flex justify-between items-center">
            {imagesBrands.map((image, index) => (
                <div key={index} className="relative select-none w-[20rem] h-[10rem]">
                    <Image alt={image.name} fill className={'object-contain'} src={`/images/sections/${image.src}`}/>
                </div>
            ))}
        </section>
    );
}

export default Brands;
