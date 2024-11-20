import Badge from "@/components/Badge";
import Image from "next/image";
import React from "react";

const ClientBackground = () => {
  return (
    <div className="py-[50px] md:py-[100px]">
      <div className="container max-w-[1440px] px-5 mx-auto lg:px-10 xl:px-[80px]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-[16px] sm:gap-[30px] lg:gap-[60px]">
          <div className="w-full lg:w-[58%]">
            <Image
              src="/img/case/case-bg-2.svg"
              alt="Case study"
              width={727}
              height={490}
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-[42%]">
            <div className="mb-[10px]">
              <Badge
                text="VAIONI GROUP"
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
              Vaioni group is an internet provender specialising on providing
              fast, reliable, and managed Internet Services/ and technology to
              businesses. With a rapidly expanding customer base and increasing
              demand for their services, they recognized the need for a robust
              customer relationship management (CRM) platform to manage sales,
              marketing, and customer support processes efficiently. They
              approached our Salesforce consultancy, Sailwayz, seeking
              assistance in implementing and customizing Salesforce CRM to meet
              their unique business requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientBackground;
