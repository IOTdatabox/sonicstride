import Challenges from "@/components/CaseStudy/VaioniGroup/Challenges";
import ClientBackground from "@/components/CaseStudy/VaioniGroup/ClientBackground";
import Conclusion from "@/components/CaseStudy/VaioniGroup/Conclusion";
import Hero from "@/components/CaseStudy/VaioniGroup/Hero";
import Results from "@/components/CaseStudy/VaioniGroup/Results";
import Solution from "@/components/CaseStudy/VaioniGroup/Solution";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import React from "react";

const Page = () => {
  return (
    <>
      <div className="w-full bg-[url('/img/case/case-study-1.svg')] bg-cover bg-no-repeat max-lg:bg-center">
        <Header />
        <Hero />
      </div>
      <ClientBackground />
      <Challenges />
      <Solution />
      <Results />
      <Conclusion />
      <Footer />
    </>
  );
};

export default Page;
