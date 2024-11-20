"use client";
import Badge from "@/components/Badge";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const StepByStepGuide = () => {
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
    <div className="w-full bg-white">
      <div className="container max-w-[1440px] px-5 mx-auto py-[50px] sm:py-[100px] lg:px-10 xl:px-[63px]">
        <div className="w-full">
          <div className="mb-[10px] flex justify-center">
            <Badge
              text="STEP-BY-STEP GUIDE"
              bgColor="bg-morningMist"
              textColor="text-primaryColor"
              src="/img/home/cloud-black.svg"
              font="futura-boldLT"
            />
          </div>
          <h1 className="futura-normal font-normal text-[24px] lg:text-[32px] xl:text-[36px] leading-[32px] lg:leading-[43px] xl:leading-[46px] text-center text-primaryColor mb-[40px] sm:mb-[45px] lg:mb-[50px]">
            Challenges Faced by the client
          </h1>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 mb-[50px] pl-[57px] sm:pl-0 lg:pl-[57px]">
            {/* Auto-Progressing Vertical Line */}
            <div className="absolute left-2 md:left-1/2 transform -translate-x-1/2 h-[50%] w-[2px] bg-coolGrey mt-[95px]">
              <div className="absolute top-0 left-0 w-full bg-secondaryColor animate-progress-line"></div>
            </div>
            {/* Step Points */}
            {[0, 50].map((position, index) => (
              <div
                key={index}
                className={`absolute left-2 md:left-1/2 transform -translate-x-1/2 w-[15px] h-[15px] bg-secondaryColor rounded-full animate-point-pulse mt-[95px]`}
                style={{
                  top: `${position}%`,
                  animationDelay: `${(index + 1) * 2.5}s`,
                }}
              ></div>
            ))}
            <div className="max-sm:order-1 flex gap-[13px] sm:gap-[20px] lg:gap-[30px] items-center pr-0 sm:pr-[45px] lg:pr-[70px] xl:pr-[127px] pl-[20px] sm:pl-[30px] xl:pl-[112px] pt-0 sm:pt-[37px] mb-[15px] sm:mb-[30px] lg:mb-[40px]">
              <Image
                src="/img/home/one.svg"
                alt="One"
                width={82}
                height={108}
                loading="lazy"
                className="w-[27px] sm:w-[62px] lg:w-[82px] h-[27px] sm:h-[88px] lg:h-[108px]"
              />
              <div>
                <p className="text-primaryColor text-[13px] sm:text-[16px] lg:text-[17px] xl:text-[20px] leading-[19px] sm:leading-[25px] lg:leading-[28px] xl:leading-[30px] lato-thin font-semibold">
                  Users no longer engaging with their Salesforce system
                </p>
              </div>
            </div>
            <div className="max-sm:order-2 mb-[40px] sm:mb-[30px] lg:mb-[40px]">
              <Image
                src="/img/case/step-by-step-1.svg"
                alt="Step 1"
                width={328}
                height={203}
                loading="lazy"
                className="w-full sm:w-[305px] lg:w-[360px] xl:w-[440px] sm:h-[205px] lg:h-[210px] xl:h-[212px] pl-0 sm:pl-[45px] lg:pl-[70px] xl:pl-[127px]"
              />
            </div>
            <div className="max-sm:order-4 mb-[40px] sm:mb-[30px] lg:mb-[40px]">
              <Image
                src="/img/case/step-by-step-2.svg"
                alt="Step 2"
                width={328}
                height={203}
                loading="lazy"
                className="w-full sm:h-auto pl-0 sm:pl-[40px] lg:pl-[80px] xl:pl-[183px] pr-0 sm:pr-[45px] lg:pr-[70px] xl:pr-[127px]"
              />
            </div>
            <div className="max-sm:order-3 flex gap-[13px] sm:gap-[20px] lg:gap-[30px] items-center sm:items-start pl-[20px] sm:pl-[45px] lg:pl-[70px] xl:pl-[127px] pr-0 sm:pr-[30px] xl:pr-[112px] pt-[37px] mb-[15px] sm:mb-[30px] lg:mb-[40px] pb-0 sm:pb-[41px]">
              <Image
                src="/img/home/two.svg"
                alt="Two"
                width={82}
                height={108}
                loading="lazy"
                className="w-[27px] sm:w-[62px] lg:w-[82px] h-[27px] sm:h-[88px] lg:h-[108px]"
              />
              <div>
                <p className="text-primaryColor text-[13px] sm:text-[16px] lg:text-[17px] xl:text-[20px] leading-[19px] sm:leading-[25px] lg:leading-[28px] xl:leading-[30px] lato-thin font-semibold">
                  Design and layout processes to enable Shoppertainment employee
                  to easily use the system
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a
              className="bg-primaryPink hover:bg-secondaryPink transition-button px-[20px] sm:px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full block cursor-pointer"
              onClick={freeConsultationClick}
              aria-label="redirect to consultation form"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepByStepGuide;
