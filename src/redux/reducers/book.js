import {
    FETCH_BOOK_BEGIN,
    FETCH_BOOK_SUCCESS,
    FETCH_BOOK_FAILURE,
    ADD_READING
} from "../actionTypes";

const initialState = {
    item: {},
    loading: false,
    error: null,
    inMyBooks: false,
    readingNo: 0
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
                item: action.payload.item,
                inMyBooks: action.payload.item.inMyBooks,
                readingNo: action.payload.item.readingNo
            };

        case FETCH_BOOK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                item: []
            };

        case ADD_READING:
            return {
                ...state,
                inMyBooks: true,
                readingNo: 0
            };

        default:
            return state;
    }
}