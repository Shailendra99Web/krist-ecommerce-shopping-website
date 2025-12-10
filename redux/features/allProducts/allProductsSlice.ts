import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Review {
  name: string;
  ratings: number;
  comment: string;
  date: string; // ISO date string
  _id: string;
}

export interface Product {
  _id: string;
  productName: string;
  price: number;
  discountPrice: number;
  shortDescription: string;
  longDescription: string;
  ratings: number;
  reviews: Review[];
  colors: string[];
  sizes: string[];
  inStock: boolean;
  category: string[];
  imageUrl: string;
  __v: number;
}

interface AllProductsState {
  allProducts: Product[];
  apiQueryExcludeItemsByCategory: string | null;
}

const initialState: AllProductsState = {
  allProducts: [],
  apiQueryExcludeItemsByCategory: null // Like: men_tops
};

const AllProductSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    // To set all products array.
    reducerSetAllProducts(state, action: PayloadAction<Product[]>) {
      state.allProducts = action.payload;
    },
    // This will use wants to user filter products.
    // This reducer takes the category name and converts that to a specific pattern of string to send to MongoDB backend .
    reducerSetAllProductsWithExcludeItemsByCategoryString(
      state,
      action: PayloadAction<{ category: string; exclude: boolean }>
    ) {
      // if action.payload.category = men_tops then, main is 'men' and second is 'tops'.
      const isMainCategory = !action.payload.category.includes("_"); // if includes _ then e.g. men_tops else e.g. men

      // if state.apiQueryExcludeItemsByCategory is not null.
      if (state.apiQueryExcludeItemsByCategory) {
        // If category is like : "men/tops" then main is "men".
        if (isMainCategory && action.payload.exclude == false) {
          // If apiQueryExcludeItemsByCategory already has any exclude query e.g. men,women
          const apiQueryExcludeItemsByCategoryArray =
            state.apiQueryExcludeItemsByCategory.split(","); // e.g. ['men', 'women']
          let newApiQueryExcludeItemsByCategoryArray = [] as any[];
          // if (apiQueryExcludeItemsByCategoryArray.length > 0) {

          // e.g. if action.payload.category name is 'men' and subcategory query is = men_tops. Which means men sub category /sub categories already present in exclude query string of apiQueryExcludeItemsByCategoryArray.
          // So this will filter and remove all sub queries eg. men_tops, men_bottoms, etc.
          newApiQueryExcludeItemsByCategoryArray =
            apiQueryExcludeItemsByCategoryArray.filter((cat) => {
              let include;
              const catArray = cat.split("_");
              // if men is already present in apiQueryExcludeItemsByCategoryArray & if men_tops is query and catArray[0] is 'men'
              catArray[0] === action.payload.category
                ? (include = false)
                : (include = true);
              return include;
            });
          newApiQueryExcludeItemsByCategoryArray.push(action.payload.category); // Adding main category = men
          // }

          state.apiQueryExcludeItemsByCategory =
            newApiQueryExcludeItemsByCategoryArray.join(",");

          // }
          // else {
          //   // If no query is present in apiQueryExcludeItemsByCategory then simple this first one.
          //   state.apiQueryExcludeItemsByCategory = action.payload.category;
          // }
        } else {
          // if the action.payload.exclude doesn't include main category then this condition will execute.
          // if (state.apiQueryExcludeItemsByCategory) {

          // If the filter is to exclude specific products of particular categories.
          if (!action.payload.exclude) {
            const apiQueryExcludeItemsByCategoryArray =
              state.apiQueryExcludeItemsByCategory.split(","); // eg. men_tops, women_dresses => ["men_tops", "dresses_dresses"]

            // To check if user requested query is already present or not
            let alreadyExists;
            apiQueryExcludeItemsByCategoryArray.forEach((query) => {
              // action.payload.category = men_tops and one of the query is also men_tops
              if (action.payload.category === query) {
                alreadyExists = true;
              }
            });

            // If query not already exists.
            if (!alreadyExists) {
              // && state.apiQueryExcludeItemsByCategory?.length > 0) {
              // Append new query
              state.apiQueryExcludeItemsByCategory =
                state.apiQueryExcludeItemsByCategory +
                "," +
                action.payload.category;
            }
            //  else if (!alreadyExists) {
            //   state.apiQueryExcludeItemsByCategory = action.payload.category;
            // }
          } else {
            // If user requested to remove any of the exclude filter. eg. men_tops
            // eg. "men_tops, women_dresses" => ["men_tops", "women_dresses"]
            let apiQueryExcludeItemsByCategoryArray = state.apiQueryExcludeItemsByCategory.split(",");
            // This will find the query and remove it.  eg. men_tops
            apiQueryExcludeItemsByCategoryArray =
              apiQueryExcludeItemsByCategoryArray.filter((query) => {
                if (action.payload.category !== query) return true;
              });
            state.apiQueryExcludeItemsByCategory = apiQueryExcludeItemsByCategoryArray.join(",");// ["women_dresses"] => women_dresses // Removed men_tops
          }
        }
      } else {
        // If no query is present in apiQueryExcludeItemsByCategory then simple this first one.
        state.apiQueryExcludeItemsByCategory = action.payload.category;
      }
    }
  }
});

export const {
  reducerSetAllProducts,
  reducerSetAllProductsWithExcludeItemsByCategoryString
} = AllProductSlice.actions;
export default AllProductSlice.reducer;
