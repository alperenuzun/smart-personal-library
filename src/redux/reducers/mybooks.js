import {
    FETCH_MYBOOKS_BEGIN,
    FETCH_MYBOOKS_SUCCESS,
    FETCH_MYBOOKS_FAILURE,
    SET_READING_STATUS
} from "../actionTypes";

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function mybooks(state = initialState, action) {
    switch (action.type) {
        case FETCH_MYBOOKS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_MYBOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.item
            };

        case FETCH_MYBOOKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        case SET_READING_STATUS:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload.bookId)
            };

        default:
            return state;
    }
}