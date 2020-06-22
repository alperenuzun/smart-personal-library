import React from "react";
import { Table, Button, Icon } from 'semantic-ui-react'

const SentenceRow = ({ sentence, removeSentence }) => (
    <Table.Row>
        <Table.Cell>{sentence.title}</Table.Cell>
        <Table.Cell>{sentence.book_name}</Table.Cell>
        <Table.Cell>{sentence.sentence}</Table.Cell>
        <Table.Cell>{sentence.datetime}</Table.Cell>
        <Table.Cell>{sentence.page}</Table.Cell>
        <Table.Cell>{sentence.label}</Table.Cell>
        <Table.Cell>
            <Button onClick={(e) => {e.stopPropagation(); removeSentence(sentence.id)} } icon color="red">
                <Icon name='remove' />
            </Button>
        </Table.Cell>
    </Table.Row>
)

export default SentenceRow