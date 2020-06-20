import React from 'react'
import { Table, Tab, Image, Header } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import '../style.css'

const BookRow = ({ book }) => (
    <Table.Row>
        <Table.Cell>
            <Image as={Link} to={`/reading-detail/${book.id}`}
                className="mybooks-img" src={`/images/books/${book.img}`} 
            />
        </Table.Cell>
        <Table.Cell><Header size='small' as={Link} to={`/reading-detail/${book.id}`}>{book.name}</Header></Table.Cell>
        <Table.Cell>{book.datetime}</Table.Cell>
        <Table.Cell>{book.page}</Table.Cell>
    </Table.Row>
)

const MyBooksTab = ({loading, error, books}) => {

    if (error)
      return (<Tab.Pane>Error! {error.message}</Tab.Pane>);

    let table;
    if(books && books.length){
        table = (
          <Table basic='very'>
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell></Table.HeaderCell>
                      <Table.HeaderCell>Book Name</Table.HeaderCell>
                      <Table.HeaderCell>Datetime</Table.HeaderCell>
                      <Table.HeaderCell>Page</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>
              <Table.Body>
                  {books.map((book, index) => {
                    return <BookRow book={book} key={index} />;
                  })}
              </Table.Body>
          </Table>
        )
    }else{
        table = (<div>There is no books yet!</div>)
    }

    return (
        <Tab.Pane loading={loading}>
            {table}
        </Tab.Pane>
    )
}

export default MyBooksTab