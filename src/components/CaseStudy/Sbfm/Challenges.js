"use client";
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

  return (
    <div className="w-full bg-midNight">
      <div className="container max-w-[1440px] px-5 mx-auto py-[40px] sm:py-[100px] lg:px-10 xl:px-[63px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] sm:gap-[50px] xl:gap-[62px]">
          <div>
            <h2 className="futura-bold font-bold text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[40px] lg:leading-[46px] text-white mb-[32px] sm:mb-[50px]">
              Challenges Faced by the client
            </h2>
            <a
              className="bg-primaryPink hover:bg-secondaryPink transition-button px-[20px] sm:px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full max-sm:block cursor-pointer"
              onClick={freeConsultationClick}
              aria-label="redirect to consultation form"
            >
              CONTACT US
            </a>
          </div>
          <div>
            <p className="lato-thin font-normal sm:font-light text-lightBlue sm:text-morningMist text-[13px] sm:text-[24px] xl:text-[28px] leading-[19px] sm:leading-[36px] xl:leading-[38px]">
              A way new way to track and celebrate when new deals are closed
              and/or deals are renewed. Salesforce was a perfect solution to get
              this resolved and for future expansion and use to manage customer
              information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
