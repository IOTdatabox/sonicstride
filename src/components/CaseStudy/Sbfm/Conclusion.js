"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Conclusion = () => {
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
    <div className="container max-w-[1440px] px-5 mx-auto py-[50px] lg:py-[100px] lg:px-10 xl:px-[63px]">
      <div className="lg:flex w-full gap-[30px]">
        <div className="lg:w-[44%] xl:w-[30%]">
          <h3 className="text-[24px] md:text-[36px] leading-[32px] md:leading-[46px] text-primaryColor futura-bold font-bold mb-[26px] md:mb-[32px]">
            Conclusion
          </h3>
          <div>
            <a
              className="bg-primaryPink hover:bg-secondaryPink transition-button px-[20px] sm:px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full max-sm:block cursor-pointer"
              onClick={freeConsultationClick}
              aria-label="redirect to consultation form"
            >
              CONTACT US
            </a>
          </div>
        </div>
        <div className="lg:w-[70%] mt-[20px] lg:mt-0">
          <p className="text-[13px] sm:text-[20px] leading-[19px] sm:leading-[30px] lato-thin font-bold text-secondaryColor">
            In conclusion, salesforce successfully designed, built and
            introduced the new salesforce instance to the business and migrated
            data into salesforce which was readily adopted by the business and
            the sale team. This helped them manage their Sales pipelines for
            better reporting and use.
          </p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#C0CFD6] my-[40px]"></div>
      <div>
        <p className="text-[18px] sm:text-[22px] leading-[32px] sm:leading-[30px] mt-[30px] text-secondaryColor lato-font font-normal">
          <span className="text-primaryColor lato-font font-bold text-[18px] sm:text-[22px] leading-[32px]">
            Neil Creasey.
          </span>{" "}
          Chief Commercial Officer.
        </p>
      </div>
    </div>
  );
};

export default Conclusion;
