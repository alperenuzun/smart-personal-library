import React from "react";
import { Table } from 'semantic-ui-react'
import UserReadingRow from '../containers/UserReadingRow'

const UserReadingList = ({userReadings}) => {

    if(userReadings && userReadings.length){
        return (
          <Table basic='very'>
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell>Book Name</Table.HeaderCell>
                      <Table.HeaderCell>Page</Table.HeaderCell>
                      <Table.HeaderCell>Datetime</Table.HeaderCell>
                      <Table.HeaderCell></Table.HeaderCell>
                  </Table.Row>
              </Table.Header>
              <Table.Body>
                  {userReadings.map((userReading, index) => {
                    return <UserReadingRow userReading={userReading} key={index} />;
                  })}
              </Table.Body>
          </Table>
        )
    }

    return (<div>There is no userReadings yet!</div>)
}

export default UserReadingList