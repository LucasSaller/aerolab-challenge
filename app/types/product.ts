export interface Product {
  _id: string;
  name: string;
  cost: number;
  img: {
    url: string;
    hdUrl: string;
  };
  category: string;
}
