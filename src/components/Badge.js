import Image from "next/image";
import React from "react";

const Badge = ({ text, bgColor, textColor, src, font }) => {
  return (
    <div
      className={`${bgColor} backdrop-blur-[2px] px-3 py-[5px] sm:py-[3px] inline-flex items-center gap-[6px] rounded-[150px] overflow-visible`}
    >
      <Image
        src={src}
        alt="cloud"
        width={24}
        height={16}
        className="cloud-svg"
      />
      <p
        className={`font-bold ${font} text-[10px] sm:text-[17px] leading-[12px] sm:leading-[20px] ${textColor} tracking-wide max-sm:mt-[2px]`}
      >
        {text}
      </p>
    </div>
  );
};

export default Badge;
