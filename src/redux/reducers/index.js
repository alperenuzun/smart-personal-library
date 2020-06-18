import { combineReducers } from "redux";
import signup from './signup'
import auth from './auth'

export default combineReducers({
    signup,
    auth
});