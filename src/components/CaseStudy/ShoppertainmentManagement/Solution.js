"use client";
import Badge from "@/components/Badge";
import Image from "next/image";
import React from "react";

const Solution = () => {
  return (
    <div className="w-full bg-[url('/img/case/solution-2-small.svg')] sm:bg-[url('/img/case/solution-2.svg')] bg-cover bg-no-repeat bg-[0%_0%] sm:bg-center lg:bg-[0%_0%]">
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
          <div className="bg-dullGrey w-full h-[1px] my-[40px]"></div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mb-[40px]">
              <div>
                <p className="text-[15px] xl:text-[16px] leading-[26px] text-dullGrey futura-font font-medium">
                  Understood their business process and to use salesforce to
                  help their process
                </p>
              </div>
              <div>
                <p className="text-[15px] xl:text-[16px] leading-[26px] text-dullGrey futura-font font-medium">
                  Introduce some best practices to help shoppertainment
                  management employees to easily use their salesforce
                  environment.
                </p>
              </div>
              <div>
                <p className="text-[15px] xl:text-[16px] leading-[26px] text-dullGrey futura-font font-medium">
                  Introduce some best practices to help shoppertainment
                  management employees to easily use their salesforce
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
