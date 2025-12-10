// global.d.ts
// declare global {
//     interface Window {
//         myCustomProperty: string;
//     }
// }

interface productDataType {
    _id: string;
    productName: string;
    price: number;
    discountPrice: number;
    shortDescription: string;
    longDescription: string;
    ratings: number;
    reviews: {
      name: string;
      ratings: number;
      comment: string;
      date: string;
      _id: string;
    }[];
    colors: string[];
    sizes: string[];
    inStock: boolean;
    category: string[];
    imageUrl: string;
    variations: { imageUrl: string; productId: string }[];
    __v: number;
  }
  