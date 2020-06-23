import axios from 'axios'
import {
    FETCH_HOME_BEGIN,
    FETCH_HOME_SUCCESS,
    FETCH_HOME_FAILURE,
} from '../actionTypes'

export const fetchHomeBegin = () => ({
    type: FETCH_HOME_BEGIN
});
  
export const fetchHomeSuccess = data => ({
    type: FETCH_HOME_SUCCESS,
    payload: { data: data }
});
  
export const fetchHomeFailure = error => ({
    type: FETCH_HOME_FAILURE,
    payload: { error }
});

export const fetchHome = (user) => {
    return dispatch => {
      dispatch(fetchHomeBegin());
      return axios.get("http://localhost/smartlib/getHome.php?u="+user)
        .then(json => {
            dispatch(fetchHomeSuccess(json.data));
            return json.data;
        }).catch(error =>
            dispatch(fetchHomeFailure(error))
        );
    };
}