import React,{Component} from "react";
import { connect } from "react-redux";
import { withRouter, Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { Item, Grid, Header, Button, Icon } from 'semantic-ui-react'
import './style.css'
import {fetchBookDetail} from '../../redux/actions/books'
import {addReading} from '../../redux/actions/mybooks'

class Book extends Component {
  constructor(props){
    super(props);
    props.fetchBookDetail(props.match.params.bookId, props.user);
  }

  render(){
    const { error, loading, book, addReading, user, inMyBooks, readingNo } = this.props;
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
                    <Grid>
                        <Grid.Column>
                            {!inMyBooks ? 
                                <Button
                                    onClick={() => addReading(user,book.id,"1")} 
                                    icon color="blue"
                                >
                                    <Icon name='add' /> Add My Books
                                </Button>
                                : 
                                <Button as={Link} to={"/reading-detail/"+readingNo} icon>
                                    <Icon name='arrow right' />  Go to Reading Detail
                                </Button>
                            }
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
  const token = localStorage.getItem("jwtToken");
  return {
      user: token ? jwtDecode(token) : state.auth.user,
      book: state.book.item,
      loading: state.book.loading,
      error: state.book.error,
      inMyBooks: state.book.inMyBooks,
      readingNo: state.book.readingNo
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchBookDetail: (id, user) => dispatch(fetchBookDetail(id, user)),
      addReading: (user, bookId, status) => dispatch(addReading(user, bookId, status))
  }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Book) )