import { createSlice } from '@reduxjs/toolkit';
import { TCommon } from '../types/common';


export const initialState: TCommon = {
  title: 'Market Place',
  name: 'Иван Иванов',
  email: 'test@test.ru',
  phone: '74956547899',
}
const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    editUser(state, action) {
      const { title, name, email, phone } = action.payload
      state.title = title
      state.name = name
      state.email = email
      state.phone = phone
    }
  }
})
const { actions, reducer } = commonSlice

export const { editUser } = actions

export default reducer