import React from "react";
import ContactAbout from "@/components/contact/ContactAbout";
import ContactInformation from "@/components/contact/ContactInformation";
import Location from "@/components/contact/Location";
import Schedule from "@/components/contact/Schedule";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <>
      <div className="w-full bg-[url('/img/contact/contact-hero-bg.png')] bg-cover bg-no-repeat bg-[45%_0%] sm:bg-[91%_0%] xl:bg-[0%_0%] ">
        <Header />
        <ContactAbout />
      </div>
      <ContactInformation />
      <Schedule />
      <Location />
      <Testimonials />
      <FAQAccordion />
      <Footer />
    </>
  );
};

export default Page;
