import React from "react";
import { Table, Button, Icon } from 'semantic-ui-react'

const TargetRow = ({ target, removeTarget }) => (
    <Table.Row>
        <Table.Cell>{target.active}</Table.Cell>
        <Table.Cell>{target.page_no ? target.page_no : '-'}</Table.Cell>
        <Table.Cell>{target.book_count ? target.book_count : '-'}</Table.Cell>
        <Table.Cell>{target.start_date}</Table.Cell>
        <Table.Cell>{target.finish_date}</Table.Cell>
        <Table.Cell>{target.datetime}</Table.Cell>
        <Table.Cell>
            <Button onClick={(e) => {e.stopPropagation(); removeTarget(target.id)} } icon color="red">
                <Icon name='remove' />
            </Button>
        </Table.Cell>
    </Table.Row>
)

export default TargetRow