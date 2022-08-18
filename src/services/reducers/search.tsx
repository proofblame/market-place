import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isShow: false,
};
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    showSearch(state) {
      state.isShow = true;
    },
    hideSearch(state) {
      state.isShow = false;
    },
  },
});

const { actions, reducer } = searchSlice;

export const { showSearch, hideSearch } = actions;

export default reducer;
