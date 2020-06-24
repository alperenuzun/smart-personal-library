import React from "react";
import { Table, Button, Icon, Label } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const getColor = (labelId) => {
    if(labelId === '1') return 'green';
    if(labelId === '2') return 'teal';
    return 'orange';
}

const NoteRow = ({ note, removeNote }) => (
    <Table.Row>
        <Table.Cell>{note.title}</Table.Cell>
        <Table.Cell><Link to={"/book-detail/"+note.bookId}>{note.book_name}</Link></Table.Cell>
        <Table.Cell>{note.note}</Table.Cell>
        <Table.Cell>{note.datetime}</Table.Cell>
        <Table.Cell>{note.page}</Table.Cell>
        <Table.Cell>
            {note.label ? 
                <Label as='a' color={getColor(note.labelId)} tag>
                    {note.label}
                </Label> : null
            }
        </Table.Cell>
        <Table.Cell>
            <Button onClick={(e) => {e.stopPropagation(); removeNote(note.id)} } icon color="red">
                <Icon name='remove' />
            </Button>
        </Table.Cell>
    </Table.Row>
)

export default NoteRow