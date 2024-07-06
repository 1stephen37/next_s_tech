import React from 'react';
import Hero from "@/components/Home/Hero";
import SectionSale from "@/components/Home/SectionSale";
import Brands from "@/components/Home/Brands";
import SectionCategories from "@/components/Home/SectionCategories";
import About from "@/components/Home/About";

function Page() {

    return (
        <section className="container">
            <Hero/>
            <Brands />
            <SectionSale/>
            <About/>
            <SectionCategories/>
        </section>
    );
}

export default Page;
