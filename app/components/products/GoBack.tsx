"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function GoBack() {
  const router = useRouter();
  return (
    <span
      onClick={() => router.back()}
      className="normal-case flex max-w-max  mb-6 text-sm text-gray-500 hover:cursor-pointer hover:text-orange-300 duration-200"
    >
      Go back
    </span>
  );
}
