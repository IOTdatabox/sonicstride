import React from "react";

const TipsUpdate = () => {
  return (
    <div className=" max-md:bg-right bg-[url('/img/home/subscribe-background.jpg')] md:bg-[url('/img/home/subscribe-background.jpg')] bg-cover bg-no-repeat">
      <div className="container px-5 mx-auto py-[97px] lg:px-10 xl:px-[63px] max-w-[1440px]">
        <div className="text-center">
          <h1 className="text-[30px] md:text-[48px] leading-[58px] text-center kanit-bold text-white font-bold mb-[10px]">
          Subscribe to get updates
          </h1>
          <p className="text-white text-[20px] leading-[23px] md:leading-[30px] mb-[30px] lato-thin text-center font-normal">
            Subscribe to get the latest news, updates, new features, and product releases. Don&apos;t miss out on the future of event communication and safety – subscribe now!
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-[10px] justify-center mb-[10px]">
            <input
              type="text"
              className="w-full md:w-[57%] lg:w-[44%] xl:w-[31%] py-[12px] px-[20px] rounded-full outline-none"
              placeholder="Enter email address"
            />
            <button
              className="bg-primaryColor text-[16px] leading-[26px] futura-bold hover:bg-[#0f1929] transition-button font-bold rounded-[160px] text-white max-sm:w-full px-[30px] py-[14px]"
              aria-label="subscribe button"
            >
              SUBSCRIBE
            </button>
          </div>
          <p className="text-white text-[13px] sm:text-[12px] leading-[19px] sm:leading-[150%] text-center font-normal ">
            By clicking Sign Up, you agree to our Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TipsUpdate;
