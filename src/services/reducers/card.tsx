import { createSlice } from '@reduxjs/toolkit';
import { TCard } from '../types/card';

export const initialState: TCard = {
  title: 'Ноутбук Honor Magicbook',
  subtitle: '15.6" Ноутбук Honor Magicbook X 15 BBR-WAI9, Intel Core i3-10110U (2.1 ГГц), RAM 8 ГБ, SSD 256 ГБ, Intel UHD Graphics, Windows Home, (5301AAPQ), серый',
  price: '3000',
}
export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    editCard(state, action) {
      const { title, subtitle, price } = action.payload
      state.title = title
      state.subtitle = subtitle
      state.price = price
    }
  }
})

const { actions, reducer } = cardSlice

export const { editCard } = actions

export default reducer

