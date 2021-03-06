import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import api from './api';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const rootReducers = combineReducers({
  user,
  wallet,
  api,
});

export default rootReducers;
