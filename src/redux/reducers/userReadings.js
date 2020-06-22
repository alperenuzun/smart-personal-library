import {
    FETCH_USERREADINGS_BEGIN,
    FETCH_USERREADINGS_SUCCESS,
    FETCH_USERREADINGS_FAILURE,
    ADD_USERREADING,
    CHANGE_USERREADING_BOOK,
    CHANGE_USERREADING_PAGE,
    CHANGE_USERREADING_ADDFORM_STATUS,
    REMOVE_USERREADING
} from "../actionTypes";

const initialState = {
    items: [],
    books: [],
    loading: false,
    error: null,
    page: '',
    book: '',
    addFormStatus: 0
};

export default function userReadings(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERREADINGS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_USERREADINGS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.item.userReadings,
                books: action.payload.item.books
            };

        case FETCH_USERREADINGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        case CHANGE_USERREADING_BOOK:
            return {
                ...state,
                book: action.payload.book
            };

        case CHANGE_USERREADING_PAGE:
            return {
                ...state,
                page: action.payload.page
            };

        case CHANGE_USERREADING_ADDFORM_STATUS:
            if(action.payload.status === 1)
                return {
                    ...state,
                    addFormStatus: 0,
                    title: '',
                    userReading: '',
                    page: '',
                    label: ''
                };
            return {
                ...state,
                addFormStatus: action.payload.status
            };

        case ADD_USERREADING:
            return {
                ...state,
                items: [ ...state.items, action.payload.userReading]
            };

        case REMOVE_USERREADING:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload.id)
            };

        default:
            return state;
    }
}