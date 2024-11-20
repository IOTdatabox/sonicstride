"use client";
import React from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import GoogleApple from "./GoogleApple";

const Hero = () => {
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
    <div className="container max-w-[1440px] px-5 pt-0 sm:pt-4 mx-auto mt-[40px] lg:mt-[79px] lg:px-10 xl:px-[63px]">
      <div className="w-[100%]">
        <div className="pr-0 xl:pr-[75px] text-center">
          <h1 className="text-[22px] sm:text-[36px] lg:text-[48px] leading-[32px] sm:leading-[48px] lg:leading-[58px] futura-bold font-bold text-white mb-4 sm:mb-[30px] tracking-wide">
            Experience music that adapts to your physical and mental rhythms with
          </h1>
          <h1 className=" gradient-text text-[36px] sm:text-[48px] lg:text-[64px] leading-[32px] sm:leading-[48px] lg:leading-[58px] futura-bold font-bold text-white mb-4 sm:mb-[30px] tracking-wide">
            Sonicstride
          </h1>
          <div className="mb-[46px] sm:mb-[123px] flex flex-col items-center">
            <div className="flex flex-col gap-2.5 sm:gap-5 sm:flex-row sm:items-center">
              {/* <a
                className="bg-primaryPink hover:bg-secondaryPink transition-button px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full cursor-pointer"
                href="/services"
                aria-label="redirect to service page"
              >
                LEARN MORE
              </a>
              <a
                className="bg-primaryBlue hover:bg-secondaryBlue transition-button px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full cursor-pointer"
                onClick={freeConsultationClick}
                aria-label="redirect to consultation form"
              >
                CONTACT US
              </a> */}
              <GoogleApple />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
