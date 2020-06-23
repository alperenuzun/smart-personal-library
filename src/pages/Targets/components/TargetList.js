import React from "react";
import { Table } from 'semantic-ui-react'
import TargetRow from '../containers/TargetRow'

const TargetList = ({targets}) => {

    if(targets && targets.length){
        return (
          <Table basic='very'>
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell></Table.HeaderCell>
                      <Table.HeaderCell>Page No</Table.HeaderCell>
                      <Table.HeaderCell>Book Count</Table.HeaderCell>
                      <Table.HeaderCell>Start Date</Table.HeaderCell>
                      <Table.HeaderCell>Finish Date</Table.HeaderCell>
                      <Table.HeaderCell>Progress</Table.HeaderCell>
                      <Table.HeaderCell>Datetime</Table.HeaderCell>
                      <Table.HeaderCell></Table.HeaderCell>
                  </Table.Row>
              </Table.Header>
              <Table.Body>
                  {targets.map((target, index) => {
                    return <TargetRow target={target} key={index} />;
                  })}
              </Table.Body>
          </Table>
        )
    }

    return (<div>There is no targets yet!</div>)
}

export default TargetList