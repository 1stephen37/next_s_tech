import React from 'react';

export default function Page({params}: { params: { id: string } }) {
    const id_brand = params.id;

    console.log(id_brand);

    return (
        <div></div>
    );
}