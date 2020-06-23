import React from 'react'
import { Table, Label } from 'semantic-ui-react'

const getColor = (labelId) => {
    if(labelId === '1') return 'green';
    if(labelId === '2') return 'teal';
    return 'orange';
}

const SentenceRow = ({ sentence }) => (
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
    </Table.Row>
)

const Sentences = ({sentences}) => {

    if(sentences && sentences.length){
        return (
            <Table basic='very'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Book Name</Table.HeaderCell>
                        <Table.HeaderCell>Sentence</Table.HeaderCell>
                        <Table.HeaderCell>Datetime</Table.HeaderCell>
                        <Table.HeaderCell>Page</Table.HeaderCell>
                        <Table.HeaderCell>Label</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {sentences.map((sentence, index) => {
                        return <SentenceRow sentence={sentence} key={index} />;
                    })}
                </Table.Body>
            </Table>
        )
    }

    return (<div>There is no sentences yet!</div>)
}

export default Sentences