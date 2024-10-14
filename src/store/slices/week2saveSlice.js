import { createSlice } from "@reduxjs/toolkit";

const week2saveSlice = createSlice({
    name: 'week2save',
    initialState: [],
    reducers: {
        setWeek2save: (state, action) => {
            state = action.payload;
            return state;
        },
        addWeek2save: (state, action) => {
            state.push(action.payload);
            return state;
        },
        deleteItemWeek2: (state, action) => {
            return state.filter((s) => s.id !== action.payload)
        },
    }
})
export default week2saveSlice.reducer;
export const { setWeek2save, addWeek2save,deleteItemWeek2 } = week2saveSlice.actions;