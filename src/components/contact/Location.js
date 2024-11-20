import Image from "next/image";
import Link from "next/link";
import React from "react";
import Badge from "../Badge";

const Location = () => {
  return (
    <div className="w-full bg-white">
      <div className="container max-w-[1440px] px-5 py-[40px] sm:py-[100px] mx-auto lg:px-10 xl:px-[63px]">
        <div className="flex flex-col items-center justify-center mb-[50px]">
          <div className="mb-[10px]">
            <Badge
              text="LETS TALK"
              bgColor="bg-morningMist"
              textColor="text-primaryColor"
              src="/img/home/cloud-black.svg"
              font="futura-boldLT"
            />
          </div>
          <h1 className="futura-bold font-bold text-primaryColor text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[40px] lg:leading-[46px] mb-[15px] lg:mb-[20px]">
            Location
          </h1>
          <p className="font-normal lato-font text-[13px] sm:text-[18px] lg:text-[20px] leading-[19px] sm:leading-[28px] lg:leading-[30px] text-secondaryColor">
            Discover our office locations and their hours of operation.
          </p>
        </div>
        <div className="px-0 lg:px-[150px] xl:px-[208px]">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="order-2 sm:order-1 p-[22.22px] sm:p-[25px] xl:p-[30px] max-sm:rounded-b-[8px] sm:rounded-s-[16px] bg-lightBlue flex flex-col justify-between max-sm:h-[308px]">
              {/* <h3 className="futura-medium-bt text-primaryColor font-medium text-[20px] sm:text-[26px] xl:text-[28px] leading-[28px] sm:leading-[36px] xl:leading-[38px] mb-[12px] sm:mb-[14px] xl:mb-[16px]">
                UK
              </h3> */}
              <p className="flex flex-col text-[13px] sm:text-[16px] xl:text-[18px] leading-[21px] sm:leading-[26px] xl:leading-[28px] lato-font text-secondaryColor">
                <span>14 Egremont Avenue,</span>
                <span> Manchester, United Kingdom,</span>
                <span>M20 1GS</span>
              </p>
              <div>
                <Link
                  href="https://maps.app.goo.gl/QLLYMCbYNaH4Bi7q9"
                  target="_blank"
                  className="w-full bg-primaryPink hover:bg-secondaryPink transition-button rounded-[160px] py-[9px] px-[22px] sm:px-[30px] text-white text-[11px] sm:text-[14px] leading-[17px] sm:leading-[24px] futura-bold font-bold tracking-wide flex gap-[10px] items-center justify-center"
                  aria-label="open direction for provided location"
                >
                  <span>GET DIRECTIONS</span>{" "}
                  <Image
                    src="/img/contact/right-arrow.svg"
                    alt="right arrow"
                    width={14}
                    height={14}
                    loading="lazy"
                    className="w-[10px] sm:w-[14px] h-[10px] sm:h-[14px]"
                  />
                </Link>
              </div>
            </div>
            <div className="order-1 sm:order-2 w-full h-[288px] sm:h-full max-sm:rounded-t-[8px] sm:rounded-e-[16px]">
              <div className="w-full h-full overflow-hidden max-sm:rounded-t-[8px] sm:rounded-e-[16px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.779642657244!2d-2.239929122927775!3d53.43664816796248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb215056eb98d%3A0xca1cf079bf0a58a2!2s14%20Egremont%20Ave%2C%20Withington%2C%20Manchester%20M20%201GS%2C%20UK!5e0!3m2!1sen!2sin!4v1728878717597!5m2!1sen!2sin"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
