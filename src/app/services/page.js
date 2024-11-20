import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DiscoverTransform from "@/components/services/DiscoverTransform";
import EnhanceCustomer from "@/components/services/EnhanceCustomer";
import FocusSectors from "@/components/services/FocusSectors";
import SalesforceServices from "@/components/services/SalesforceServices";
import ServiceHero from "@/components/services/ServiceHero";
import StepByStepGuide from "@/components/StepByStepGuide";
import Testimonials from "@/components/Testimonials";
import TipsUpdate from "@/components/TipsUpdate";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="w-full bg-[url('/img/services/hero.png')] bg-cover bg-no-repeat max-lg:bg-center">
        <Header />
        <ServiceHero />
      </div>
      <SalesforceServices />
      <FocusSectors />
      <StepByStepGuide />
      <DiscoverTransform />
      <EnhanceCustomer />
      <Testimonials />
      <FAQAccordion />
      <TipsUpdate />
      <Footer />
    </>
  );
};

export default Page;
