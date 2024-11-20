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
              className="bg-primaryPink hover:bg-secondaryPink transition-button px-[20px] sm:px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full max-sm:block cursor-pointer"
              onClick={freeConsultationClick}
              aria-label="redirect to consultation form"
            >
              CONTACT US
            </a>
          </div>
        </div>
        <div className="lg:w-[70%] mt-[20px] lg:mt-0">
          <p className="text-[13px] md:text-[20px] leading-[19px] md:leading-[30px] lato-thin font-bold text-secondaryColor">
            Sailwayz successfully implemented and customized Salesforce CRM to
            address Vaioni Group’s challenges and support their growth
            objectives. By streamlining sales processes, improving data
            visibility, and enhancing customer engagement, Salesforce CRM has
            become a strategic asset for Vaioni Group, enabling them to drive
            sales growth, enhance customer satisfaction, and achieve their
            business goals. The partnership between Vaioni Group and Sailwayz
            demonstrates the value of leveraging Salesforce technology and
            expertise to transform business operations and drive success.
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
          <p className="text-[20px] md:text-[36px] leading-[28px] md:leading-[46px] lato-thin text-primaryColor">
            Sailwayz was instrumental in setting up our salesforce and
            continually improving it. This set us up to be able to easily manage
            more customer and clients. They were attentive and delivered what we
            needed and more.
          </p>
          <p className="text-[20px] leading-[30px] mt-[30px]">
            <span className="font-bold text-secondaryColor ">
              Ateeb Mehmood.
            </span>{" "}
            Finance Director.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
