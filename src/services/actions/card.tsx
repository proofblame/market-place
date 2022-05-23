import { Dispatch } from '@reduxjs/toolkit'
import { editCard } from '../reducers/card'
import { TCard } from '../types/card'

export const updateCard = (data: TCard) => {
  return (dispatch: Dispatch) => {
    dispatch(editCard(data))
  }
}