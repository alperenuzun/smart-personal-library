import React,{Component} from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { Item, Grid, Header } from 'semantic-ui-react'
import './style.css'
import {fetchBookDetail} from '../../redux/actions/books'

class Book extends Component {
  constructor(props){
    super(props);
    props.fetchBookDetail(props.match.params.bookId);
  }

  render(){
    const { error, loading, book } = this.props;
    if (error) {
        return <div style={{marginTop:'5em'}}>Error! {error.message}</div>;
    }

    if (loading) {
        return <div style={{marginTop:'5em'}}>Loading Book Details...</div>;
    }
    
    return book && book.id ? (
      <Grid padded columns={1}>
        <Grid.Column>
          <Item.Group className="book-wrapper book-detail-div">
            <Item>
              <Item.Image size='medium' src={`/images/books/${book.img}`} />

              <Item.Content>
                <Item.Header as='a'>{book.name}</Item.Header>
                    <Item.Meta>{book.category}</Item.Meta>
                <Item.Description>
                    <Grid stackable columns={1}>
                        <Grid.Column>
                          <div className="book-detail-feature feature-author">
                            <Header dividing>Author</Header>
                            <span>{book.author}</span>
                          </div>
                        </Grid.Column>
                    </Grid>
                    <Grid stackable columns={1}>
                        <Grid.Column>
                          <div className="book-detail-feature feature-page">
                            <Header dividing>Page</Header>
                            <span>{book.total_page}</span>
                          </div>
                        </Grid.Column>
                    </Grid>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column>
            <div className="book-wrapper book-detail-div">
                <Header as='h3' dividing>Description</Header>
                <p className="book-description">{book.description}</p>
            </div>
        </Grid.Column>
      </Grid>
    ) : (<div className="center" style={{marginTop: '5em'}}>There is no book having this ID...</div>)

  }
}

const mapStateToProps = state => {
  return {
      book: state.book.item,
      loading: state.book.loading,
      error: state.book.error
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchBookDetail: (id) => dispatch(fetchBookDetail(id))
  }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Book) )