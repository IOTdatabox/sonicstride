"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const router = useRouter();

  const faqClick = () => {
    const faq = document.getElementById("faq");
    if (!faq) {
      router.push("/#faq");
    } else {
      router.push("#faq");
    }
  };
  const testimonialsClick = () => {
    const testimonial = document.getElementById("testimonial");
    if (!testimonial) {
      router.push("/#testimonial");
    } else {
      router.push("#testimonial");
    }
  };
  const caseStudiesClick = () => {
    const caseStudies = document.getElementById("caseStudies");
    if (!caseStudies) {
      router.push("/#caseStudies");
    } else {
      router.push("#caseStudies");
    }
  };

  const freeConsultationClick = () => {
    const freeConsultation = document.getElementById("freeConsultation");
    if (!freeConsultation) {
      router.push("/contact#freeConsultation");
    } else {
      router.push("#freeConsultation");
    }
  };

  return (
    <div className="bg-[url('/img/home/dark-gradient.jpg')] md:bg-[url('/img/home/dark-gradient.jpg')] bg-cover bg-no-repeat">
      <div className="container mx-auto  pt-[70px] px-5 lg:px-10 xl:px-[63px] max-w-[1440px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[5%] lg:gap-[6%] 2xl:gap-[10%]">
          <div className="pb-[37px] lg:pb-0">
            <Link href={"/"} className="flex items-center justify-center gap-2">
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
          </div>

          <div className="lg:hidden"></div>

          <div className="flex flex-col gap-[30px]">
            <div>
              <h4 className="text-[18px] leading-[26px] text-dodgerBlue font-bold futura-bold">
                Address
              </h4>
              <ul className="text-lightGrey lato-thin text-[16px] leading-[24px]">
                <li className="mt-2">
                  <span>No.26, Ln. 218, Sec. 5, Roosevelt Rd., Wenshan Dist.,</span> <br />
                  <span>Taipei City, Taiwan, 116 </span> <br />
                </li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <h4 className="text-[18px] leading-[26px] text-dodgerBlue font-bold futura-bold">
                Email us now
              </h4>
              <ul className="text-lightGrey lato-thin text-[16px] md:text-[17px] lg:text-[16px] leading-[24px]">
                <li className="mt-1">
                  <a
                    href="mailto:jasmineow13@gmail.com"
                    className="hover:text-primaryBlue hover:underline"
                  >
                    jasmineow13@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="block lg:hidden">
            <h4 className="text-[18px] leading-[26px] text-[#00B2FF] font-bold futura-bold">
              Email us now
            </h4>
            <ul className="text-lightGrey lato-thin text-[16px] md:text-[17px] lg:text-[16px] leading-[24px]">
              <li className="mt-1">
                <a
                  href="mailto:jasmineow13@gmail.com"
                  className="hover:text-primaryBlue hover:underline"
                >
                  jasmineow13@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-[40px] lg:mt-0">
            <ul className="flex flex-col text-lightGrey text-[16px] lg:text-[17px] leading-[25px] gap-[13px] cursor-pointer">
              <li className="hover:text-primaryBlue">
                <Link href={"/"} aria-label="redirect to about page">
                  ABOUT US
                </Link>
              </li>
              <li
                onClick={freeConsultationClick}
                className="cursor-pointer hover:text-primaryBlue"
              >
                <a aria-label="redirect to consultation form">
                  CONTACT US
                </a>
              </li>
              <li className="hover:text-primaryBlue">
                <Link href={"/"} aria-label="redirect to home page">
                  BLOG
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-[40px] lg:mt-0">
            <ul className="flex flex-col text-lightGrey text-[16px] lg:text-[17px] leading-[25px] gap-[13px] cursor-pointer">
              <li onClick={faqClick} className="hover:text-primaryBlue">
                <a aria-label="scroll to faq section">FAQS</a>
              </li>
              <li
                onClick={testimonialsClick}
                className="hover:text-primaryBlue"
              >
                <a aria-label="scroll to testimonial section">TESTIMONIALS</a>
              </li>
              <li onClick={caseStudiesClick} className="hover:text-primaryBlue">
                <a aria-label="scroll to case study section">CASE STUDIES</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 md:mt-24 lg:mt-10">
          <div className="border-t border-[#ffffff33]"></div>
        </div>
        <div className="flex flex-col justify-center py-10 lg:flex-row lg:justify-between lg:py-5 text-lightGrey">
          <div className="max-lg:text-center">
            <p className="m-0 text-[16px]">
              © 2024 Sonicstride. All rights reserved.
            </p>
          </div>
          <div className="lg:flex items-center gap-[35px] py-3 lg:py-0">
            <ul className="text-[16px] flex items-center justify-center lg:justify-start gap-[20px]">
              <li className="hover:text-primaryBlue">
                <Link
                  href="/privacy-policy"
                  aria-label="redirect to privacy policy page"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="hover:text-primaryBlue">
                <Link
                  href="/terms-and-conditions"
                  aria-label="redirect to terms and conditions page"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li className="hover:text-primaryBlue">
                <Link
                  href="/cookie-policy"
                  aria-label="redirect to cookie policy page"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>

            <div className="justify-center lg:justify-start flex items-center gap-[14px] pt-4 lg:pt-0">
              <Link
                href="https://www.linkedin.com/company/sonicstride"
                target="_blank"
                aria-label="redirect to linkedin profile"
              >
                <img
                  src="/img/linkedin.svg"
                  alt="Linkedin"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
