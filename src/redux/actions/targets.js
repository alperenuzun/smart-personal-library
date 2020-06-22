import axios from 'axios'
import {
    FETCH_TARGETS_BEGIN,
    FETCH_TARGETS_SUCCESS,
    FETCH_TARGETS_FAILURE,
    CHANGE_TARGET_BOOKCNT,
    CHANGE_TARGET_STARTDATE,
    CHANGE_TARGET_PAGE,
    CHANGE_ADDFORM_STATUS,
    CHANGE_TARGET_FINISHDATE,
    ADD_TARGET,
    REMOVE_TARGET
} from '../actionTypes'

export const fetchTargetsBegin = () => ({
    type: FETCH_TARGETS_BEGIN
});
  
export const fetchTargetsSuccess = data => ({
    type: FETCH_TARGETS_SUCCESS,
    payload: { item: data }
});
  
export const fetchTargetsFailure = error => ({
    type: FETCH_TARGETS_FAILURE,
    payload: { error }
});

export const fetchTargets = (user) => {
    return dispatch => {
      dispatch(fetchTargetsBegin());
      return axios.get("http://localhost/smartlib/getTargets.php?u="+user)
        .then(json => {
            dispatch(fetchTargetsSuccess(json.data));
        }).catch(error =>
            dispatch(fetchTargetsFailure(error))
        );
    };
}

export const changeTargetBookCnt = bookCnt => ({
    type: CHANGE_TARGET_BOOKCNT,
    payload: { bookCnt }
});

export const changeTargetStartDate = start => ({
    type: CHANGE_TARGET_STARTDATE,
    payload: { start }
});

export const changeTargetFinishDate = finish => ({
    type: CHANGE_TARGET_FINISHDATE,
    payload: { finish }
});

export const changeTargetPage = page => ({
    type: CHANGE_TARGET_PAGE,
    payload: { page }
});

export const changeAddFormStatus = status => ({
    type: CHANGE_ADDFORM_STATUS,
    payload: { status }
});

export const addTargetSuccess = target => ({
    type: ADD_TARGET,
    payload: { target }
});

export const addTarget = (target) => {
    return dispatch => {
        return axios.get("http://localhost/smartlib/addTarget.php",{
            params: {
                user: target.user,
                b_cnt: target.book_count,
                start: target.start_date,
                finish: target.finish_date,
                page: target.page_no
            }
        })
        .then(json => {
            dispatch(addTargetSuccess(target));
        });
    };
}

export const removeTargetSuccess = id => ({
    type: REMOVE_TARGET,
    payload: { id }
});

export const removeTarget = (id) => {
    return dispatch => {
        return axios.get("http://localhost/smartlib/removeTarget.php?id="+id)
        .then(json => {
            dispatch(removeTargetSuccess(id));
        });
    };
}