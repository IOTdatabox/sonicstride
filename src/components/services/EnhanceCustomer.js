import Image from "next/image";
import React from "react";

const EnhanceCustomer = () => {
  const EnhanceItem = ({ src, title, content, content1 }) => (
    <div className="rounded-[16px]">
      <div className="max-lg:flex max-lg:justify-center overflow-hidden rounded-[16px]">
        <Image
          src={src}
          alt="Enhance Customer"
          width={417}
          height={246}
          className="transition-transform duration-300 ease-out hover:scale-110 cursor-pointer rounded-[16px] w-full h-auto"
          loading="lazy"
        />
      </div>
      <h3 className="max-lg:text-center text-[23px] md:text-[28px] leading-[38px] font-bold text-white mb-[10px] lg:mb-[8px] xl:mb-[10px] pt-5 futura-bold">
        {title}
      </h3>
      <p className="max-lg:text-center lato-font text-[17px] leading-[28px] font-normal text-lightGrey pb-4">
        {content}
      </p>
      <p className="max-lg:text-center lato-font text-[17px] leading-[28px] font-normal text-lightGrey">
        {content1}
      </p>
    </div>
  );
  return (
    <div className="bg-secondaryColor">
      <div className="container max-w-[1440px] px-5 py-[50px] sm:py-[100px] mx-auto lg:px-10 xl:px-[63px]">
        <div className="text-center text-white font-bold futura-font lg:px-[20%]">
          <h2 className="text-[21px] md:text-[30px] lg:text-[36px] leading-[33px] md:leading-[46px]">
            Enhance Customer Interaction and Build Stronger Connections
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-[30px] sm:mt-[50px] gap-[50px]">
          <EnhanceItem
            src="/img/services/e-1.svg"
            title="Optimizing Your CRM Sales Strategy"
            content={
              "At Sailwayz, our tailored Salesforce CRM consulting services are designed to enhance sales strategies and foster business growth."
            }
            content1={
              "Our seasoned professionals collaborate closely with you to grasp your business's distinct needs and implement Salesforce solutions customized to meet those needs. Whether it's CRM customization, data transfer, or training users, our expertise ensures success."
            }
          />

          <EnhanceItem
            src="/img/services/e-2.svg"
            title="Revolutionize Your Sales Tactics"
            content={
              "Efficient workflows are the backbone of any thriving business. Sailwayz excels in refining operations with Salesforce CRM."
            }
            content1={
              "By automating routine tasks and refining processes, our consultants help you harness Salesforce’s capabilities to elevate efficiency and productivity across your enterprise. Allow us to help you unlock Salesforce's full potential and advance your operations."
            }
          />

          <EnhanceItem
            src="/img/services/e-3.svg"
            title="Simplify Your Workflows Boost Customer Interaction"
            content={
              "In today’s competitive market, delivering outstanding customer experiences is vital. Sailwayz' Salesforce CRM consulting services enable you to enhance customer interaction and build enduring connections."
            }
            content1={
              "Our team guides you in deploying customer-focused strategies, utilizing Salesforce’s robust tools for tailored marketing, effortless communication, and superior customer service. Elevate your customer engagement to unprecedented levels with Sailwayz."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EnhanceCustomer;
