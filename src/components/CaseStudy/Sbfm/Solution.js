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
    <div className="w-full bg-[url('/img/case/solution-3-small.svg')] sm:bg-[url('/img/case/solution-3.svg')] bg-cover bg-no-repeat bg-[0%_0%] sm:bg-center lg:bg-[0%_0%]">
      <div className="container max-w-[1440px] px-5 mx-auto pt-[50px] sm:pt-[100px] lg:pt-[358px] pb-[50px] sm:pb-[100px] lg:px-10 xl:px-[63px]">
        <div>
          <Badge
            text="SOLUTION"
            src="/img/home/cloud-white.svg"
            bgColor="bg-secondaryColor"
            textColor="text-morningMist"
            font="futura-bold"
          />
          <h3 className="text-[36px] leading-[46px] futura-bold font-bold text-white mt-[12px]">
            Solution Provided by Sailwayz
          </h3>
          <div className="bg-[#ffffff87] w-full h-[1px] my-[40px]"></div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mb-[40px]">
              <div>
                <p className="text-[15px] xl:text-[16px] leading-[26px] text-dullGrey futura-font font-medium">
                  Understood the business processes and apply best way to use
                  salesforce to help manage and optimise these processes.
                </p>
              </div>
              <div>
                <p className="text-[15px] xl:text-[16px] leading-[26px] text-dullGrey futura-font font-medium">
                  Applying some industry know features which will enable SBFM
                  make the most of salesforce for their needs.
                </p>
              </div>
              <div>
                <p className="text-[15px] xl:text-[16px] leading-[26px] text-dullGrey futura-font font-medium">
                  Migrated existing SBFM data from excel sheets into Salesforce.
                </p>
              </div>
            </div>
            <a
              className="bg-primaryPink hover:bg-secondaryPink transition-button px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full max-sm:block cursor-pointer"
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
