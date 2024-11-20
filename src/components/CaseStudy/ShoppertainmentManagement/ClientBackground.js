import Badge from "@/components/Badge";
import Image from "next/image";
import React from "react";

const ClientBackground = () => {
  return (
    <div className="bg-lightBlue">
      <div className="container max-w-[1440px] px-5 mx-auto py-[50px] sm:py-[100px] lg:px-10 xl:px-[63px]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-[16px] sm:gap-[30px] lg:gap-[60px]">
          <div className="w-full lg:w-[58%] ">
            <Image
              src="/img/case/client-background-2.svg"
              alt="Client background"
              width={727}
              height={490}
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-[42%]">
            <div className="mb-[10px]">
              <Badge
                text="SHOPP GROUP"
                bgColor="bg-morningMist"
                textColor="text-primaryColor"
                src="/img/home/cloud-black.svg"
                font="futura-boldLT"
              />
            </div>
            <h2 className="text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[40px] lg:leading-[46px] text-primaryColor futura-bold font-bold mb-[16px] sm:mb-[20px]">
              Client Background
            </h2>
            <p className="text-[13px] sm:text-[18px] lg:text-[20px] leading-[19px] sm:leading-[28px] lg:leading-[30px] text-secondaryColor lato-thin font-bold">
              Shoppertainment Management helps landlords and shopping centres to
              optimise mall income and profitability through great ideas and
              dynamic marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientBackground;
