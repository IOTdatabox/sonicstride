"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Badge from "../Badge";

const DiscoverTransform = () => {
  const router = useRouter();

  const freeConsultationClick = () => {
    const freeConsultation = document.getElementById("freeConsultation");
    if (!freeConsultation) {
      router.push("/contact#freeConsultation");
    } else {
      router.push("#freeConsultation");
    }
  };

  const DiscoverItem = ({ src, title, content }) => (
    <div className="bg-[#F5F7F8] sm:bg-white rounded-[8px] p-[16px] sm:p-[25px] lg:p-[20px] xl:p-[25px] transition-transform duration-300 ease-in-out transform hover:scale-[1.03]">
      <div className="w-[42px] sm:w-[62px] lg:w-[55px] xl:w-[62px] h-[42px] sm:h-[62px] lg:h-[55px] xl:h-[62px] mb-[10px] lg:mb-[8px] xl:mb-[20px] bg-secondaryColor rounded-full flex items-center justify-center">
        <Image
          src={src}
          alt="salesforce cloud"
          width={27}
          height={27}
          loading="lazy"
          className="w-[18.38px] sm:w-[27.13px] h-[18.38px] sm:h-[27.13px]"
        />
      </div>
      <h4 className="text-[20px] leading-[32px] font-normal text-primaryColor mb-[10px] lg:mb-[8px] xl:mb-[10px]">
        {title}
      </h4>
      <p className="lato-font text-[16px] leading-[26px] font-normal text-secondaryColor">
        {content}
      </p>
    </div>
  );
  return (
    <div className="py-8 sm:bg-morningMist">
      <div className="container max-w-[1440px] px-5 py-0 sm:py-5 mx-auto mt-[20px] xl:mt-[40px] lg:px-10 xl:px-[63px]">
        <div>
          <div className="lg:flex max-xl:items-center gap-[5%]">
            <div className="w-full lg:w-[50%] xl:w-[60%]">
              <Image
                src="/img/services/service-t.svg"
                alt="Team working together"
                width={753}
                height={370}
                className="w-full h-full max-md:object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-[50%] xl:w-[40%] mt-6 lg:mt-0">
              <div className="mb-[12px]">
                <Badge
                  text="TRANSFORM"
                  bgColor="bg-morningMist"
                  textColor="text-primaryColor"
                  src="/img/home/cloud-black.svg"
                  font="futura-boldLT"
                />
              </div>
              <h2 className="text-primaryColor text-[24px] xl:text-[36px] leading-[35px] xl:leading-[46px] font-bold ">
                Discover the potential of Salesforce with Sailwayz.
              </h2>
              <p className="text-secondaryColor text-[16px] xl:text-[20px] leading-[30px] font-normal mb-6 mt-3">
                Sailwayz is your partner for personalized consultations, custom
                CRM strategies, and ongoing support to harness Salesforce&apos;s
                capabilities. Our team of experts works closely with you to
                comprehend your specific business requirements, providing
                solutions that foster growth and achievement.
              </p>
            </div>
          </div>
          <div className="py-[20px] lg:py-[50px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px] sm:gap-[30px] lg:gap-[15px] xl:gap-[30px]">
              <DiscoverItem
                src="/img/services/card-1.svg"
                title="Uncover New Opportunities"
                content={"Bespoke Consultations to Propel Your Business Ahead"}
              />
              <DiscoverItem
                src="/img/services/card-2.svg"
                title="Unique CRM Strategies"
                content={
                  "Customized Solutions to Meet Your Specific Business Demands"
                }
              />
              <DiscoverItem
                src="/img/services/card-3.svg"
                title="Continuous Support and Professional Advice"
                content={
                  "Unlock Salesforce's Full Potential with Our Committed Team"
                }
              />
              <DiscoverItem
                src="/img/services/card-4.svg"
                title="Uncover New Opportunities"
                content={
                  "Optimized Workflows and Simplified Processes for Improved Efficiency"
                }
              />
            </div>
          </div>

          <div className="flex justify-center">
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

export default DiscoverTransform;
