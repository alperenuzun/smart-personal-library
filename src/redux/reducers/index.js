import { combineReducers } from "redux";
import signup from './signup'
import auth from './auth'
import books from './books'
import book from './book'
import mybooks from './mybooks'
import readingDetail from './readingDetail'
import notes from './notes'
import sentences from './sentences'
import userReadings from './userReadings'
import targets from './targets'

export default combineReducers({
    signup,
    auth,
    books,
    book,
    mybooks,
    readingDetail,
    notes,
    sentences,
    userReadings,
    targets
});