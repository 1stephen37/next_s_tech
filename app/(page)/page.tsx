import React from 'react';
import Hero from "@/components/Home/Hero";
import SectionSale from "@/components/Home/SectionSale";
import Brands from "@/components/Home/Brands";

function Page() {

    return (
        <section className="container">
            <Hero/>
            <Brands />
            <SectionSale/>
        </section>
    );
}

export default Page;
