import React from "react";
import { Table } from 'semantic-ui-react'
import SentenceRow from '../containers/SentenceRow'

const SentenceList = ({sentences}) => {

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
                      <Table.HeaderCell></Table.HeaderCell>
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

export default SentenceList