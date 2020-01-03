import { FETCH_ADMINS } from '../actions/types';

export const adminReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_ADMINS:
      const admins = action.payload.data;
      return state.concat(admins);
    default:
      return state
  }
};