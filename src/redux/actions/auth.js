import axios from 'axios'

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";

const loginSuccess = user => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};

const loginError = error => {
    return {
        type: LOGIN_ERROR,
        error
    };
};

export const login = (username, password) => {
    return dispatch => {
        return axios.post("http://localhost/smartlib/checkLogin.php", { username, password })
        .then(user => {

            if (user.data.status) {
                const { token } = user.data;
                localStorage.setItem("jwtToken", token);
                localStorage.setItem("user", username);
            }
            user.data.message
                ? dispatch(loginError(user.data.message))
                : (dispatch(loginSuccess(username)))
        })
        .catch(err => dispatch(loginError(err)));
    }
}

export const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
    return {
        type: LOGOUT
    };
}