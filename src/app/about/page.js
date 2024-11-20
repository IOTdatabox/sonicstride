import Header from "@/components/Header";
import HeroAbout from "@/components/About/HeroAbout";
import React from "react";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import TipsUpdate from "@/components/TipsUpdate";
import FAQAccordion from "@/components/FAQAccordion";
import OurMission from "@/components/About/OurMission";

const Page = () => {
  return (
    <>
      <div className="w-full bg-[url('/img/home/dark-gradient.jpg')] bg-cover bg-no-repeat bg-[100%_33%] xl:bg-[0%_33%] max-sm:bg-center">
        <Header />
        <HeroAbout />
      </div>
      <OurMission />
      <Testimonials />
      <FAQAccordion />
      <TipsUpdate />
      <Footer />
    </>
  );
};

export default Page;
