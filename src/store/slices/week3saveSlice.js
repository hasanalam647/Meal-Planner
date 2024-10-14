import { createSlice } from "@reduxjs/toolkit";

const week3saveSlice = createSlice({
    name: 'week3save',
    initialState: [],
    reducers: {
        setWeek3save: (state, action) => {
            state = action.payload;
            return state;
        },
        addWeek3save: (state, action) => {
            state.push(action.payload);
            return state;
        },
        deleteItemWeek3: (state, action) => {
            return state.filter((s) => s.id !== action.payload)
        },
    }
})
export default week3saveSlice.reducer;
export const { setWeek3save, addWeek3save,deleteItemWeek3 } = week3saveSlice.actions;