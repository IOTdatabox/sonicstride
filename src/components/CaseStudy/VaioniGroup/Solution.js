"use client";
import Badge from "@/components/Badge";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Solution = () => {
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
    <div className="w-full bg-[url('/img/case/solution-1.svg')] bg-cover bg-no-repeat max-lg:bg-center">
      <div className="container max-w-[1440px] px-5 mx-auto pt-[100px] lg:pt-[194px] pb-[100px] lg:px-10 xl:px-[63px]">
        <div>
          <Badge
            text="SOLUTION"
            src="/img/home/cloud-white.svg"
            bgColor="bg-secondaryColor"
            textColor="text-morningMist"
            font="futura-bold"
          />
          <h3 className="text-[36px] leading-[46px] futura-bold font-bold text-[#ffff] mt-[12px]">
            Solution Provided by Sailwayz
          </h3>
          <div className="bg-[#ffffff87] w-full h-[1px] my-[40px]"></div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mb-[40px]">
              <div>
                <h5 className="text-[19px] mb-[20px] leading-[32px] text-dullGrey futura-font">
                  Salesforce Implementation and Customisation
                </h5>
                <p className="text-[15px] xl:text-[16px] leading-[26px] text-dullGrey futura-font font-medium">
                  Sailwayz conducted a thorough assessment of Vaioni
                  Group&apos;s business processes and requirements. They then
                  implemented Salesforce CRM and customized it to align with the
                  company&apos;s unique sales workflows, including lead
                  management, opportunity tracking, quoting processes, Project
                  management and implementation and monitoring the services
                  provided to their customers using Case management. This also
                  includes the billing process.
                </p>
              </div>
              <div>
                <h5 className="text-[19px] mb-[20px] leading-[32px] text-dullGrey futura-font">
                  Automation and Integration
                </h5>
                <p className="text-[15px] xl:text-[16px] leading-[26px] text-dullGrey futura-font font-medium">
                  Sailwayz leveraged Salesforce&apos;s automation capabilities
                  to streamline sales processes and reduce manual effort. They
                  integrated Salesforce CRM with Vaioni Group’s existing
                  systems, including their website, credit check and their
                  billing software and marketing automation platform, to ensure
                  seamless data flow and improve cross-functional collaboration.
                </p>
              </div>
              <div>
                <h5 className="text-[19px] mb-[20px] leading-[32px] text-dullGrey futura-font">
                  User Training and Adoption
                </h5>
                <p className="text-[15px] xl:text-[16px] leading-[26px] text-dullGrey futura-font font-medium">
                  Sailwayz provided comprehensive training to Vaioni Group’s
                  sales and support teams to ensure they were proficient in
                  using the new Salesforce CRM system. They also offered ongoing
                  support and guidance to facilitate user adoption and address
                  any challenges that arose during the transition.
                </p>
              </div>
            </div>
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

export default Solution;
