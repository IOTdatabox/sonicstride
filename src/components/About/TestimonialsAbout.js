"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Badge from "../Badge";

const TestimonialsAbout = () => {
  const router = useRouter();

  const freeConsultationClick = () => {
    const freeConsultation = document.getElementById("freeConsultation");
    if (!freeConsultation) {
      router.push("/contact#freeConsultation");
    } else {
      router.push("#freeConsultation");
    }
  };

  return (
    <div className="w-full bg-[url('/img/about/testimonials-bg.svg')] bg-cover bg-no-repeat bg-[75%_20%] sm:bg-[71%_20%] lg:bg-[63%_20%] xl:bg-[83%_20%] 2xl:bg-[0%_20%] ">
      <div className="container max-w-[1440px] px-5 mx-auto py-[50px] sm:py-[100px] lg:px-10 xl:px-[63px]">
        <div className="flex gap-0 lg:gap-[30px] sm:mb-[116px]">
          <div className="w-full sm:w-[75%] lg:w-[60%] xl:w-[45%]">
            <div className="mb-[10px]">
              <Badge
                text="TESTIMONIALS"
                src="/img/home/cloud-white.svg"
                bgColor="bg-secondaryColor"
                textColor="text-lightGrey"
                font="futura-bold"
              />
            </div>
            <h1 className="futura-bold font-bold text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[40px] lg:leading-[46px] text-white mb-[10px]">
              Revolutionize Your Operations through Salesforce Integration
            </h1>
            <p className="lato-thin text-[13px] sm:text-[18px] lg:text-[20px] leading-[19px] sm:leading-[30px] text-morningMist font-normal mb-[30px]">
              Maximize your business&apos;s capabilities with Sailwayz, your
              trusted Salesforce CRM expert. Let&apos;s connect and see how
              Salesforce can redefine your company&apos;s success. Reach out now
              for a consultation!
            </p>
            <div className="">
              <a
                className="bg-primaryPink hover:bg-secondaryPink transition-button px-[20px] sm:px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full max-sm:block cursor-pointer"
                onClick={freeConsultationClick}
                aria-label="redirect to consultation form"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="max-sm:hidden sm:w-[25%] lg:w-[40%] xl:w-[55%]"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAbout;
