"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Challenges = () => {
  const router = useRouter();

  const freeConsultationClick = () => {
    const freeConsultation = document.getElementById("freeConsultation");
    if (!freeConsultation) {
      router.push("/contact#freeConsultation");
    } else {
      router.push("#freeConsultation");
    }
  };

  const ChallengesItem = ({ src, title, content }) => (
    <div className="bg-white rounded-[8px] p-[16px] sm:p-[25px] lg:p-[20px] xl:p-[30px] transition-transform duration-300 ease-in-out transform hover:scale-[1.03]">
      <div className="w-[42px] sm:w-[62px] lg:w-[55px] xl:w-[62px] h-[42px] sm:h-[62px] lg:h-[55px] xl:h-[62px] mb-[10px] lg:mb-[8px] xl:mb-[10px] bg-secondaryColor rounded-full flex items-center justify-center">
        <Image
          src={src}
          alt="Salesforce cloud"
          width={27}
          height={27}
          loading="lazy"
          className="w-[18.38px] sm:w-[27.13px] h-[18.38px] sm:h-[27.13px]"
        />
      </div>
      <h4 className="text-[16px] sm:text-[22px] lg:text-[20px] xl:text-[22px] leading-[24px] sm:leading-[32px] lg:leading-[30px] xl:leading-[32px] text-primaryColor lato-thin font-bold mb-[10px] lg:mb-[8px] xl:mb-[10px] mt-[10px]">
        {title}
      </h4>
      <p className="lato-font text-[13px] sm:text-[15px] lg:text-[13px] xl:text-[16px] leading-[21px] sm:leading-[26px] lg:leading-[20px] xl:leading-[26px] font-normal text-secondaryColor">
        {content}
      </p>
    </div>
  );
  return (
    <div>
      <div className="w-full bg-morningMist">
        <div className="container max-w-[1440px] px-5 mx-auto py-[50px] lg:py-[100px] lg:px-10 xl:px-[63px]">
          <h2 className="mb-[30px] text-[28px] md:text-[36px] leading-[46px] md:leading-[46px] text-primaryColor futura-bold font-bold">
            Challenges Faced by the Client
          </h2>
          <div className="flex flex-col w-full sm:items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px] sm:gap-[30px] lg:gap-[15px] xl:gap-[30px]">
              <ChallengesItem
                src="/img/case/case-1.svg"
                title="Lack of Scalable CRM Solution"
                content={
                  "Vaioni Systems was using two CRM systems that lacked scalability and was not setup properly to assist Vaioni with their business."
                }
              />
              <ChallengesItem
                src="/img/case/case-2.svg"
                title="Inefficient sales process"
                content={
                  "Manual data entry and disparate systems resulted in inefficiencies in the sales process, leading to missed opportunities and inconsistent customer experiences."
                }
              />
              <ChallengesItem
                src="/img/case/case-3.svg"
                title="Limited Visibility"
                content={
                  "The lack of centralized data made it difficult for ABC Enterprises to gain insights into their sales pipeline, track customer interactions, and forecast revenue accurately."
                }
              />
              <ChallengesItem
                src="/img/case/case-4.svg"
                title="Integration Complexity"
                content={
                  "Integrating Salesforce CRM with existing systems and third-party tools posed a challenge due to the complexity of data migration and customization requirements."
                }
              />
            </div>
            <div className="mt-[50px]">
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
    </div>
  );
};

export default Challenges;
