import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Category {
  name: string;
  checked: boolean;
  subOptions?: Category[];
}

interface CategoriesState {
  productCategories: Category[];
}

const initialState: CategoriesState = {
  productCategories: [
    {
      name: "Men",
      checked: true,
      subOptions: [
        {
          name: "Tops",
          checked: true
        },
        {
          name: "Bottoms",
          checked: true
        },
        // {
        //   name: "Ethnic Wear",
        //   checked: true,
        //   subOptions: [
        //     {
        //       name: "Kurtas",
        //       checked: true
        //     },
        //     {
        //       name: "Sherwanis",
        //       checked: true
        //     }
        //   ]
        // },
        {
          name: "Kurtas",
          checked: true
        },
        {
          name: "Sherwanis",
          checked: true
        }
      ]
    },
    {
      name: "Women",
      checked: true,
      subOptions: [
        // {
        //   name: "Western Wear",
        //   checked: true,
        //   subOptions: [
        //     { name: "Dresses", checked: true },
        //     { name: "Tops", checked: true },
        //     { name: "Skirts", checked: true },
        //     { name: "Jumpsuits", checked: true },
        //     { name: "Jeans", checked: true }
        //   ]
        // },
        { name: "Dresses", checked: true },
        { name: "Tops", checked: true },
        { name: "Skirts", checked: true },
        // { name: "Jumpsuits", checked: true },
        { name: "Jeans", checked: true },
        // {
        //   name: "Ethnic Wear",
        //   checked: true,
        //   subOptions: [
        //     { name: "Sarees", checked: true },
        //     { name: "Kurtas & Suits", checked: true },
        //     { name: "Lehenga Cholis", checked: true }
        //   ]
        // }
        { name: "Sarees", checked: true },
        { name: "Kurtas & Suits", checked: true },
        { name: "Lehenga Cholis", checked: true }
      ]
    },
    {
      name: "Kids",
      checked: true
      // subOptions: [
      //   {
      //     name: "Boys",
      //     checked: true,
      //     // subOptions: [
      //     //   { name: "T-Shirts", checked: true },
      //     //   { name: "Shirts", checked: true },
      //     //   { name: "Jeans", checked: true }
      //     // ]
      //   },
      //   {
      //     name: "Girls",
      //     checked: true,
      //     // subOptions: [
      //     //   { name: "Dresses", checked: true },
      //     //   { name: "Skirts", checked: true },
      //     //   { name: "Tops", checked: true }
      //     // ]
      //   }
      // ]
    },
    {
      name: "Bags",
      checked: true
    },
    {
      name: "Belts",
      checked: true
    },
    {
      name: "Wallets",
      checked: true
    },
    {
      name: "Watches",
      checked: true
    },
    {
      name: "Accessories",
      checked: true
    },
    {
      name: "Winter Wear",
      checked: true
    }
  ]
};

const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<Category[]>) {
      state.productCategories = action.payload;
    },
    toggleCategory(
      state,
      action: PayloadAction<{ optionName: string; newValue: boolean }>
    ) {
      let exString;
      console.log("state", current(state).productCategories);
      console.log("action", action);
      // カテゴリの切り替えロジック

      // const newProductCategories = current(state).productCategories.map(
      //   (category: Category) => {
      //     if (category.subOptions) {
      //       const newsubOptions = category.subOptions.map((subOpt) => {
      //         if (subOpt.name === action.payload.optionName) {
      //           return { ...subOpt, checked: action.payload.newValue };
      //         } else {
      //           return subOpt;
      //         }
      //       });

      //       return { ...category, subOptions: newsubOptions };
      //     } else {
      //       return category;
      //     }
      //   }
      // );

      // console.log("newProductCategories");
      // console.log(newProductCategories);

      // state.productCategories = newProductCategories;
    }
  }
});

export const { setCategories, toggleCategory } = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
