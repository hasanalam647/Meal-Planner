import { createSlice } from "@reduxjs/toolkit";

const weekSlice = createSlice({
    name: 'week',
    initialState: [],
    reducers: {
        setWeek: (state, action) => {
            state = action.payload;
            return state;
        },
        addWeek: (state, action) => {
            state.push(action.payload);
            return state;
        },
        deleteWeekItem: (state, action) => {
            return state.filter((s) => s.id !== action.payload);
        },
        clearWeekItems: (state, action) => {
            state = []
            return state
        },
    }
})
export default weekSlice.reducer;
export const { setWeek, addWeek, deleteWeekItem ,clearWeekItems} = weekSlice.actions;