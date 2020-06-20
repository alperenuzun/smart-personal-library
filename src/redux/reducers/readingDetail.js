import {
    FETCH_READING_BEGIN,
    FETCH_READING_SUCCESS,
    FETCH_READING_FAILURE
} from "../actionTypes";

const initialState = {
    notes: [],
    sentences: [],
    readingDates: [],
    readingValues: [],
    loading: false,
    error: null
};

export default function reading(state = initialState, action) {
    switch (action.type) {
        case FETCH_READING_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_READING_SUCCESS:
            return {
                ...state,
                loading: false,
                notes: action.payload.data.notes,
                sentences: action.payload.data.sentences,
                readingDates: action.payload.data.last7date,
                readingValues: action.payload.data.last7
            };

        case FETCH_READING_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                notes: [],
                sentences: [],
                readingDates: [],
                readingValues: []
            };

        default:
            return state;
    }
}