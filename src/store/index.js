import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./slices/recipeSlice";
import weekSlice from "./slices/weekSlice";
import week1saveSlice from "./slices/week1saveSlice";
import week2saveSlice from "./slices/week2saveSlice";
import week3saveSlice from "./slices/week3saveSlice";
import week4saveSlice from "./slices/week4saveSlice";


export const store = configureStore({
    reducer: {
        recipies: recipeSlice,
        week: weekSlice,
        week1save: week1saveSlice,
        week2save: week2saveSlice,
        week3save: week3saveSlice,
        week4save: week4saveSlice,
    }
})