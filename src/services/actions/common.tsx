import { editUser } from '../reducers/common'
import { TCommon } from '../types/common'

export const updateUser = (data: TCommon) => {
  return (dispatch: any) => {
    dispatch(editUser(data))
  }
}