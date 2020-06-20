import React from 'react'
import { Table } from 'semantic-ui-react'

const SentenceRow = ({ sentence }) => (
    <Table.Row>
        <Table.Cell>
            s
        </Table.Cell>
        <Table.Cell>{sentence.title}</Table.Cell>
        <Table.Cell>{sentence.sentence}</Table.Cell>
        <Table.Cell>{sentence.datetime}</Table.Cell>
        <Table.Cell>{sentence.page}</Table.Cell>
    </Table.Row>
)

const Sentences = ({sentences}) => {

    if(sentences && sentences.length){
        return (
          <Table basic='very'>
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell></Table.HeaderCell>
                      <Table.HeaderCell>Title</Table.HeaderCell>
                      <Table.HeaderCell>Sentence</Table.HeaderCell>
                      <Table.HeaderCell>Datetime</Table.HeaderCell>
                      <Table.HeaderCell>Page</Table.HeaderCell>
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