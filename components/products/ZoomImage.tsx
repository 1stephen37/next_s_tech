'use client';
import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image";

function ZoomImage({showZoomImage, setShowZoomImage, imageSrc}: {
    showZoomImage: boolean,
    setShowZoomImage: React.Dispatch<React.SetStateAction<boolean>>,
    imageSrc: string,
}) {

    if (showZoomImage) {
        return (
            <div onClick={() => setShowZoomImage(false)}
                 className="fixed left-0 z-50 top-0 bg-[rgba(0,0,0,0.7)] grid place-items-center w-full h-screen">
                <div className="bg-white rounded-2xl w-max h-max"
                     onClick={(e) => e.stopPropagation()}>
                    <motion.div className="relative h-max w-max cursor-pointer"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.75}}
                    >
                        <Image
                            alt="ecommerce" width={380} height={400}
                            className="object-contain object-center
                                         min-w-[50rem] m-auto max-h-[45rem]"
                            src={imageSrc}/>
                    </motion.div>
                </div>
            </div>
        )
    }
}

export default ZoomImage;
