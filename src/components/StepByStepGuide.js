"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Badge from "./Badge";

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
    // <div className="w-full bg-white">
    <div className=" max-md:bg-right bg-[url('/img/home/light-gradient.jpg')] md:bg-[url('/img/home/light-gradient.jpg')] bg-cover bg-no-repeat">

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
          <h1 className="futura-normal font-normal text-[24px] lg:text-[32px] xl:text-[36px] leading-[32px] lg:leading-[43px] xl:leading-[46px] text-center text-primaryColor mb-[40px] sm:mb-[45px] lg:mb-[50px] xl:mb-[55px]">
            Real-time wellness music to motivate and inspire your mood.
          </h1>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 mb-[50px]">
            {/* Auto-Progressing Vertical Line */}
            <div className="absolute left-2 sm:left-1/2 transform -translate-x-1/2 h-[75%] w-[2px] bg-coolGrey mt-[95px]">
              <div className="absolute top-0 left-0 w-full bg-secondaryColor animate-progress-line"></div>
            </div>
            {/* Step Points */}
            {[0, 25, 50, 75].map((position, index) => (
              <div
                key={index}
                className={`absolute left-2 sm:left-1/2 transform -translate-x-1/2 w-[15px] h-[15px] bg-secondaryColor rounded-full animate-point-pulse mt-[95px]`}
                style={{
                  top: `${position}%`,
                  animationDelay: `${(index + 1) * 2.5}s`,
                }}
              ></div>
            ))}

            <div className="max-sm:order-1 flex gap-[13px] sm:gap-[20px] lg:gap-[30px] items-center sm:items-start pr-0 sm:pr-[45px] lg:pr-[70px] xl:pr-[127px] pl-[85px] sm:pl-[30px] xl:pl-[112px] pt-0 sm:pt-[37px] mb-0 sm:mb-[30px] lg:mb-[40px]">
              <Image
                src="/img/home/one.svg"
                alt="One"
                width={82}
                height={108}
                loading="lazy"
                className="w-[27px] sm:w-[62px] lg:w-[82px] h-[27px] sm:h-[88px] lg:h-[108px]"
              />
              <div>
                <h3 className="futura-bold text-[20px] sm:text-[24px] lg:text-[28px] leading-[28px] sm:leading-[34px] lg:leading-[38px] font-bold text-primaryColor mb-[5px] sm:mb-[15px] lg:mb-[20px]">
                  Step One
                </h3>
                <p className="text-secondaryColor text-[13px] sm:text-[16px] lg:text-[17px] xl:text-[20px] leading-[19px] sm:leading-[25px] lg:leading-[28px] xl:leading-[30px] lato-thin font-semibold">
                We believe music has no boundaries. Let&apos;s first understand your music taste.
                </p>
              </div>
            </div>
            <div className="max-sm:order-2 mb-[40px] md:mb-0 lg:mb-[40px]">
              <Image
                src="/img/home/step-1.svg"
                alt="Step 1"
                width={328}
                height={203}
                loading="lazy"
                className="mx-auto w-[277px] sm:w-[328px]"
              />
            </div>
            <div className="max-sm:order-4 mb-[40px] sm:mb-[30px] lg:mb-[40px]">
              <Image
                src="/img/home/step-2.svg"
                alt="Step 2"
                width={328}
                height={203}
                loading="lazy"
                className="mx-auto w-[277px] sm:w-[328px]"
              />
            </div>
            <div className="max-sm:order-3 flex gap-[13px] sm:gap-[20px] lg:gap-[30px] items-center sm:items-start pl-[85px] sm:pl-[45px] lg:pl-[70px] xl:pl-[127px] pr-0 sm:pr-[30px] xl:pr-[112px] sm:pt-[37px] mb-[15px] sm:mb-[30px] lg:mb-[40px] pb-0 sm:pb-[41px]">
              <Image
                src="/img/home/two.svg"
                alt="Two"
                width={82}
                height={108}
                loading="lazy"
                className="w-[26px] h-[26px] sm:w-[27px] md:w-[62px] lg:w-[82px] sm:h-[27px] md:h-[88px] lg:h-[108px]"
              />
              <div>
                <h3 className="futura-bold text-[20px] sm:text-[24px] lg:text-[28px] leading-[28px] sm:leading-[34px] lg:leading-[38px] font-bold text-primaryColor mb-[5px] sm:mb-[15px] lg:mb-[20px]">
                  Step Two
                </h3>
                <p className="text-secondaryColor text-[13px] sm:text-[16px] lg:text-[17px] xl:text-[20px] leading-[19px] sm:leading-[25px] lg:leading-[28px] xl:leading-[30px] lato-thin font-semibold">
                  As a wellness music app ,we would like to know you more.
                </p>
              </div>
            </div>

            <div className="max-sm:order-5 flex gap-[13px] sm:gap-[20px] lg:gap-[30px] items-center sm:items-start pr-0 sm:pr-[45px] lg:pr-[70px] xl:pr-[127px] pl-[85px] sm:pl-[30px] xl:pl-[112px] mb-[15px] sm:mb-[30px] lg:mb-[40px]">
              <Image
                src="/img/home/three.svg"
                alt="Three"
                width={82}
                height={108}
                loading="lazy"
                className="w-[27px] sm:w-[62px] lg:w-[82px] h-[27px] sm:h-[88px] lg:h-[108px]"
              />
              <div>
                <h3 className="futura-bold text-[20px] sm:text-[24px] lg:text-[28px] leading-[28px] sm:leading-[34px] lg:leading-[38px] font-bold text-primaryColor mb-[5px] sm:mb-[15px] lg:mb-[20px]">
                  Step Three
                </h3>
                <p className="text-secondaryColor text-[13px] sm:text-[16px] lg:text-[17px] xl:text-[20px] leading-[19px] sm:leading-[25px] lg:leading-[28px] xl:leading-[30px] lato-thin font-semibold">
                  How do you want wellness music works in your life?
                </p>
              </div>
            </div>
            <div className="max-sm:order-6 mb-[30px] lg:mb-[40px]">
              <Image
                src="/img/home/step-3.svg"
                alt="Step 3"
                width={314}
                height={186}
                loading="lazy"
                className="w-[277px] sm:w-[250px] md:w-[314px] mx-auto"
              />
            </div>
            <div className="max-sm:order-8 mb-[30px] lg:mb-[40px]">
              <Image
                src="/img/home/step-4.svg"
                alt="Step 4"
                width={314}
                height={245}
                loading="lazy"
                className="mx-auto w-[277px] md:w-[345px] lg:w-[354px] md:h-[223px] lg:h-[245px] "
              />
            </div>
            <div className="max-sm:order-7 flex gap-[13px] sm:gap-[20px] lg:gap-[30px] items-center sm:items-start ml-[85px] sm:ml-[45px] lg:ml-[70px] xl:ml-[127px] pr-0 sm:pr-[30px] xl:pr-[112px] pt-[40px] mb-[15px] sm:mb-[30px] lg:mb-[40px]">
              <Image
                src="/img/home/four.svg"
                alt="Four"
                width={82}
                height={108}
                loading="lazy"
                className="w-[27px] sm:w-[62px] lg:w-[82px] h-[27px] sm:h-[88px] lg:h-[108px]"
              />
              <div>
                <h3 className="futura-bold text-[20px] sm:text-[24px] lg:text-[28px] leading-[28px] sm:leading-[34px] lg:leading-[38px] font-bold text-primaryColor mb-[5px] sm:mb-[15px] lg:mb-[20px]">
                  Step Four
                </h3>
                <p className="text-secondaryColor text-[13px] sm:text-[16px] lg:text-[17px] xl:text-[20px] leading-[19px] sm:leading-[25px] lg:leading-[28px] xl:leading-[30px] lato-thin font-semibold">
                  Without self-awareness, we miss the signals our mind and body send us.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a
              className="bg-primaryPink hover:bg-secondaryPink transition-button px-[20px] sm:px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full max-sm:block cursor-pointer"
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
