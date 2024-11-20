import Badge from "@/components/Badge";
import Image from "next/image";
import React from "react";

const Results = () => {
  return (
    <div className="w-full bg-[url('/img/case/results-bg-small.svg')] sm:bg-[url('/img/case/results-bg.svg')] bg-cover bg-no-repeat bg-[0%_12%] sm:bg-center xl:bg-[0%_0%]">
      <div className="container max-w-[1440px] px-5 mx-auto py-[32px] sm:py-[50px] lg:py-[100px] lg:px-10 xl:px-[63px]">
        <div className="w-full sm:w-[420px] xl:w-[529px] h-auto ml-2 sm:ml-auto">
          <div className="mb-[10px]">
            <Badge
              text="RESULTS"
              src="/img/home/cloud-white.svg"
              bgColor="bg-secondaryColor"
              textColor="text-lightGrey"
              font="futura-bold"
            />
          </div>
          <h2 className="futura-bold font-bold text-[20px] sm:text-[32px] lg:text-[36px] leading-[28px] sm:leading-[40px] lg:leading-[46px] text-white mb-[10px]">
            Results
          </h2>
          <p className="text-[13px] sm:text-[20px] leading-[19px] sm:leading-[30px] lato-thin font-normal text-white">
            The directors and team were more confident and comfortable using
            Salesforce especially the task features which helps them manage
            their day-to-day reminders. This resulted in keeping to the business
            processes which in turn helps them increase revenue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
