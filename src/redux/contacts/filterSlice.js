import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterNameNumber(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterNameNumber } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
