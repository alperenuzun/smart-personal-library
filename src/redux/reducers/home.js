import {
    FETCH_HOME_BEGIN,
    FETCH_HOME_SUCCESS,
    FETCH_HOME_FAILURE
} from "../actionTypes";

const initialState = {
    willRead: 0,
    isReading: 0,
    wasRead: 0,
    last30BookCount: 0,
    totalTarget: 0,
    last30PageDate: [],
    last30Page: [],
    lastYearBookDate: [],
    lastYearBook: [],
    loading: false,
    error: null
};

export default function home(state = initialState, action) {
    switch (action.type) {
        case FETCH_HOME_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_HOME_SUCCESS:
            return {
                ...state,
                loading: false,
                willRead: action.payload.data.willRead,
                isReading: action.payload.data.isReading,
                wasRead: action.payload.data.wasRead,
                last30BookCount: action.payload.data.last30BookCount,
                totalTarget: action.payload.data.totalTarget,
                last30PageDate: action.payload.data.last30PageDate,
                last30Page: action.payload.data.last30Page,
                lastYearBookDate: action.payload.data.lastYearBookDate,
                lastYearBook: action.payload.data.lastYearBook
            };

        case FETCH_HOME_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                willRead: 0,
                isReading: 0,
                wasRead: 0,
                last30BookCount: 0,
                totalTarget: 0,
                last30PageDate: [],
                last30Page: [],
                lastYearBookDate: [],
                lastYearBook: []
            };

        default:
            return state;
    }
}