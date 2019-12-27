import { FETCH_USERS } from '../actions/types';

export const userReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_USERS:
      const users = action.payload.data;
      return state.concat(users);
    default:
      return state
  }
};