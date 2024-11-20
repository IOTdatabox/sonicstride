import ClientBackground from "@/components/CaseStudy/ShoppertainmentManagement/ClientBackground";
import Conclusion from "@/components/CaseStudy/ShoppertainmentManagement/Conclusion";
import Hero from "@/components/CaseStudy/ShoppertainmentManagement/Hero";
import Results from "@/components/CaseStudy/ShoppertainmentManagement/Results";
import Solution from "@/components/CaseStudy/ShoppertainmentManagement/Solution";
import StepByStepGuide from "@/components/CaseStudy/ShoppertainmentManagement/StepByStepGuide";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import React from "react";

const Page = () => {
  return (
    <>
      <div className="w-full bg-[url('/img/case/case-study-2.svg')] bg-cover bg-no-repeat max-lg:bg-center">
        <Header />
        <Hero />
      </div>
      <ClientBackground />
      <StepByStepGuide />
      <Solution />
      <Results />
      <Conclusion />
      <Footer />
    </>
  );
};

export default Page;
