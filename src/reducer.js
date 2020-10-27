import { combineReducers } from 'redux';

const initialState = {};

const someReducer = (state = initialState, action) => {
  return state;
};

const rootReducer = combineReducers({
  someReducer,
});

export default rootReducer;
