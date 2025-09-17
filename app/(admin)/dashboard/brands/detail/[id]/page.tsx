'use client';
import {ScrollArea} from '@/components/ui/scroll-area';
import BrandsModel from '@/models/brands/brands.model';
import {useEffect} from 'react';
import Image from 'next/image';

export default function Page({params}: { params: { id: string } }) {
    const id_brand = params.id;

    const {data : brand, isLoading} = BrandsModel.GetDetailBrandById(id_brand);
    console.log(brand);

    return (
        <ScrollArea className="w-full h-full">
            <section className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                {brand && (
                    <div className="">
                        <div className="">
                            <div className="p">Tên thương hiệu: {brand.name}</div>
                        </div>
                        <div className="">
                            <div className="">Logo</div>
                            <div className="relative">
                                <Image src={''} alt={''} fill sizes={'100'}/>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </ScrollArea>
    )
        ;
}