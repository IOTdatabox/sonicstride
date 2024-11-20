"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Badge from "../Badge";

const OurMission = () => {
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
    <div className="container max-w-[1440px] px-5 mx-auto py-[50px] sm:py-[100px] lg:px-10 xl:px-[63px]">
      <div className="flex gap-[30px] lg:gap-0 xl:gap-[30px] flex-col lg:flex-row">
        <div className="w-full lg:w-[60%] xl:w-[58%] lg:pr-[50px]">
          <div className="relative h-full">
            <Image
              src="/img/about/our-mission.svg"
              alt="Our Mission"
              width={753}
              height={395}
              loading="lazy"
              className="w-full h-full rounded-[24px]"
            />
          </div>
        </div>
        <div className="w-full lg:w-[40%] xl:w-[42%]">
          <div className="mb-[10px]">
            <Badge
              text="TRANSFORM"
              bgColor="bg-morningMist"
              textColor="text-primaryColor"
              src="/img/home/cloud-black.svg"
              font="futura-boldLT"
            />
          </div>
          <h2 className="futura-bold font-bold text-primaryColor text-[20px] sm:text-[36px] lg:text-[24px] xl:text-[36px] leading-[28px] sm:leading-[46px] lg:leading-[32px] xl:leading-[46px] mb-[20px] lg:mb-[15px] xl:mb-[20px]">
            Our Mission: Strengthening Enterprises through Salesforce CRM
          </h2>
          <p className="text-secondaryColor lato-font text-[13px] sm:text-[18px] lg:text-[15px] xl:text-[18px] leading-[19px] sm:leading-[28px] lg:leading-[24px] xl:leading-[28px] font-normal mb-[20px] lg:mb-[15px] xl:mb-[20px]">
            Sailwayz was founded with a clear mission in mind - to transform
            Salesforce CRM implementations. We believe that by offering
            customized solutions, we can empower businesses to unlock their full
            potential. Our team of experienced consultants and our passion for
            innovation drive us to deliver exceptional results, enabling our
            clients to thrive in the digital era.
          </p>
          <div className="max-sm:py-[9px] sm:pt-[14px]">
            <a
              className="bg-primaryPink hover:bg-secondaryPink transition-button px-[20px] sm:px-[25px] xl:px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-xl:w-full max-xl:block cursor-pointer"
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

export default OurMission;
