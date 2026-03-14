export type Product = {
  id: string;
  name: string;
  brand: string;
  model?: string;
  image: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  storage?: string;
  color?: string;
  specs?: { label: string; value: string }[];
};
