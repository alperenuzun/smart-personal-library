import { combineReducers } from "redux";
import signup from './signup'
import auth from './auth'
import books from './books'
import book from './book'

export default combineReducers({
    signup,
    auth,
    books,
    book
});