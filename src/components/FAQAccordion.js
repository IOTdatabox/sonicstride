"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

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
    <div className=" max-md:bg-right bg-[url('/img/home/light-gradient.jpg')] md:bg-[url('/img/home/light-gradient.jpg')] bg-cover bg-no-repeat">
      <div
        className="container px-5 py-[50px] sm:py-[100px] mx-auto lg:px-10 xl:px-[63px] max-w-[1440px] scroll-smooth"
        id="faq"
      >

        <div className="lg:flex w-full lg:gap-[4%]">
          <div className="w-full lg:w-[40%] max-lg:mb-[40px]">
            <h2 className=" futura-bold text-primaryColor text-[36px] leading-[46px] font-bold mb-[20px]">
              Frequently Asked Questions
            </h2>
            <p className="text-secondaryColor text-[18px] lato-font font-normal leading-[28px] mb-[32px]">
              Find answers to common queries about Sonicstride.
            </p>

            <a
              className="bg-primaryPink hover:bg-secondaryPink transition-button px-[20px] sm:px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full max-sm:block cursor-pointer"
              onClick={freeConsultationClick}
              aria-label="redirect to consultation form"
            >
              CONTACT US
            </a>
          </div>

          <div className="w-full lg:w-[60%]">
            <div className="border-b border-secondaryColor">
              <button
                className={`flex items-center justify-between w-full ${activeIndex === 1 ? "pb-0" : "pb-[15px] sm:pb-[25px]"
                  } focus:outline-none`}
                onClick={() => toggleAccordion(1)}
                aria-label="expand button 1"
              >
                <h4 className="text-primaryColor futura-bold font-bold text-[18px] sm:text-[22px] leading-[26px] sm:leading-[32px] accordian-text py-[15px]">
                  What is SonicsTride?
                </h4>
                <span>
                  {activeIndex === 1 ? (
                    <img src="/img/home/dash.svg" alt="dash" loading="lazy" />
                  ) : (
                    <img src="/img/home/plus.svg" alt="plus" loading="lazy" />
                  )}
                </span>
              </button>
              {activeIndex === 1 && (
                <div className="pb-[15px] sm:pb-[25px] text-secondaryColor text-[13px] sm:text-[20px] leading-[19px] sm:leading-[30px] lato-font">
                  <p className="mb-3">
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                  </p>
                </div>
              )}
            </div>
            <div className="border-b border-secondaryColor">
              <button
                className={`flex items-center justify-between w-full ${activeIndex === 2 ? "pb-0" : "pb-[15px] sm:pb-[25px]"
                  } pt-[15px] sm:pt-[25px] focus:outline-none`}
                onClick={() => toggleAccordion(2)}
                aria-label="expand button 2"
              >
                <h4 className="text-primaryColor futura-bold font-bold text-[18px] sm:text-[22px] leading-[26px] sm:leading-[32px] accordian-text py-[15px]">
                  Is Sonicstride free to use?
                </h4>
                <span>
                  {activeIndex === 2 ? (
                    <img src="/img/home/dash.svg" alt="dash" loading="lazy" />
                  ) : (
                    <img src="/img/home/plus.svg" alt="plus" loading="lazy" />
                  )}
                </span>
              </button>
              {activeIndex === 2 && (
                <div className="pb-[15px] sm:pb-[25px] text-secondaryColor text-[13px] sm:text-[20px] leading-[19px] sm:leading-[30px] lato-font">
                  Yes, Sonicstride offers a free plan with basic features. We also have Pro and Premium plans with additional benefits for a monthly fee.
                </div>
              )}
            </div>
            <div className="border-b border-secondaryColor">
              <button
                className={`flex items-center justify-between w-full ${activeIndex === 3 ? "pb-0" : "pb-[15px] sm:pb-[25px]"
                  } pt-[15px] sm:pt-[25px] focus:outline-none`}
                onClick={() => toggleAccordion(3)}
                aria-label="expand button 3"
              >
                <h4 className="text-primaryColor futura-bold font-bold text-[18px] sm:text-[22px] leading-[26px] sm:leading-[32px] accordian-text py-[15px]">
                  What devices support the SonicsTride app?
                </h4>
                <span>
                  {activeIndex === 3 ? (
                    <img src="/img/home/dash.svg" alt="dash" loading="lazy" />
                  ) : (
                    <img src="/img/home/plus.svg" alt="plus" loading="lazy" />
                  )}
                </span>
              </button>
              {activeIndex === 3 && (
                <div className="pb-[15px] sm:pb-[25px] text-secondaryColor text-[13px] sm:text-[20px] leading-[19px] sm:leading-[30px] lato-font">
                  Calm is available on iOS, Android, Web, in addition to Apple TV, Apple Watch, Amazon Alexa, Google Home, Google WearOS, Samsung Health, Samsung TV and Sonos.
                </div>
              )}
            </div>
            <div className="border-b border-secondaryColor">
              <button
                className={`flex items-center justify-between w-full ${activeIndex === 4 ? "pb-0" : "pb-[15px] sm:pb-[25px]"
                  } pt-[15px] sm:pt-[25px] focus:outline-none`}
                onClick={() => toggleAccordion(4)}
                aria-label="expand button 4"
              >
                <h4 className="text-primaryColor futura-bold font-bold text-[18px] sm:text-[22px] leading-[26px] sm:leading-[32px] accordian-text py-[15px]">
                  How do I download music from SonicsTride?
                </h4>
                <span>
                  {activeIndex === 4 ? (
                    <img src="/img/home/dash.svg" alt="dash" loading="lazy" />
                  ) : (
                    <img src="/img/home/plus.svg" alt="plus" loading="lazy" />
                  )}
                </span>
              </button>
              {activeIndex === 4 && (
                <div className="pb-[15px] sm:pb-[25px] text-secondaryColor text-[13px] sm:text-[20px] leading-[19px] sm:leading-[30px] lato-font">
                  <p className="mb-3">
                    You cannot download music from SonicsTride.
                  </p>
                </div>
              )}
            </div>
            <div>
              <button
                className={`flex items-center justify-between w-full ${activeIndex === 5 ? "pb-0" : "pb-[15px] sm:pb-[25px]"
                  } pt-[15px] sm:pt-[25px] focus:outline-none`}
                onClick={() => toggleAccordion(5)}
                aria-label="expand button 5"
              >
                <h4 className="text-primaryColor futura-bold font-bold text-[18px] sm:text-[22px] leading-[26px] sm:leading-[32px] accordian-text py-[15px]">
                  What is Body Driven Music™?
                </h4>
                <span>
                  {activeIndex === 5 ? (
                    <img src="/img/home/dash.svg" alt="dash" loading="lazy" />
                  ) : (
                    <img src="/img/home/plus.svg" alt="plus" loading="lazy" />
                  )}
                </span>
              </button>
              {activeIndex === 5 && (
                <div className="pb-[15px] sm:pb-[25px] text-secondaryColor text-[13px] sm:text-[20px] leading-[19px] sm:leading-[30px] lato-font">
                  Body Driven Music™ automatically personalizes the music to your body based on what you are experiencing. We currently have 3 modes of Body Driven Music™ available in the RockMyRun app.

                  <p>STEPS: Matches the music to your steps in real time</p>
                  <p>SET BPM: Allows you to set the beats per minute (BPM) of the music to an exact, desired cadence</p>
                  <p>HEART: Matches the music to your heart rate.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
