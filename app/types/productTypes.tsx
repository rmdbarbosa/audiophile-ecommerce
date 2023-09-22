export type Product = {
  id: number;
  slug: string;
  name: string;
  image: Image;
  category: string;
  categoryImage: Image;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Include[];
  gallery: Gallery;
  others: Other[];
};

export type Other = {
  slug: string;
  name: string;
  image: Image;
};

export type Gallery = {
  first: Image;
  second: Image;
  third: Image;
};

export type Include = {
  quantity: number;
  item: string;
};

export type Image = {
  mobile: string;
  tablet: string;
  desktop: string;
};
