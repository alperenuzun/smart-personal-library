import {
    FETCH_SENTENCES_BEGIN,
    FETCH_SENTENCES_SUCCESS,
    FETCH_SENTENCES_FAILURE,
    ADD_SENTENCE,
    CHANGE_SENTENCE_TITLE,
    CHANGE_SENTENCE_SENTENCE,
    CHANGE_SENTENCE_BOOK,
    CHANGE_SENTENCE_PAGE,
    CHANGE_SENTENCE_LABEL,
    CHANGE_SENTENCE_ADDFORM_STATUS,
    REMOVE_SENTENCE
} from "../actionTypes";

const initialState = {
    items: [],
    books: [],
    loading: false,
    error: null,
    title: '',
    sentence: '',
    page: '',
    label: '',
    labelText: '',
    book: '',
    addFormStatus: 0
};

export default function sentences(state = initialState, action) {
    switch (action.type) {
        case FETCH_SENTENCES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_SENTENCES_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.item.sentences,
                books: action.payload.item.books
            };

        case FETCH_SENTENCES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        case CHANGE_SENTENCE_TITLE:
            return {
                ...state,
                title: action.payload.title
            };

        case CHANGE_SENTENCE_SENTENCE:
            return {
                ...state,
                sentence: action.payload.sentence
            };

        case CHANGE_SENTENCE_BOOK:
            return {
                ...state,
                book: action.payload.book
            };

        case CHANGE_SENTENCE_PAGE:
            return {
                ...state,
                page: action.payload.page
            };

        case CHANGE_SENTENCE_LABEL:
            return {
                ...state,
                label: action.payload.label,
                labelText: action.payload.labelText
            };

        case CHANGE_SENTENCE_ADDFORM_STATUS:
            if(action.payload.status === 1)
                return {
                    ...state,
                    addFormStatus: 0,
                    title: '',
                    sentence: '',
                    page: '',
                    label: ''
                };
            return {
                ...state,
                addFormStatus: action.payload.status
            };

        case ADD_SENTENCE:
            return {
                ...state,
                items: [ ...state.items, action.payload.sentence]
            };

        case REMOVE_SENTENCE:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload.id)
            };

        default:
            return state;
    }
}