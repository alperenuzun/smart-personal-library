import React from "react";
import { Table, Button, Icon } from 'semantic-ui-react'

const UserReadingRow = ({ userReading, removeUserReading }) => (
    <Table.Row>
        <Table.Cell>{userReading.book_name}</Table.Cell>
        <Table.Cell>{userReading.page}</Table.Cell>
        <Table.Cell>{userReading.datetime}</Table.Cell>
        <Table.Cell>
            <Button onClick={(e) => {e.stopPropagation(); removeUserReading(userReading.id)} } icon color="red">
                <Icon name='remove' />
            </Button>
        </Table.Cell>
    </Table.Row>
)

export default UserReadingRow