import React from 'react'
import { Table } from 'semantic-ui-react'

const NoteRow = ({ note }) => (
    <Table.Row>
        <Table.Cell>
            s
        </Table.Cell>
        <Table.Cell>{note.title}</Table.Cell>
        <Table.Cell>{note.note}</Table.Cell>
        <Table.Cell>{note.datetime}</Table.Cell>
        <Table.Cell>{note.page}</Table.Cell>
    </Table.Row>
)

const Notes = ({notes}) => {

    if(notes && notes.length){
        return (
          <Table basic='very'>
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell></Table.HeaderCell>
                      <Table.HeaderCell>Title</Table.HeaderCell>
                      <Table.HeaderCell>Note</Table.HeaderCell>
                      <Table.HeaderCell>Datetime</Table.HeaderCell>
                      <Table.HeaderCell>Page</Table.HeaderCell>
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

export default Notes