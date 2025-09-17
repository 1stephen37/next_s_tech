'use client';
import {useEffect} from 'react';

function Page({params}: { params: { id: string } }) {
    const id_brand = params.id;

    return (
        <div>{id_brand}</div>
    );
}

export default Page;