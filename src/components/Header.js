"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();

  const testimonialsClick = () => {
    const testimonials = document.getElementById("testimonials");
    if (!testimonials) {
      router.push("/#testimonials");
    } else {
      router.push("#testimonials");
      setMenuOpen(false);
    }
  };

  const faqClick = () => {
    const faq = document.getElementById("faq");
    if (!faq) {
      router.push("/#faq");
    } else {
      router.push("#faq");
      setMenuOpen(false);
    }
  };
  const freeConsultationClick = () => {
    const freeConsultation = document.getElementById("freeConsultation");
    if (!freeConsultation) {
      router.push("/contact#freeConsultation");
    } else {
      router.push("#freeConsultation");
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <div className="relative">
      {/* {/ Header /} */}
      <div className="container max-w-[1440px] px-5 pb-[48px] pt-[40px] mx-auto lg:px-10 xl:px-[63px]">
        <div className="flex items-center justify-between">
          <Link href={"/"} aria-label="redirect to home page" className="flex items-center justify-center gap-2">
            <Image
              src={"/img/home/main-logo.svg"}
              alt="logo"
              width={130}
              height={20}
              loading="lazy"
              className="w-[24px] lg:w-[36px] h-[32px] lg:h-[48px] filter invert"
            />
            <span className="block text-4xl text-white">Sonicstride</span>
          </Link>

          {/* {/ Mobile Menu Button /} */}
          <button
            onClick={toggleMenu}
            className="block lg:hidden"
            aria-label="collapse menu button"
          >
            <Image
              src={"/img/home/menubtn.svg"}
              alt="menubtn"
              width={24}
              height={24}
              loading="lazy"
              className="w-[24px] h-[24px]"
            />
          </button>

          {/* {/ Desktop Menu /} */}
          <div className="hidden lg:flex pl-[140px]">
            <ul className="flex items-center gap-3 xl:gap-8">
              {/* <li className="futura-font text-[18px] xl:text-[20px] font-medium text-black leading-[26px] hover:text-primaryBlue">
                <Link href={"/about"} aria-label="redirect to about page">
                  ABOUT US
                </Link>
              </li> */}
              <li className="relative group">
                <Link
                  href={"#"}
                  aria-label="no redirection"
                  className="futura-font text-[18px] xl:text-[20px] text-white font-medium leading-[26px] hover:text-primaryBlue"
                >
                  CASE STUDIES
                </Link>
                <div className="hidden group-hover:!block z-50 left-0 top-[100%] w-[254px] rounded-md absolute pt-2">
                  <div className="bg-[#152339b3] text-white rounded-md shadow-lg">
                    <ul className="p-2">
                      <li>
                        <Link
                          href={"/vaioni-group"}
                          className="block hover:bg-[#00b2ffb3] p-2 rounded"
                          aria-label="redirect to vaioni-group page"
                        >
                          Vaioni Group
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/shoppertainment-management"}
                          className="block p-2 rounded hover:bg-primaryBlue"
                          aria-label="redirect to shoppertainment page"
                        >
                          Shoppertainment Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/sbfm"}
                          className="block hover:bg-[#00b2ffb3] p-2 rounded"
                          aria-label="redirect to sbfm page"
                        >
                          SBFM
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="futura-font text-[18px] xl:text-[20px] font-medium text-white leading-[26px] hover:text-primaryBlue">
                <a
                  onClick={testimonialsClick}
                  className="w-full cursor-pointer"
                  aria-label="redirect to testimonials section"
                >
                  TESTIMONIALS
                </a>
              </li>
              <li className="futura-font text-[18px] xl:text-[20px] font-medium text-white leading-[26px] hover:text-primaryBlue">
                <a
                  onClick={faqClick}
                  className="cursor-pointer"
                  aria-label="redirect to faq section"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* {/ Desktop Schedule Button /} */}
          <div className="hidden lg:block">
            <a
              className="bg-primaryPink hover:bg-secondaryPink transition-button px-[24px] py-[16px] rounded-[160px] text-[18px] text-white font-bold leading-[24px] futura-bold cursor-pointer"
              onClick={freeConsultationClick}
              aria-label="redirect to consultation form"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      {/* {/ Full-Screen Mobile Menu /} */}
      <div
        className={`fixed top-0 left-0 w-full h-auto bg-midNight z-50 transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden py-[75px]`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="absolute top-5 flex items-center justify-between w-full px-[50px]">
            <Link href={"/"} aria-label="redirect to home page">
              <Image
                src={"/img/home/main-logo.svg"}
                alt="logo"
                width={130}
                height={20}
                loading="lazy"
                className="w-[125px] h-[20px] filter invert"
              />
            </Link>
            {/* {/ Close Button /} */}
            <button
              onClick={toggleMenu}
              className="text-white"
              aria-label="close button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* {/ Menu Links /} */}
          <ul className="flex flex-col items-center w-full space-y-6">
            {/* <li className="text-[18px] font-medium text-white text-center hover:text-primaryBlue">
              <Link
                href={"/about"}
                className="w-full"
                aria-label="redirect to about page"
              >
                ABOUT US
              </Link>
            </li> */}
            <li className="flex flex-col justify-center w-full group">
              <Link
                href="#"
                className="text-[18px] font-medium text-white text-center hover:text-primaryBlue"
              >
                CASE STUDIES
              </Link>
              <ul className="hidden group-hover:!block bg-[#152339b3] w-full mt-2">
                <li className="text-[16px] leading-[26px] font-medium text-white text-center pt-[12px] hover:text-primaryBlue">
                  <Link
                    href={"/vaioni-group"}
                    aria-label="redirect to vaioni-group page"
                  >
                    Vaioni Group
                  </Link>
                </li>
                <li className="text-[16px] leading-[26px] font-medium text-white text-center pt-[12px] hover:text-primaryBlue">
                  <Link
                    href={"/shoppertainment-management"}
                    aria-label="redirect to shoppertainment page"
                  >
                    Shoppertainment Management
                  </Link>
                </li>
                <li className="text-[16px] leading-[26px] font-medium text-white text-center py-[12px] hover:text-primaryBlue">
                  <Link href={"/sbfm"} aria-label="redirect to sbfm page">
                    SBFM
                  </Link>
                </li>
              </ul>
            </li>
            <li className="text-[18px] font-medium text-white text-center hover:text-primaryBlue">
              <a
                onClick={testimonialsClick}
                className="w-full cursor-pointer"
                aria-label="redirect to testimonials section"
              >
                TESTIMONIALS
              </a>
            </li>
            <li className="text-[18px] font-medium text-white text-center hover:text-primaryBlue">
              <a
                onClick={faqClick}
                className="w-full cursor-pointer"
                aria-label="redirect to faq section"
              >
                FAQ
              </a>
            </li>
          </ul>

          {/* {/ Mobile Schedule Button /} */}
          <div className="mt-5">
            <a
              className="bg-primaryPink hover:bg-secondaryPink transition-button px-[24px] py-[16px] rounded-[160px] text-[18px] text-white font-bold leading-[24px] futura-bold cursor-pointer"
              onClick={freeConsultationClick}
              aria-label="redirect to consultation form"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
