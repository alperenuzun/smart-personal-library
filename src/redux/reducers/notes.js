import {
    FETCH_NOTES_BEGIN,
    FETCH_NOTES_SUCCESS,
    FETCH_NOTES_FAILURE,
    ADD_NOTE,
    CHANGE_NOTE_TITLE,
    CHANGE_NOTE_NOTE,
    CHANGE_NOTE_BOOK,
    CHANGE_NOTE_PAGE,
    CHANGE_NOTE_LABEL,
    CHANGE_ADDFORM_STATUS
} from "../actionTypes";

const initialState = {
    items: [],
    books: [],
    loading: false,
    error: null,
    title: '',
    note: '',
    page: '',
    label: '',
    book: '',
    addFormStatus: 0
};

export default function notes(state = initialState, action) {
    switch (action.type) {
        case FETCH_NOTES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_NOTES_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.item.notes,
                books: action.payload.item.books
            };

        case FETCH_NOTES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        case CHANGE_NOTE_TITLE:
            return {
                ...state,
                title: action.payload.title
            };

        case CHANGE_NOTE_NOTE:
            return {
                ...state,
                note: action.payload.note
            };

        case CHANGE_NOTE_BOOK:
            return {
                ...state,
                book: action.payload.book
            };

        case CHANGE_NOTE_PAGE:
            return {
                ...state,
                page: action.payload.page
            };

        case CHANGE_NOTE_LABEL:
            return {
                ...state,
                label: action.payload.label
            };

        case CHANGE_ADDFORM_STATUS:
            if(action.payload.status === 1)
                return {
                    ...state,
                    addFormStatus: 0,
                    title: '',
                    note: '',
                    page: '',
                    label: ''
                };
            return {
                ...state,
                addFormStatus: action.payload.status
            };

        case ADD_NOTE:
            return {
                ...state,
                items: [ ...state.items, action.payload.note]
            };

        default:
            return state;
    }
}