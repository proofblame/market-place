import { createSlice } from '@reduxjs/toolkit';
import { TCategory } from '../types/category';

export const initialState: TCategory = {
  name: 'Ноутбуки',
}
export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    editCategory(state, action) {
      const { name } = action.payload
      state.name = name
    }
  }
})

const { actions, reducer } = categorySlice

export const { editCategory } = actions

export default reducer