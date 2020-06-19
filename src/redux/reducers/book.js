import {
    FETCH_BOOK_BEGIN,
    FETCH_BOOK_SUCCESS,
    FETCH_BOOK_FAILURE
} from "../actionTypes";

const initialState = {
    item: {},
    loading: false,
    error: null
};

export default function book(
    state = initialState,
    action
) {
    switch (action.type) {
        case FETCH_BOOK_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                item: action.payload.item
            };

        case FETCH_BOOK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                item: []
            };

        default:
            return state;
    }
}