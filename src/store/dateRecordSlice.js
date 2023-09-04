import { createSlice } from '@reduxjs/toolkit';

export const dateRecordSlice = createSlice({
  name: 'dateRecord',
  initialState: {
    data: {},
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dateRecordSlice.actions;
export default dateRecordSlice.reducer;
