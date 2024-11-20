"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import Badge from "./Badge";

const caseStudies = [
  {
    title: "Case Study 1 Title",
    content:
      "Here is the short description of Case Study 1",
  },
  {
    title: "Case Study 2 Title",
    content:
      "Here is the short description of Case Study 2",
  },
  {
    title: "Case Study 3 Title",
    content:
      "Here is the short description of Case Study 3",
  },
];

const CaseStudiesMobile = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    customPaging: function (i) {
      return (
        <div
          className={`h-[2px] w-[20px] ${i === this.currentSlide ? "bg-white" : "bg-gray-600"
            }`}
        />
      );
    },
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
    <div className=" block sm:hidden bg-[url('/img/home/light-gradient.jpg')] md:bg-[url('/img/home/light-gradient.jpg')] bg-cover bg-no-repeat" id="caseStudies">
      <div className="mb-[10px]">
        <Badge
          text="CASE STUDIES"
          bgColor="bg-secondaryColor"
          textColor="text-lightGrey"
          src="/img/home/cloud-white.svg"
          font="futura-bold"
        />
      </div>
      <div className="relative casestudy-slider mb-[30px] mx-[10px]">
        <Slider {...settings}>
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="outline-none">
              <h1 className="futura-bold font-bold text-[24px] leading-[32px] text-white mb-[10px]">
                {caseStudy.title}
              </h1>
              <p className="lato-thin text-[13px] leading-[19px] font-normal text-white mb-[30px]">
                {caseStudy.content}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      <a
        className="bg-primaryPink hover:bg-secondaryPink transition-button px-[20px] sm:px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full max-sm:block cursor-pointer"
        onClick={freeConsultationClick}
        aria-label="redirect to consultation form"
      >
        CONTACT US
      </a>
    </div>
  );
};

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:block absolute left-[-50px] md:left-[-30px] sm:left-[-20px] top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 bg-midNight"
    aria-label="previous button"
  >
    <Image
      src="/img/home/left.svg"
      alt="Previous"
      width={62}
      height={62}
      className="w-[62px] h-[62px]"
      loading="lazy"
    />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:block absolute right-[-50px] md:right-[-30px] sm:right-[-20px] top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 bg-midNight"
    aria-label="next button"
  >
    <Image
      src="/img/home/right.svg"
      alt="Next"
      width={62}
      height={62}
      className="w-[62px] h-[62px]"
      loading="lazy"
    />
  </button>
);

export default CaseStudiesMobile;
