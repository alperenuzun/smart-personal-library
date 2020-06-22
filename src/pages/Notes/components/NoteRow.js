import React from "react";
import { Table, Button, Icon } from 'semantic-ui-react'

const NoteRow = ({ note, removeNote }) => (
    <Table.Row>
        <Table.Cell>{note.title}</Table.Cell>
        <Table.Cell>{note.book_name}</Table.Cell>
        <Table.Cell>{note.note}</Table.Cell>
        <Table.Cell>{note.datetime}</Table.Cell>
        <Table.Cell>{note.page}</Table.Cell>
        <Table.Cell>{note.label}</Table.Cell>
        <Table.Cell>
            <Button onClick={(e) => {e.stopPropagation(); removeNote(note.id)} } icon color="red">
                <Icon name='remove' />
            </Button>
        </Table.Cell>
    </Table.Row>
)

export default NoteRow