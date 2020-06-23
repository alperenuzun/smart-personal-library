import React from "react";
import { Table, Button, Icon, Label } from 'semantic-ui-react'

const getColor = (labelId) => {
    if(labelId === '1') return 'green';
    if(labelId === '2') return 'teal';
    return 'orange';
}

const SentenceRow = ({ sentence, removeSentence }) => (
    <Table.Row>
        <Table.Cell>{sentence.title}</Table.Cell>
        <Table.Cell>{sentence.book_name}</Table.Cell>
        <Table.Cell>{sentence.sentence}</Table.Cell>
        <Table.Cell>{sentence.datetime}</Table.Cell>
        <Table.Cell>{sentence.page}</Table.Cell>
        <Table.Cell>
            <Label as='a' color={getColor(sentence.labelId)} tag>
                {sentence.label}
            </Label>
        </Table.Cell>
        <Table.Cell>
            <Button onClick={(e) => {e.stopPropagation(); removeSentence(sentence.id)} } icon color="red">
                <Icon name='remove' />
            </Button>
        </Table.Cell>
    </Table.Row>
)

export default SentenceRow