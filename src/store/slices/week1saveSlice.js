import { createSlice } from "@reduxjs/toolkit";

const week1saveSlice = createSlice({
    name: 'week1save',
    initialState: [],
    reducers: {
        setWeek1save: (state, action) => {
            state = action.payload;
            return state;
        },
        addWeek1save: (state, action) => {
            state.push(action.payload);
            return state;
        },
        deleteItemWeek1: (state, action) => {
            return state.filter((s) => s.id !== action.payload)
        },
    }
})
export default week1saveSlice.reducer;
export const { setWeek1save, addWeek1save, deleteItemWeek1 } = week1saveSlice.actions;