import { combineReducers } from "redux";
import signup from './signup'
import auth from './auth'
import books from './books'
import book from './book'
import mybooks from './mybooks'
import readingDetail from './readingDetail'

export default combineReducers({
    signup,
    auth,
    books,
    book,
    mybooks,
    readingDetail
});