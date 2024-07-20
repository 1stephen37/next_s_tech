import React from 'react';
import Hero from "@/components/Home/Hero";
import SectionSale from "@/components/Home/SectionSale";
import Brands from "@/components/Home/Brands";
import SectionCategories from "@/components/Home/SectionCategories";
import News from "@/components/Home/News";
import Reviews from "@/components/Home/Reviews";

function Page() {
    return (
        <section className="container relative">
            <Hero/>
            <Brands />
            <SectionSale/>
            <SectionCategories/>
            <News/>
            <Reviews/>
        </section>
    );
}

export default Page;
