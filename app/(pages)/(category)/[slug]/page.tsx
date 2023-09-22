import React from "react";

const categories = ["headphones", "speakers", "earphones"];

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category,
  }));
}

export const dynamicParams = false; // true | false,

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  );
}
