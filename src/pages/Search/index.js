import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from "../../redux/actions/books";
import BookList from './components/BookList';
import { Grid } from 'semantic-ui-react';
import SearchBox from './containers/SearchBox';

class Search extends Component {

  onFilterSubmit(e){
    e.preventDefault();
    this.props.fetchBooks(this.props.books);
  }
  
  render(){
    const { error, loading, books } = this.props;

    let bookList;
    if (error) {
      bookList = (<div>Error! {error.message}</div>);
    }else if(loading) {
      bookList = (<div>Loading...</div>);
    }else{
      bookList = (<BookList books={books} />);
    }

    return (
      <Grid columns={1} padded>
        <Grid.Column>
            <SearchBox />
        </Grid.Column>
        <Grid.Column>
            {bookList}
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books.items,
    loading: state.books.loading,
    error: state.books.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: (books) => dispatch(fetchBooks(books))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)