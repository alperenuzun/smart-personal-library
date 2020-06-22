import axios from 'axios'
import {
    FETCH_NOTES_BEGIN,
    FETCH_NOTES_SUCCESS,
    FETCH_NOTES_FAILURE,
    CHANGE_NOTE_TITLE,
    CHANGE_NOTE_NOTE,
    CHANGE_NOTE_PAGE,
    CHANGE_NOTE_LABEL,
    CHANGE_ADDFORM_STATUS,
    CHANGE_NOTE_BOOK,
    ADD_NOTE,
    REMOVE_NOTE
} from '../actionTypes'

export const fetchNotesBegin = () => ({
    type: FETCH_NOTES_BEGIN
});
  
export const fetchNotesSuccess = data => ({
    type: FETCH_NOTES_SUCCESS,
    payload: { item: data }
});
  
export const fetchNotesFailure = error => ({
    type: FETCH_NOTES_FAILURE,
    payload: { error }
});

export const fetchNotes = (user) => {
    return dispatch => {
      dispatch(fetchNotesBegin());
      return axios.get("http://localhost/smartlib/getNotes.php?u="+user)
        .then(json => {
            dispatch(fetchNotesSuccess(json.data));
        }).catch(error =>
            dispatch(fetchNotesFailure(error))
        );
    };
}

export const changeNoteTitle = title => ({
    type: CHANGE_NOTE_TITLE,
    payload: { title }
});

export const changeNoteNote = note => ({
    type: CHANGE_NOTE_NOTE,
    payload: { note }
});

export const changeNoteBook = book => ({
    type: CHANGE_NOTE_BOOK,
    payload: { book }
});

export const changeNotePage = page => ({
    type: CHANGE_NOTE_PAGE,
    payload: { page }
});

export const changeNoteLabel = (label, labelText) => ({
    type: CHANGE_NOTE_LABEL,
    payload: { label, labelText }
});

export const changeAddFormStatus = status => ({
    type: CHANGE_ADDFORM_STATUS,
    payload: { status }
});

export const addNoteSuccess = note => ({
    type: ADD_NOTE,
    payload: { note }
});

export const addNote = (note) => {
    return dispatch => {
        return axios.get("http://localhost/smartlib/addNote.php",{
            params: {
                user: note.user,
                title: note.title,
                book: note.bookParam,
                note: note.note,
                page: note.page,
                label: note.labelParam
            }
        })
        .then(json => {
            dispatch(addNoteSuccess(note));
        });
    };
}

export const removeNoteSuccess = id => ({
    type: REMOVE_NOTE,
    payload: { id }
});

export const removeNote = (id) => {
    return dispatch => {
        return axios.get("http://localhost/smartlib/removeNote.php?id="+id)
        .then(json => {
            dispatch(removeNoteSuccess(id));
        });
    };
}