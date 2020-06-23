import React from "react";
import { Table, Button, Icon, Label, Progress } from 'semantic-ui-react'

const getColor = (percentage) => {
    if(percentage < 40) return 'orange';
    if(percentage > 70) return 'green';
    return 'yellow';
}

const TargetRow = ({ target, removeTarget }) => (
    <Table.Row>
        <Table.Cell>
            <Label color={target.active ? 'green' : 'red'} horizontal>
                {target.active ? 'active' : 'passive'}
            </Label>
        </Table.Cell>
        <Table.Cell>{target.page_no ? target.page_no : '-'}</Table.Cell>
        <Table.Cell>{target.book_count ? target.book_count : '-'}</Table.Cell>
        <Table.Cell>{target.start_date}</Table.Cell>
        <Table.Cell>{target.finish_date}</Table.Cell>
        <Table.Cell>
            <Progress percent={target.progress} color={getColor(target.progress)} progress />
        </Table.Cell>
        <Table.Cell>{target.datetime}</Table.Cell>
        <Table.Cell>
            <Button onClick={(e) => {e.stopPropagation(); removeTarget(target.id)} } icon color="red">
                <Icon name='remove' />
            </Button>
        </Table.Cell>
    </Table.Row>
)

export default TargetRow