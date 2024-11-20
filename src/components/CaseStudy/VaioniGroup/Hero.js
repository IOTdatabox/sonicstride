"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="container max-w-[1440px] px-5 mx-auto mt-[47px] lg:px-10 xl:px-[63px]">
      <div className="h-[250px]">
        <Image
          src="/img/case/Vaioni-Logo.svg"
          alt="Vaioni study"
          width={136}
          height={44}
          loading="lazy"
        />
        <h1 className="text-[24px] md:text-[36px] leading-[32px] md:leading-[46px] text-white mt-[28px]">
          Vaioni Group Case Study
        </h1>
      </div>
    </div>
  );
};

export default Hero;
