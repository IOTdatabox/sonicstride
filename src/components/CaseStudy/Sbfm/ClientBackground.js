import Badge from "@/components/Badge";
import Image from "next/image";
import React from "react";

const ClientBackground = () => {
  return (
    <div className="bg-white">
      <div className="container max-w-[1440px] px-5 mx-auto py-[50px] sm:py-[100px] lg:px-10 xl:px-[63px]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-[16px] sm:gap-[30px] lg:gap-[60px]">
          <div className="w-full lg:w-[58%] ">
            <Image
              src="/img/case/client-background-3.svg"
              alt="client background"
              width={727}
              height={490}
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:w-[42%]">
            <div className="mb-[10px]">
              <Badge
                text="SBFM"
                bgColor="bg-morningMist"
                textColor="text-primaryColor"
                src="/img/home/cloud-black.svg"
                font="futura-boldLT"
              />
            </div>
            <h2 className="text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[40px] lg:leading-[46px] text-primaryColor futura-bold font-bold mb-[16px] sm:mb-[20px]">
              Client Background
            </h2>
            <p className="text-[13px] sm:text-[18px] lg:text-[20px] leading-[19px] sm:leading-[28px] lg:leading-[30px] text-secondaryColor lato-thin font-bold mb-[20px]">
              SBFM is a business that offers several management services to
              businesses nationwide specialising in, Cleaning, Catering,
              Security, Waste Management, Pest Control and Grounds Maintenance.
            </p>
            <p className="text-[13px] sm:text-[18px] lg:text-[20px] leading-[19px] sm:leading-[28px] lg:leading-[30px] text-secondaryColor lato-thin font-bold">
              They needed somewhere to quietly manage their sales process to
              manage new contracts and renewal of contracts.This would be a
              greenfield project to introduce salesforce to the SBFM sales team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientBackground;
