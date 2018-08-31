import { combineReducers } from 'redux';
import { providerReducer } from './reducer-provider';

const root = combineReducers({
  provider: providerReducer
})

export default rootReducer;
