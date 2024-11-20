import Image from "next/image";
import React from "react";
import Badge from "../Badge";

const ContactInformation = () => {
  return (
    <div className="w-full bg-morningMist">
      <div className="container max-w-[1440px] px-5 py-[40px] sm:py-[100px] mx-auto lg:px-10 xl:px-[63px]">
        <div className="flex flex-col items-start lg:items-center justify-center gap-[10px] mb-[20px] lg:mb-[50px]">
          <div className="">
            <Badge
              text="LETS TALK"
              bgColor="bg-white"
              textColor="text-primaryColor"
              src="/img/home/cloud-black.svg"
              font="futura-boldLT"
            />
          </div>
          <h1 className="futura-bold font-bold text-primaryColor text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[40px] lg:leading-[46px]">
            Contact information&apos;s
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-[15px] xl:gap-[30px]">
          <div className="bg-white rounded-[16px] py-[30px] lg:py-[20px] xl:py-[40px] pl-[30px] lg:pl-[20px] xl:pl-[40px] pr-[28px] lg:pr-[20px] xl:pr-[31px] h-full">
            <div className="flex gap-[15px] sm:gap-[20px] items-start">
              <div className="w-[47.13px] sm:w-[62px] lg:w-[55px] xl:w-[62px] h-[47.13px] sm:h-[62px] lg:h-[48px] xl:h-[62px] flex items-center justify-center bg-primaryPink rounded-full">
                <Image
                  src="/img/contact/envelope.svg"
                  alt="email icon"
                  width={24}
                  height={24}
                  loading="lazy"
                  className="w-[18.24px] sm:w-[24px] lg:w-[22px] xl:w-[24px] h-[18.24px] sm:h-[24px] lg:h-[22px] xl:h-[24px]"
                />
              </div>
              <div>
                <h4 className="font-bold futura-bold text-primaryColor text-[13px] sm:text-[18px] lg:text-[17px] xl:text-[18px] leading-[19.8px] sm:leading-[26px] mb-[2px]">
                  Email Address
                </h4>
                <p className="text-secondaryColor lato-font text-[13px] sm:text-[18px] lg:text-[16px] xl:text-[18px] leading-[21px] sm:leading-[28px] lg:leading-[24px] xl:leading-[28px] font-normal mb-[12px] xl:mb-[15px]">
                  For any inquiries, please contact:
                </p>
                <p className="futura-normal font-medium text-[16px] sm:text-[22px] lg:text-[20px] xl:text-[22px] leading-[24.3px] sm:leading-[32px] lg:leading-[30px] xl:leading-[32px] text-primaryColor">
                  <a href="mailto:hello@sailwayz.com">hello@sailwayz.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[16px] py-[30px] lg:py-[20px] xl:py-[40px] pl-[30px] lg:pl-[20px] xl:pl-[40px] pr-[28px] lg:pr-[20px] xl:pr-[31px] h-full">
            <div className="flex gap-[15px] sm:gap-[20px] items-start">
              <div className="w-[47.13px] sm:w-[62px] lg:w-[55px] xl:w-[62px] h-[47.13px] sm:h-[62px] lg:h-[48px] xl:h-[62px] flex items-center justify-center bg-primaryBlue rounded-full">
                <Image
                  src="/img/contact/phone-icon.svg"
                  alt="phone icon"
                  width={24}
                  height={24}
                  loading="lazy"
                  className="w-[18.24px] sm:w-[24px] lg:w-[22px] xl:w-[24px] h-[18.24px] sm:h-[24px] lg:h-[22px] xl:h-[24px]"
                />
              </div>
              <div>
                <h4 className="font-bold futura-bold text-primaryColor text-[13px] sm:text-[18px] lg:text-[17px] xl:text-[18px] leading-[19.8px] sm:leading-[26px] mb-[2px]">
                  Phone Number
                </h4>
                <p className="text-secondaryColor lato-font text-[13px] sm:text-[18px] lg:text-[16px] xl:text-[18px] leading-[21px] sm:leading-[28px] lg:leading-[24px] xl:leading-[28px] font-normal mb-[12px] xl:mb-[15px]">
                  For any inquiries, please contact:
                </p>
                <p className="futura-normal font-medium text-[16px] sm:text-[22px] lg:text-[20px] xl:text-[22px] leading-[24.3px] sm:leading-[32px] lg:leading-[30px] xl:leading-[32px] text-primaryColor">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[16px] py-[30px] lg:py-[20px] xl:py-[40px] pl-[30px] lg:pl-[20px] xl:pl-[40px] pr-[28px] lg:pr-[20px] xl:pr-[31px] h-full">
            <div className="flex gap-[15px] sm:gap-[20px] items-start">
              <div className="w-[47.13px] sm:w-[62px] lg:w-[55px] xl:w-[62px] h-[47.13px] sm:h-[62px] lg:h-[48px] xl:h-[62px] flex items-center justify-center bg-[#B26DE8] rounded-full">
                <Image
                  src="/img/contact/marker.svg"
                  alt="location icon"
                  width={24}
                  height={24}
                  loading="lazy"
                  className="w-[18.24px] sm:w-[24px] lg:w-[22px] xl:w-[24px] h-[18.24px] sm:h-[24px] lg:h-[22px] xl:h-[24px]"
                />
              </div>
              <div>
                <h4 className="font-bold futura-bold text-primaryColor text-[13px] sm:text-[18px] lg:text-[17px] xl:text-[18px] leading-[19.8px] sm:leading-[26px] mb-[2px]">
                  Office
                </h4>
                <p className="text-secondaryColor lato-font text-[13px] sm:text-[18px] lg:text-[16px] xl:text-[18px] leading-[21px] sm:leading-[28px] lg:leading-[24px] xl:leading-[28px] font-normal mb-[12px] xl:mb-[15px]">
                  Get Directions
                </p>
                <p className="futura-normal font-medium text-[16px] sm:text-[22px] lg:text-[20px] xl:text-[22px] leading-[24.3px] sm:leading-[32px] lg:leading-[30px] xl:leading-[32px] text-primaryColor">
                  14 Egremont Avenue,
                  <br /> Manchester,
                  <br /> United Kingdom, M20 1GS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
