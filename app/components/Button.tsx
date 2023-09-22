import React from "react";

type ButtonProps = {
  bgColor: string;
  textColor: string;
  hover: string;
  border?: string;
  textBold?: string;
  textColorHover?: string;
};

export default function Button({
  bgColor,
  textColor,
  hover,
  border,
  textBold,
  textColorHover,
}: ButtonProps) {
  return (
    <button
      className={`${hover} ${bgColor} ${textColor} ${border} ${textBold} ${textColorHover} lg:z-30 min-w-[160px] min-h-[48px] flex items-center justify-center`}
    >
      SEE PRODUCT
    </button>
  );
}
