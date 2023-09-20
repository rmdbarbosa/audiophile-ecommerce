import React from "react";

type ButtonProps = {
  bgColor: string;
  textColor: string;
  hover: string;
};

export default function Button({ bgColor, textColor, hover }: ButtonProps) {
  return (
    <button
      className={`hover:bg-${hover} ${bgColor} text-${textColor} min-w-[160px] min-h-[48px] flex items-center justify-center`}
    >
      SEE PRODUCT
    </button>
  );
}
