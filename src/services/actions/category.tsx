import { Dispatch } from '@reduxjs/toolkit'
import { editCategory } from '../reducers/category'
import { TCategory } from '../types/category'


export const updateCategory = (data: TCategory) => {
  return (dispatch: Dispatch) => {
    dispatch(editCategory(data))
  }
}