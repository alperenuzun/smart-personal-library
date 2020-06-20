import React from "react";
import { Link } from "react-router-dom";
import { Grid, Item, Header } from 'semantic-ui-react'

const Book = ({ book }) => {
  return (
    <Grid.Column>
      <Item.Group className="book-wrapper book-detail-div">
        <Item>
          <Item.Image as={Link} to={`/book-detail/${book.id}`} size='small' src={`/images/books/${book.img}`} />

          <Item.Content>
            <Item.Header as='a'>{book.name}</Item.Header>
                <Item.Meta>{book.category}</Item.Meta>
            <Item.Description>
                <Grid stackable columns={1}>
                    <Grid.Column className="price-txt">
                      <div style={{padding:'15px',background:'#2196F3'}}>
                        <Header dividing>Author</Header>
                        <span>{book.author}</span>
                      </div>
                    </Grid.Column>
                </Grid>
                <Grid stackable columns={1}>
                    <Grid.Column className="disc-price">
                      <div style={{padding:'15px',background:'#4CAF50'}}>
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
  );
};

const BookList = ({ books }) => {
  return books && books.length ? (
    <Grid columns={3} stackable padded='vertically'>
      {books.map((book, index) => {
        return <Book book={book} key={index} />;
      })}
    </Grid>
  ) : (<div className="center">No books to show</div>);
};

export default BookList;