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
  includes: Includes[];
  gallery: Gallery;
  others: Other[];
};

export type Other = {
  slug: string;
  name: string;
  image: Image;
  link: string;
};

export type Gallery = {
  first: Image;
  second: Image;
  third: Image;
};

export type Includes = {
  quantity: number;
  item: string;
};

export type Image = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type MainProduct = {
  id: number;
  name: string;
  image: Image;
  isNew: boolean;
  price: number;
  description: string;
};
