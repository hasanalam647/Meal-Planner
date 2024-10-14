import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
    name: 'recipe',
    initialState: [],
    reducers: {
        setRecipe: (state, action) => {
            state = action.payload;
            return state;
        }
    }
})
export default recipeSlice.reducer;
export const { setRecipe } = recipeSlice.actions;