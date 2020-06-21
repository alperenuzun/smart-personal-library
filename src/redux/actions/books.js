import axios from 'axios'
import {
    SEARCH_BOOK,
    FETCH_BOOKS_BEGIN,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    FETCH_BOOK_BEGIN,
    FETCH_BOOK_SUCCESS,
    FETCH_BOOK_FAILURE
} from '../actionTypes'

export const fetchBooksBegin = () => ({
  type: FETCH_BOOKS_BEGIN
});

export const fetchBooksSuccess = books => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: { books }
});

export const fetchBooksFailure = error => ({
  type: FETCH_BOOKS_FAILURE,
  payload: { error }
});

export function search(value) {
  return {type: SEARCH_BOOK, payload: value};
}

export const fetchBookBegin = () => ({
    type: FETCH_BOOK_BEGIN
});
  
export const fetchBookSuccess = book => ({
    type: FETCH_BOOK_SUCCESS,
    payload: { item: book }
});
  
export const fetchBookFailure = error => ({
    type: FETCH_BOOK_FAILURE,
    payload: { error }
});

const getBooks = (books, searchTerm = "") => {
  return new Promise(resolve => {
    if(books.length){
      resolve({books: books})
    }else{
      const param = (searchTerm !== "") ? "?q="+searchTerm : "";
      resolve(axios.get("http://localhost/smartlib/getBooks.php"+param))
    }
  });
}

export const fetchBooks = (booksOfState, searchTerm = "") => {
  return dispatch => {
    dispatch(fetchBooksBegin());
    return getBooks(booksOfState, searchTerm)
      .then(json => {
        const books = (json.books) ? json.books : json.data.books;
        dispatch(fetchBooksSuccess(books));
        return books;
      })
      .catch(error =>
        dispatch(fetchBooksFailure(error))
      );
  };
}

export const fetchBookDetail = (bookId, user) => {
    return dispatch => {
      dispatch(fetchBookBegin());
      return axios.get("http://localhost/smartlib/getBookDetail.php?bId="+bookId+"&u="+user).then(json => {
        dispatch(fetchBookSuccess(json.data.book));
        return json.data.book;
      }).catch(error =>
        dispatch(fetchBookFailure(error))
      );
    };
}