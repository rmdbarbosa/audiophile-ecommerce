import React from "react";

type NewProductProps = {
  textColor: string;
};

export default function NewProduct({ textColor }: NewProductProps) {
  return (
    <h2 className={`${textColor} opacity-60 uppercase tracking-[.55em]`}>
      New product
    </h2>
  );
}
