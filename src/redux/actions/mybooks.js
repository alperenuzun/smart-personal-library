import axios from 'axios'
import {
    FETCH_MYBOOKS_BEGIN,
    FETCH_MYBOOKS_SUCCESS,
    FETCH_MYBOOKS_FAILURE,
    FETCH_READING_BEGIN,
    FETCH_READING_SUCCESS,
    FETCH_READING_FAILURE,
    SET_READING_STATUS,
    REMOVE_READING,
    ADD_READING
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

const setReadingStatusSuccess = bookId => ({
    type: SET_READING_STATUS,
    payload: {bookId: bookId}
});

export const setReadingStatus = (user,bookId,status) => {
    return dispatch => {
      return axios.get("http://localhost/smartlib/setBookStatus.php?u="+user+"&bId="+bookId+"&s="+status)
      .then(json => {
        dispatch(setReadingStatusSuccess(bookId));
        return json.data.success;
      });
    };
}

const removeReadingSuccess = bookId => ({
    type: REMOVE_READING,
    payload: {bookId: bookId}
});

export const removeReading = (user,bookId) => {
    return dispatch => {
      return axios.get("http://localhost/smartlib/removeReading.php?u="+user+"&bId="+bookId)
      .then(json => {
        dispatch(removeReadingSuccess(bookId));
        return json.data.success;
      });
    };
}

const addReadingSuccess = bookId => ({
    type: ADD_READING,
    payload: {bookId: bookId}
});

export const addReading = (user,bookId,status) => {
    return dispatch => {
      return axios.get("http://localhost/smartlib/addReading.php?u="+user+"&bId="+bookId+"&s="+status)
      .then(json => {
        dispatch(addReadingSuccess(bookId));
        return json.data.success;
      });
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