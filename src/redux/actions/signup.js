import axios from 'axios'

import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE} from '../actionTypes'

export const request = user => { return { type: REGISTER_REQUEST, user } }
export const success = user => { return { type: REGISTER_SUCCESS, user } }
export const failure = error => { return { type: REGISTER_FAILURE, error } }

export const register = user => {
    return dispatch => {
        dispatch(request(user));
        axios.get("http://localhost/smartlib/register.php?first_name="+user.firstName+"&last_name="+user.lastName+"&email="+user.username+"&password="+user.password)
        .then(user => {
            if(user.data.success)
                dispatch(success());
            else
                dispatch(failure(user.data.message));
        }).catch(error =>{
            dispatch(failure(error));
        });
    };
}