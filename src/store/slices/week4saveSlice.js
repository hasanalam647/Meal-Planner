import { createSlice } from "@reduxjs/toolkit";

const week4saveSlice = createSlice({
    name: 'week4save',
    initialState: [],
    reducers: {
        setWeek4save: (state, action) => {
            state = action.payload;
            return state;
        },
        addWeek4save: (state, action) => {
            state.push(action.payload);
            return state;
        },
        deleteItemWeek4: (state, action) => {
            return state.filter((s) => s.id !== action.payload)
        },
    }
})
export default week4saveSlice.reducer;
export const { setWeek4save, addWeek4save,deleteItemWeek4 } = week4saveSlice.actions;