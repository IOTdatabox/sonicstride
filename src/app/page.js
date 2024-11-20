import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CaseStudies from "@/components/CaseStudies";
import CaseStudiesMobile from "@/components/CaseStudiesMobile";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StepByStepGuide from "@/components/StepByStepGuide";
import Testimonials from "@/components/Testimonials";
import TipsUpdate from "@/components/TipsUpdate";
import WhyChoose from "@/components/WhyChoose";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preload" href="/img/home/hero-background.png" as="image" />
        <link
          rel="preload"
          href="/img/home/hero-background-mobile.png"
          as="image"
        />
      </Head>
      <div className="w-full bg-[url('/img/home/dark-gradient.jpg')] sm:bg-[url('/img/home/dark-gradient.jpg')] bg-cover bg-no-repeat relative z-[99] padding-bottom-bg max-xl:bg-[100%_50%]">
        <Header />
        <Hero />
      </div>
      <WhyChoose />
      <CaseStudies />
      <CaseStudiesMobile />
      <StepByStepGuide />
      <Testimonials />
      <FAQAccordion />
      <TipsUpdate />
      <Footer />
    </>
  );
}
