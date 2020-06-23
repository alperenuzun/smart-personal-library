import React from 'react'
import { Table, Label } from 'semantic-ui-react'

const getColor = (labelId) => {
    if(labelId === '1') return 'green';
    if(labelId === '2') return 'teal';
    return 'orange';
}

const NoteRow = ({ note }) => (
    <Table.Row>
        <Table.Cell>{note.title}</Table.Cell>
        <Table.Cell>{note.note}</Table.Cell>
        <Table.Cell>{note.datetime}</Table.Cell>
        <Table.Cell>{note.page}</Table.Cell>
        <Table.Cell>
            <Label as='a' color={getColor(note.labelId)} tag>
                {note.label}
            </Label>
        </Table.Cell>
    </Table.Row>
)

const Notes = ({notes}) => {

    if(notes && notes.length){
        return (
            <Table basic='very'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Note</Table.HeaderCell>
                        <Table.HeaderCell>Datetime</Table.HeaderCell>
                        <Table.HeaderCell>Page</Table.HeaderCell>
                        <Table.HeaderCell>Label</Table.HeaderCell>
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