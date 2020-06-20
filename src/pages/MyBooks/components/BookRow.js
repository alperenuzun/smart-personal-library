import React from 'react'
import { Link } from "react-router-dom";
import { Table, Image, Header, Dropdown } from 'semantic-ui-react'

const BookRow = ({ book, setReadingStatus, user, type }) => {
    const statusOptions = [
        { key: '1', value: '1', text: 'Will Read' },
        { key: '2', value: '2', text: 'Is Reading' },
        { key: '3', value: '3', text: 'Was Read' }
    ]
    
    return(
        <Table.Row>
            <Table.Cell>
                <Image as={Link} to={`/reading-detail/${book.id}`}
                    className="mybooks-img" src={`/images/books/${book.img}`} 
                />
            </Table.Cell>
            <Table.Cell><Header size='small' as={Link} to={`/reading-detail/${book.id}`}>{book.name}</Header></Table.Cell>
            <Table.Cell>{book.datetime}</Table.Cell>
            <Table.Cell>{book.page}</Table.Cell>
            <Table.Cell>
                <Dropdown placeholder='Set Status' value={type}  options={statusOptions}
                    onChange={(e,{value})=>setReadingStatus(user,book.id,value)} selection
                />
            </Table.Cell>
        </Table.Row>
    )
}

export default BookRow