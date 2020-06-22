import axios from 'axios'
import {
    FETCH_USERREADINGS_BEGIN,
    FETCH_USERREADINGS_SUCCESS,
    FETCH_USERREADINGS_FAILURE,
    CHANGE_USERREADING_PAGE,
    CHANGE_USERREADING_ADDFORM_STATUS,
    CHANGE_USERREADING_BOOK,
    ADD_USERREADING,
    REMOVE_USERREADING
} from '../actionTypes'

export const fetchUserReadingsBegin = () => ({
    type: FETCH_USERREADINGS_BEGIN
});
  
export const fetchUserReadingsSuccess = data => ({
    type: FETCH_USERREADINGS_SUCCESS,
    payload: { item: data }
});
  
export const fetchUserReadingsFailure = error => ({
    type: FETCH_USERREADINGS_FAILURE,
    payload: { error }
});

export const fetchUserReadings = (user) => {
    return dispatch => {
      dispatch(fetchUserReadingsBegin());
      return axios.get("http://localhost/smartlib/getUserReadings.php?u="+user)
        .then(json => {
            dispatch(fetchUserReadingsSuccess(json.data));
        }).catch(error =>
            dispatch(fetchUserReadingsFailure(error))
        );
    };
}

export const changeUserReadingBook = book => ({
    type: CHANGE_USERREADING_BOOK,
    payload: { book }
});

export const changeUserReadingPage = page => ({
    type: CHANGE_USERREADING_PAGE,
    payload: { page }
});

export const changeAddFormStatus = status => ({
    type: CHANGE_USERREADING_ADDFORM_STATUS,
    payload: { status }
});

export const addUserReadingSuccess = userReading => ({
    type: ADD_USERREADING,
    payload: { userReading }
});

export const addUserReading = (userReading) => {
    return dispatch => {
        return axios.get("http://localhost/smartlib/addUserReading.php",{
            params: {
                user: userReading.user,
                book: userReading.bookParam,
                page: userReading.page
            }
        })
        .then(json => {
            dispatch(addUserReadingSuccess(userReading));
        });
    };
}

export const removeUserReadingSuccess = id => ({
    type: REMOVE_USERREADING,
    payload: { id }
});

export const removeUserReading = (id) => {
    return dispatch => {
        return axios.get("http://localhost/smartlib/removeUserReading.php?id="+id)
        .then(json => {
            dispatch(removeUserReadingSuccess(id));
        });
    };
}