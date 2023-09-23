import Link from "next/link";
import React from "react";

type ButtonProps = {
  bgColor: string;
  textColor: string;
  hover: string;
  border?: string;
  textBold?: string;
  textColorHover?: string;
  link: string;
  slug: string;
};

export default function Button({
  bgColor,
  textColor,
  hover,
  border,
  textBold,
  textColorHover,
  link,
  slug,
}: ButtonProps) {
  return (
    <Link href={`/${slug}/${link}`}>
      <button
        className={`${hover} ${bgColor} ${textColor} ${border} ${textBold} ${textColorHover} lg:z-30 min-w-[160px] min-h-[48px] text-sm flex items-center justify-center tracking-widest`}
      >
        SEE PRODUCT
      </button>
    </Link>
  );
}
