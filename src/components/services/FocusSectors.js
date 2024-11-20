import Image from "next/image";
import React from "react";
import Badge from "../Badge";

const FocusSectors = () => {
  return (
    <div className="bg-color-1 py-2 mt-[70px]">
      <div className="container max-w-[1440px] px-5 py-0 sm:py-5 mx-auto mt-[40px] lg:mt-[90px] lg:px-10 xl:px-[63px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px]">
          <div className="col-span-6 xl:col-span-3">
            <div className="mb-[10px]">
              <Badge
                text="FOCUS SECTORS"
                bgColor="bg-morningMist"
                textColor="text-primaryColor"
                src="/img/home/cloud-black.svg"
                font="futura-boldLT"
              />
            </div>
            <h2 className="futura-bold font-bold text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[46px] text-primaryColor mb-[20px]">
              Industries we serve
            </h2>
            <p className="lato-font font-normal text-[13px] sm:text-[18px] lg:text-[20px] leading-[19px] sm:leading-[30px] text-secondaryColor">
              Sailwayz caters to a broad spectrum of industries, applying our
              specialized knowledge to deliver tailored solutions that tackle
              the unique challenges faced by each sector.
            </p>
          </div>
          <div className="col-span-6 xl:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[12px] sm:gap-[30px] lg:gap-[15px] xl:gap-[30px] mb-[30px] sm:mb-[60px]">
              <div className="cursor-pointer shine-hover">
                <div className="shine rounded-[16px] p-[30px] lg:p-[20px] xl:p-[30px] bg-[url('/img/home/finance-bg.svg')] bg-cover bg-no-repeat h-[170px] sm:h-[240px] lg:h-[170px] xl:h-[240px]">
                  <Image
                    src="/img/home/finance-icon.svg"
                    alt="Finance icon"
                    width={62}
                    height={62}
                    loading="lazy"
                    className="w-[48px] sm:w-[62px] h-[47px] sm:h-[62px] mb-[16px] sm:mb-[20px] lg:mb-[10px] xl:mb-[20px] max-sm:mt-[8px] "
                  />
                  <h3 className="futura-bold text-white font-bold text-[18px] sm:text-[28px] lg:text-[22px] xl:text-[28px] leading-[26px] sm:leading-[38px] lg:leading-[32px] xl:leading-[38px]">
                    Finance
                  </h3>
                </div>
              </div>

              <div className="cursor-pointer shine-hover">
                <div className="shine rounded-[16px] p-[30px] lg:p-[20px] xl:p-[30px] bg-[url('/img/home/gov-org-bg.svg')] bg-cover bg-no-repeat h-[170px] sm:h-[240px] lg:h-[170px] xl:h-[240px]">
                  <Image
                    src="/img/home/gov-org-icon.svg"
                    alt="Government icon"
                    width={62}
                    height={62}
                    loading="lazy"
                    className="w-[48px] sm:w-[62px] h-[47px] sm:h-[62px] mb-[16px] sm:mb-[20px] lg:mb-[10px] xl:mb-[20px] max-sm:mt-[8px]"
                  />
                  <h3 className="futura-bold text-white font-bold text-[18px] sm:text-[28px] lg:text-[22px] xl:text-[28px] leading-[26px] sm:leading-[38px] lg:leading-[32px] xl:leading-[38px]">
                    Government Organisations
                  </h3>
                </div>
              </div>

              <div className="cursor-pointer shine-hover">
                <div className="shine rounded-[16px] p-[30px] lg:p-[20px] xl:p-[30px] bg-[url('/img/home/retail-bg.svg')] bg-cover bg-no-repeat h-[170px] sm:h-[240px] lg:h-[170px] xl:h-[240px]">
                  <Image
                    src="/img/home/retail-icon.svg"
                    alt="Retail icon"
                    width={62}
                    height={62}
                    loading="lazy"
                    className="w-[48px] sm:w-[62px] h-[47px] sm:h-[62px] mb-[16px] sm:mb-[20px] lg:mb-[10px] xl:mb-[20px] max-sm:mt-[8px]"
                  />
                  <h3 className="futura-bold text-white font-bold text-[18px] sm:text-[28px] lg:text-[22px] xl:text-[28px] leading-[26px] sm:leading-[38px] lg:leading-[32px] xl:leading-[38px]">
                    Retail
                  </h3>
                </div>
              </div>

              <div className="cursor-pointer shine-hover">
                <div className="shine rounded-[16px] p-[30px] lg:p-[20px] xl:p-[30px] bg-[url('/img/home/connectivity-bg.svg')] bg-cover bg-no-repeat h-[170px] sm:h-[240px] lg:h-[170px] xl:h-[240px]">
                  <Image
                    src="/img/home/connectivity.svg"
                    alt="Connectivity icon"
                    width={62}
                    height={62}
                    loading="lazy"
                    className="w-[48px] sm:w-[62px] h-[47px] sm:h-[62px] mb-[16px] sm:mb-[20px] lg:mb-[10px] xl:mb-[20px] max-sm:mt-[8px]"
                  />
                  <h3 className="futura-bold text-white font-bold text-[18px] sm:text-[28px] lg:text-[22px] xl:text-[28px] leading-[26px] sm:leading-[38px] lg:leading-[32px] xl:leading-[38px]">
                    Connectivity
                  </h3>
                </div>
              </div>

              <div className="cursor-pointer shine-hover">
                <div className="shine rounded-[16px] p-[30px] lg:p-[20px] xl:p-[30px] bg-[url('/img/home/law-bg.svg')] bg-cover bg-no-repeat h-[170px] sm:h-[240px] lg:h-[170px] xl:h-[240px]">
                  <Image
                    src="/img/home/law-icon.svg"
                    alt="Law icon"
                    width={62}
                    height={62}
                    loading="lazy"
                    className="w-[48px] sm:w-[62px] h-[47px] sm:h-[62px] mb-[16px] sm:mb-[20px] lg:mb-[10px] xl:mb-[20px] max-sm:mt-[8px]"
                  />
                  <h3 className="futura-bold text-white font-bold text-[18px] sm:text-[28px] lg:text-[22px] xl:text-[28px] leading-[26px] sm:leading-[38px] lg:leading-[32px] xl:leading-[38px]">
                    Law
                  </h3>
                </div>
              </div>

              <div className="cursor-pointer shine-hover">
                <div className="shine rounded-[16px] p-[30px] lg:p-[20px] xl:p-[30px] bg-[url('/img/home/manufacturing-bg.svg')] bg-cover bg-no-repeat h-[170px] sm:h-[240px] lg:h-[170px] xl:h-[240px]">
                  <Image
                    src="/img/home/manufacturing-icon.svg"
                    alt="Manufacturing icon"
                    width={62}
                    height={62}
                    loading="lazy"
                    className="w-[48px] sm:w-[62px] h-[47px] sm:h-[62px] mb-[16px] sm:mb-[20px] lg:mb-[10px] xl:mb-[20px] max-sm:mt-[8px]"
                  />
                  <h3 className="futura-bold text-white font-bold text-[18px] sm:text-[28px] lg:text-[22px] xl:text-[28px] leading-[26px] sm:leading-[38px] lg:leading-[32px] xl:leading-[38px]">
                    Manufacturing
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusSectors;
