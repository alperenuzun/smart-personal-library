import React from "react";
import { Table } from 'semantic-ui-react'
import NoteRow from '../containers/NoteRow'

const NoteList = ({notes}) => {

    if(notes && notes.length){
        return (
          <Table basic='very'>
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell>Title</Table.HeaderCell>
                      <Table.HeaderCell>Book Name</Table.HeaderCell>
                      <Table.HeaderCell>Note</Table.HeaderCell>
                      <Table.HeaderCell>Datetime</Table.HeaderCell>
                      <Table.HeaderCell>Page</Table.HeaderCell>
                      <Table.HeaderCell>Label</Table.HeaderCell>
                      <Table.HeaderCell></Table.HeaderCell>
                  </Table.Row>
              </Table.Header>
              <Table.Body>
                  {notes.map((note, index) => {
                    return <NoteRow note={note} key={index} />;
                  })}
              </Table.Body>
          </Table>
        )
    }

    return (<div>There is no notes yet!</div>)
}

export default NoteList