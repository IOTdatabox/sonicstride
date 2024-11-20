import Badge from "@/components/Badge";
import Image from "next/image";
import React from "react";

const Results = () => {
  return (
    <div className="bg-secondaryColor">
      <div className="container max-w-[1440px] px-5 mx-auto py-[50px] lg:py-[100px] lg:px-10 xl:px-[63px]">
        <div className="flex flex-col items-center">
          <Badge
            text="RESULTS"
            src="/img/home/cloud-white.svg"
            bgColor="bg-primaryColor"
            textColor="text-morningMist"
            font="futura-bold"
          />
          <h3 className="text-[36px] leading-[46px] text-white futura-bold font-bold mt-[12px]">
            Results
          </h3>
        </div>
        <div className="mt-[30px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[30px]">
            <div>
              <div className="overflow-hidden rounded-[50%] h-[170px] sm:h-[300px] lg:h-[215px] xl:h-[300px]">
                <Image
                  src="/img/case/r-1.svg"
                  alt="Results"
                  width={305}
                  height={305}
                  className="w-full h-full transition-transform duration-300 ease-out rounded-[50%] hover:scale-110"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-[11.52px] sm:text-[22px] lg:text-[18px] xl:text-[22px] leading-[16.75px] sm:leading-[32px] lato-thin font-medium text-white mt-[30px]">
                Streamlined <br /> processes.
              </p>
            </div>
            <div>
              <div className="overflow-hidden rounded-[50%] h-[170px] sm:h-[300px] lg:h-[215px] xl:h-[300px]">
                <Image
                  src="/img/case/r-2.svg"
                  alt="Results"
                  width={305}
                  height={305}
                  className="w-full h-full transition-transform duration-300 ease-out rounded-[50%] hover:scale-110"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-[11.52px] sm:text-[22px] lg:text-[18px] xl:text-[22px] leading-[16.75px] sm:leading-[32px] lato-thin font-medium text-white mt-[30px]">
                Visibility to all our services <br /> and customers.
              </p>
            </div>
            <div>
              <div className="overflow-hidden rounded-[50%] h-[170px] sm:h-[300px] lg:h-[215px] xl:h-[300px]">
                <Image
                  src="/img/case/r-3.svg"
                  alt="Results"
                  width={305}
                  height={305}
                  className="w-full h-full transition-transform duration-300 ease-out rounded-[50%] hover:scale-110"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-[11.52px] sm:text-[22px] lg:text-[18px] xl:text-[22px] leading-[16.75px] sm:leading-[32px] lato-thin font-medium text-white mt-[30px]">
                Correct data throughout <br /> the system.
              </p>
            </div>
            <div>
              <div className="overflow-hidden rounded-[50%] h-[170px] sm:h-[300px] lg:h-[215px] xl:h-[300px]">
                <Image
                  src="/img/case/r-4.svg"
                  alt="Results"
                  width={305}
                  height={305}
                  className="w-full h-full transition-transform duration-300 ease-out rounded-[50%] hover:scale-110"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-[11.52px] sm:text-[22px] lg:text-[18px] xl:text-[22px] leading-[16.75px] sm:leading-[32px] lato-thin font-medium text-white mt-[30px]">
                Scalability and <br />
                Growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
