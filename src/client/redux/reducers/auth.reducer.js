import { FETCH_CURRENT_USER } from '../actions/types';

const initialState = {
  currentUser: null
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CURRENT_USER:
      return { currentUser: action.payload.data || false };
    default:
      return state
  }
};