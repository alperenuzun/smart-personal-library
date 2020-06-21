import React from 'react'
import { Table, Tab } from 'semantic-ui-react'
import '../style.css'
import BookRow from '../containers/BookRow'

const MyBooksTab = ({loading, error, books, type, user, onStatusChange}) => {
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
                      <Table.HeaderCell>Status</Table.HeaderCell>
                      <Table.HeaderCell></Table.HeaderCell>
                  </Table.Row>
              </Table.Header>
              <Table.Body>
                  {books.map((book, index) => {
                    return <BookRow book={book} onStatusChange={onStatusChange} 
                                type={String(type)} user={user} key={index}
                            />;
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