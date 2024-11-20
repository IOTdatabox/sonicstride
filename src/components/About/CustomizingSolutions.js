import Image from "next/image";
import React from "react";
import Badge from "../Badge";

const CustomizingSolutions = () => {
  return (
    <div className="w-full bg-[url('/img/about/customizing-solutions-bg.svg')] bg-cover bg-no-repeat bg-[0%_20%] max-sm:bg-[24%_20%]">
      <div className="container max-w-[1440px] px-5 mx-auto pt-[50px] pb-[50px] sm:pt-[100px] sm:pb-[60px] lg:px-10 xl:px-[63px]">
        <div className="flex gap-0 mb-[30px] sm:mb-[58px]">
          <div className="hidden lg:block lg:w-[55%] xl:w-[57%]"></div>
          <div className="w-full lg:w-[45%] xl:w-[43%]">
            <div className="mb-[12px]">
              <Badge
                text="TRANSFORM"
                src="/img/home/cloud-white.svg"
                bgColor="bg-secondaryColor"
                textColor="text-morningMist"
                font="futura-bold"
              />
            </div>
            <h3 className="text-[20px] sm:text-[28px] leading-[28px] sm:leading-[38px] font-bold futura-bold text-white mb-[20px]">
              Customizing Solutions to Revolutionize Salesforce CRM
            </h3>
            <p className="text-white sm:text-morningMist lato-thin text-[13px] sm:text-[18px] leading-[19px] sm:leading-[28px] font-normal mb-[20px]">
              Sailwayz stands out as a premier Salesforce CRM consultant,
              specializing in delivering tailored solutions for companies. Our
              innovative approach has redefined the Salesforce CRM landscape,
              helping businesses achieve outstanding results. Our tagline,
              &lsquo;Innovative&rsquo; Solutions, reflects our dedication to
              providing cutting-edge solutions that drive success.
            </p>
            <p className="text-white sm:text-morningMist  lato-thin text-[13px] sm:text-[18px] leading-[19px] sm:leading-[28px] font-normal">
              As a trusted partner, we have helped numerous clients realize
              significant growth and success. The heading, &lsquo;Transforming
              Salesforce CRM with Tailored Solutions&rsquo;, encapsulates our
              mission and expertise in a succinct manner.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
          <div className="rounded-[12px] border-b border-primaryPink px-[20px] py-[24px] flex gap-[30px] items-center">
            <Image
              src="/img/about/tick-pink.svg"
              alt="Tick icon"
              width={52}
              height={52}
              loading="lazy"
              className="w-[52px] h-[52px]"
            />
            <div>
              <h2 className="futura-bold font-bold text-primaryPink text-[24px] sm:text-[36px] lg:text-[34px] xl:text-[36px] leading-[32px] sm:leading-[46px] lg:leading-[44px] xl:leading-[46px] mb-[5px]">
                30%
              </h2>
              <p className="font-normal lato-thin text-primaryPink text-[16px] lg:text-[14px] xl:text-[16px] leading-[26px] lg:leading-[24px] xl:leading-[26px]">
                Reduced Operational Costs
              </p>
            </div>
          </div>
          <div className="rounded-[12px] border-b border-dodgerBlue px-[20px] py-[24px] flex gap-[30px] items-center">
            <Image
              src="/img/about/tick-blue.svg"
              alt="Tick icon"
              width={52}
              height={52}
              loading="lazy"
              className="w-[52px] h-[52px]"
            />
            <div>
              <h2 className="futura-bold font-bold text-dodgerBlue text-[24px] sm:text-[36px] lg:text-[34px] xl:text-[36px] leading-[32px] sm:leading-[46px] lg:leading-[44px] xl:leading-[46px] mb-[5px]">
                30%
              </h2>
              <p className="font-normal lato-thin text-dodgerBlue text-[16px] lg:text-[14px] xl:text-[16px] leading-[26px] lg:leading-[24px] xl:leading-[26px]">
                Accelerated Project Delivery
              </p>
            </div>
          </div>
          <div className="rounded-[12px] border-b border-[#B26DE8] px-[20px] py-[24px] flex gap-[30px] items-center">
            <Image
              src="/img/about/tick-purple.svg"
              alt="tick icon"
              width={52}
              height={52}
              loading="lazy"
              className="w-[52px] h-[52px]"
            />
            <div>
              <h2 className="futura-bold font-bold text-[#B26DE8] text-[24px] sm:text-[36px] lg:text-[34px] xl:text-[36px] leading-[32px] sm:leading-[46px] lg:leading-[44px] xl:leading-[46px] mb-[5px]">
                30%
              </h2>
              <p className="font-normal lato-thin text-[#B26DE8] text-[16px] lg:text-[14px] xl:text-[16px] leading-[26px] lg:leading-[24px] xl:leading-[26px]">
                Increased Sales Revenue
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizingSolutions;
