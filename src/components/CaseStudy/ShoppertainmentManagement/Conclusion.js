"use client";
import Image from "next/image";
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
              className="bg-primaryPink hover:bg-secondaryPink transition-button px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full max-sm:block cursor-pointer"
              onClick={freeConsultationClick}
              aria-label="redirect to consultation form"
            >
              CONTACT US
            </a>
          </div>
        </div>
        <div className="lg:w-[70%] mt-[20px] lg:mt-0">
          <p className="text-[13px] sm:text-[20px] leading-[19px] sm:leading-[30px] lato-thin font-bold text-secondaryColor">
            In conclusion, Sailwayz successfully addressed the challenges faced
            by Shoppertainment Management with a tailored solution designed to
            enhance their Salesforce usage and streamline their operations. By
            delving into the intricacies of their business processes, Sailwayz
            not only reinvigorated user engagement but also introduced best
            practices to facilitate ease of use for Shoppertainment employees.
            The implementation of tasks and events proved particularly
            beneficial, empowering the directors and team to effectively manage
            their day-to-day activities and adhere to established business
            processes. As a result, Shoppertainment Management experienced a
            notable boost in confidence and efficiency, ultimately translating
            into increased revenue generation. This collaborative effort
            underscores the value of understanding client needs and leveraging
            innovative solutions to drive tangible business outcomes.
          </p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-lightGrey my-[40px]"></div>
      <div className="flex gap-[10px] md:gap-[30px]">
        <div>
          <Image
            src="/img/case/quotes.svg"
            alt="Quotes"
            width={173}
            height={36}
            className="w-[173px] md:w-[92px] h-[36px]"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-[20px] md:text-[36px] leading-[28px] md:leading-[46px] lato-thin font-light text-primaryColor">
            Sailwayz came in to do some general and also advanced training for
            the team. He is patient, knowledgeable and engaging and I
            wouldn&apos;t hesitate to recommend his services.
          </p>
          <p className="text-[18px] sm:text-[22px] leading-[32px] sm:leading-[30px] mt-[30px] text-secondaryColor lato-font font-normal">
            <span className="text-primaryColor lato-font font-bold text-[18px] sm:text-[22px] leading-[32px]">
              Carina Turner.
            </span>{" "}
            Director at Shoppertainment Management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
