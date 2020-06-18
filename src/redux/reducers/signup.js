import {REGISTER_SUCCESS,REGISTER_REQUEST,REGISTER_FAILURE} from '../actionTypes'

export default function signup(state = {}, action) {
    switch (action.type) {
      case REGISTER_REQUEST:
        return { registering: true };
      case REGISTER_SUCCESS:
        return { success: true };
      case REGISTER_FAILURE:
        return { success: false };
      default:
        return state
    }
}