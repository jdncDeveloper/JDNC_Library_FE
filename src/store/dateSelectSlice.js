import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
};

export const dateSelectSlice = createSlice({
  name: 'dateSelect',
  initialState,
  reducers: {
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setMonth: (state, action) => {
      state.month = action.payload;
    },
  },
});

export const { setYear, setMonth } = dateSelectSlice.actions;
export default dateSelectSlice.reducer;
