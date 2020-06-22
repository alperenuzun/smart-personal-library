import React from 'react'
import { Button, Header, Icon, Modal, Form, Segment, Message, Dropdown } from 'semantic-ui-react'

const getCurDateTime = () => {
    const date = new Date();
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate() +" "+
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

const AddUserReading = ({
    addUserReading, page, changeUserReadingBook,
    changeUserReadingPage, addFormStatus, user, book, books
}) =>  {

    const bookText = books.filter((item) => item.value === book);
    const userReadingParams = {
        user: user,
        page: page,
        bookParam: book,
        book_name: bookText.length ? bookText[0].text : "",
        datetime: getCurDateTime()
    }
    
    return (
        <Modal trigger={<Button icon><Icon name="add"/>Add UserReading</Button>} size='small'>
            <Header icon='add' content={<span className="filter-header">Add UserReading</span>} />
            <Modal.Content>
                {addFormStatus === 1 ? <Message header='test' success /> : null}
                {addFormStatus === 2 ? <Message header='test' negative /> : null}
                <Form name="form" size="large">
                    <Segment stacked>
                        <Form.Group widths='equal'>
                            <Form.Field className={'form-group'}>
                                <label htmlFor="books">Book Name</label>
                                <Dropdown placeholder='Book Name' value={book} options={books}
                                    onChange={(e,{value})=>changeUserReadingBook(value)} selection
                                />
                            </Form.Field>
                            <Form.Field className={'form-group'}>
                                <label htmlFor="page">
                                    Page
                                    { !page && addFormStatus === 2 &&
                                        <div className="help-block">*Page is required</div>
                                    }
                                </label>
                                <Form.Input type="text" name="page"
                                    value={page} onChange={(e)=> changeUserReadingPage(e.target.value)}
                                />
                            </Form.Field>
                        </Form.Group>
                    </Segment>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' inverted>
                    <Icon name='remove' /> Cancel
                </Button>
                <Button onClick={(e) => addUserReading(e,userReadingParams)} color='green' inverted>
                    <Icon name='checkmark' /> Add
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default AddUserReading