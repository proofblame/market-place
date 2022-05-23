import { combineReducers } from 'redux'
import cardReducer from './card'
import commonReducer from './common'
import categoryReducer from './category'

export const rootReducer = combineReducers({
  common: commonReducer,
  card: cardReducer,
  category: categoryReducer,
})