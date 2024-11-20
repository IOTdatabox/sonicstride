"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="container max-w-[1440px] px-5 mx-auto pb-[94px] sm:pb-[140px] mt-[84px] sm:mt-[47px] lg:px-10 xl:px-[63px]">
      <div className="flex gap-[30px] items-center w-full">
        <div className="w-full sm:w-[60%] lg:w-[50%] xl:w-[42%]">
          <Image
            src="/img/case/sbfm-logo.svg"
            alt="shoppertainment study"
            width={117}
            height={44}
            loading="lazy"
            className="w-[117.53px] h-[44px] mb-[20px]"
          />
          <h1 className="futura-bold font-bold text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[40px] lg:leading-[46px] text-white">
            SBFM Case Study
          </h1>
        </div>
        <div className="max-sm:hidden w-full sm:w-[40%] lg:w-[50%] xl:w-[58%]"></div>
      </div>
    </div>
  );
};

export default Hero;
