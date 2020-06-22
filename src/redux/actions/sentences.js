import axios from 'axios'
import {
    FETCH_SENTENCES_BEGIN,
    FETCH_SENTENCES_SUCCESS,
    FETCH_SENTENCES_FAILURE,
    CHANGE_SENTENCE_TITLE,
    CHANGE_SENTENCE_SENTENCE,
    CHANGE_SENTENCE_PAGE,
    CHANGE_SENTENCE_LABEL,
    CHANGE_SENTENCE_ADDFORM_STATUS,
    CHANGE_SENTENCE_BOOK,
    ADD_SENTENCE,
    REMOVE_SENTENCE
} from '../actionTypes'

export const fetchSentencesBegin = () => ({
    type: FETCH_SENTENCES_BEGIN
});
  
export const fetchSentencesSuccess = data => ({
    type: FETCH_SENTENCES_SUCCESS,
    payload: { item: data }
});
  
export const fetchSentencesFailure = error => ({
    type: FETCH_SENTENCES_FAILURE,
    payload: { error }
});

export const fetchSentences = (user) => {
    return dispatch => {
      dispatch(fetchSentencesBegin());
      return axios.get("http://localhost/smartlib/getSentences.php?u="+user)
        .then(json => {
            dispatch(fetchSentencesSuccess(json.data));
        }).catch(error =>
            dispatch(fetchSentencesFailure(error))
        );
    };
}

export const changeSentenceTitle = title => ({
    type: CHANGE_SENTENCE_TITLE,
    payload: { title }
});

export const changeSentenceSentence = sentence => ({
    type: CHANGE_SENTENCE_SENTENCE,
    payload: { sentence }
});

export const changeSentenceBook = book => ({
    type: CHANGE_SENTENCE_BOOK,
    payload: { book }
});

export const changeSentencePage = page => ({
    type: CHANGE_SENTENCE_PAGE,
    payload: { page }
});

export const changeSentenceLabel = (label, labelText) => ({
    type: CHANGE_SENTENCE_LABEL,
    payload: { label, labelText }
});

export const changeAddFormStatus = status => ({
    type: CHANGE_SENTENCE_ADDFORM_STATUS,
    payload: { status }
});

export const addSentenceSuccess = sentence => ({
    type: ADD_SENTENCE,
    payload: { sentence }
});

export const addSentence = (sentence) => {
    return dispatch => {
        return axios.get("http://localhost/smartlib/addSentence.php",{
            params: {
                user: sentence.user,
                title: sentence.title,
                book: sentence.bookParam,
                sentence: sentence.sentence,
                page: sentence.page,
                label: sentence.labelParam
            }
        })
        .then(json => {
            dispatch(addSentenceSuccess(sentence));
        });
    };
}

export const removeSentenceSuccess = id => ({
    type: REMOVE_SENTENCE,
    payload: { id }
});

export const removeSentence = (id) => {
    return dispatch => {
        return axios.get("http://localhost/smartlib/removeSentence.php?id="+id)
        .then(json => {
            dispatch(removeSentenceSuccess(id));
        });
    };
}