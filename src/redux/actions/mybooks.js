import axios from 'axios'
import {
    FETCH_MYBOOKS_BEGIN,
    FETCH_MYBOOKS_SUCCESS,
    FETCH_MYBOOKS_FAILURE,
    FETCH_READING_BEGIN,
    FETCH_READING_SUCCESS,
    FETCH_READING_FAILURE
} from '../actionTypes'

export const fetchBookBegin = () => ({
    type: FETCH_MYBOOKS_BEGIN
});
  
export const fetchBookSuccess = book => ({
    type: FETCH_MYBOOKS_SUCCESS,
    payload: { item: book }
});
  
export const fetchBookFailure = error => ({
    type: FETCH_MYBOOKS_FAILURE,
    payload: { error }
});

export const fetchMyBooks = (user, status) => {
    return dispatch => {
      dispatch(fetchBookBegin());
      return axios.get("http://localhost/smartlib/getMyBooks.php?u="+user+"&s="+status)
        .then(json => {
            dispatch(fetchBookSuccess(json.data.book));
            return json.data.book;
        }).catch(error =>
            dispatch(fetchBookFailure(error))
        );
    };
}

export const fetchReadingBegin = () => ({
    type: FETCH_READING_BEGIN
});
  
export const fetchReadingSuccess = data => ({
    type: FETCH_READING_SUCCESS,
    payload: { data: data }
});
  
export const fetchReadingFailure = error => ({
    type: FETCH_READING_FAILURE,
    payload: { error }
});

export const fetchReading = (user, bookId) => {
    return dispatch => {
      dispatch(fetchReadingBegin());
      return axios.get("http://localhost/smartlib/getReadingDetail.php?u="+user+"&bId="+bookId)
        .then(json => {
            dispatch(fetchReadingSuccess(json.data));
            return json.data;
        }).catch(error =>
            dispatch(fetchReadingFailure(error))
        );
    };
}