"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ContactAbout = () => {
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
    <div className="container max-w-[1440px] px-5 pb-[62px] mx-auto lg:px-10 xl:px-[63px] mt-[39px]">
      <div className="w-full flex gap-[30px]">
        <div className="w-full lg:w-[60%] xl:w-[43%]">
          <h1 className="futura-bold font-bold text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[40px] lg:leading-[46px] text-white mb-[25px] xl:mb-[30px]">
            CONTACT US
          </h1>
          <p className="lato-thin text-[13px] sm:text-[18px] lg:text-[20px] leading-[19px] sm:leading-[30px] text-morningMist font-normal mb-[25px] xl:mb-[30px]">
            Have a question or need assistance? Contact us!
          </p>
          <a
            className="bg-primaryPink hover:bg-secondaryPink transition-button px-[20px] py-[9px] text-[12px] sm:text-[14px] text-center leading-[24px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full cursor-pointer"
            onClick={freeConsultationClick}
            aria-label="redirect to consultation form"
          >
            CONTACT US
          </a>
        </div>
        <div className="hidden lg:block lg:w-[40%] xl:w-[57%]"></div>
      </div>
    </div>
  );
};

export default ContactAbout;
