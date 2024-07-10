'use client';
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';

const imagesBrands = [
    {
        name: 'iphone logo',
        src: 'iphoneBrands.png'
    },
    {
        name: 'samsung logo',
        src: 'samsung-logo.png'
    },
    {
        name: 'xiaomi logo',
        src: 'xiaomiLogo.png'
    },
    {
        name: 'oppo logo',
        src: 'oppo-brand-logo.png'
    },
    {
        name: 'realme logo',
        src: 'realmeLogo.png'
    },
    {
        name: 'vivo logo',
        src: 'Vivo-Logo.png'
    },

]

const variants = {
    hidden: {opacity: 0},
    enter: {opacity: 1}
}

function Brands() {
    return (
        <section className="w-full h-[10rem] mt-[4rem] dark:bg-primary rounded-[5px] flex justify-between items-center">
            {imagesBrands.map((image, index) => (
                <motion.div variants={variants} initial={'hidden'} animate={'enter'}
                            transition={{type: 'linear', delay: 0.5, duration: 1}}
                            key={index} className="relative cursor-pointer select-none w-[20rem] h-[10rem]">
                    <Image alt={image.name} fill sizes={''} className={'object-contain'}
                           src={`/images/sections/${image.src}`}/>
                </motion.div>
            ))}
        </section>
    );
}

export default Brands;
