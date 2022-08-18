import { combineReducers } from 'redux';
import searchReducer from './search';

export const rootReducer = combineReducers({
  search: searchReducer,
});
