import {
    FETCH_TARGETS_BEGIN,
    FETCH_TARGETS_SUCCESS,
    FETCH_TARGETS_FAILURE,
    ADD_TARGET,
    CHANGE_TARGET_BOOKCNT,
    CHANGE_TARGET_STARTDATE,
    CHANGE_TARGET_PAGE,
    CHANGE_TARGET_FINISHDATE,
    CHANGE_ADDFORM_STATUS,
    REMOVE_TARGET
} from "../actionTypes";

const initialState = {
    items: [],
    loading: false,
    error: null,
    book_count: '',
    page: '',
    start_date: '',
    finish_date: '',
    addFormStatus: 0
};

export default function targets(state = initialState, action) {
    switch (action.type) {
        case FETCH_TARGETS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_TARGETS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.item.targets
            };

        case FETCH_TARGETS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        case CHANGE_TARGET_BOOKCNT:
            return {
                ...state,
                book_count: action.payload.bookCnt
            };

        case CHANGE_TARGET_STARTDATE:
            return {
                ...state,
                start_date: action.payload.start
            };

        case CHANGE_TARGET_FINISHDATE:
            return {
                ...state,
                finish_date: action.payload.finish
            };

        case CHANGE_TARGET_PAGE:
            return {
                ...state,
                page: action.payload.page
            };

        case CHANGE_ADDFORM_STATUS:
            if(action.payload.status === 1)
                return {
                    ...state,
                    addFormStatus: 0,
                    book_count: '',
                    page: '',
                    start_date: '',
                    finish_date: ''
                };
            return {
                ...state,
                addFormStatus: action.payload.status
            };

        case ADD_TARGET:
            return {
                ...state,
                items: [ ...state.items, action.payload.target]
            };

        case REMOVE_TARGET:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload.id)
            };

        default:
            return state;
    }
}