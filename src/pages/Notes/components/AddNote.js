import React from 'react'
import { Button, Header, Icon, Modal, Form, Segment, Message, Dropdown } from 'semantic-ui-react'

const getCurDateTime = () => {
    const date = new Date();
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate() +" "+
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

const AddNote = ({
    addNote, title, note, page, label, changeNoteTitle, changeNoteNote,
    changeNotePage, changeNoteLabel, addFormStatus, user, book, books, changeNoteBook
}) =>  {

    const noteParams = {
        user: user,
        title: title,
        note: note,
        page: page,
        book: book,
        label:label,
        datetime: getCurDateTime()
    }
    const labelOptions = [
        { key: '1', value: '1', text: 'Insightful' },
        { key: '2', value: '2', text: 'Good to know' },
        { key: '3', value: '3', text: 'Self Improvement' }
    ]

    return (
        <Modal trigger={<Button icon><Icon name="add"/>Add Note</Button>} size='small'>
            <Header icon='add' content={<span className="filter-header">Add Note</span>} />
            <Modal.Content>
                {addFormStatus === 1 ? <Message header='test' success /> : null}
                {addFormStatus === 2 ? <Message header='test' negative /> : null}
                <Form name="form" size="large">
                    <Segment stacked>
                        <Form.Field className={'form-group'}>
                            <label htmlFor="title">
                                Title
                                { !title && addFormStatus === 2 &&
                                    <div className="help-block">*Title is required</div>
                                }
                            </label>
                            <Form.Input type="text" name="title"
                                value={title} onChange={(e)=> changeNoteTitle(e.target.value)}
                            />
                            
                        </Form.Field>
                        <Form.Field className={'form-group'}>
                            <label htmlFor="note">
                                Note
                                { !note && addFormStatus === 2 &&
                                    <div className="help-block">*Note Name is required</div>
                                }
                            </label>
                            <Form.Input type="text" name="note"
                                value={note} onChange={(e)=> changeNoteNote(e.target.value)}
                            />
                        </Form.Field>
                        <Form.Group widths='equal'>
                            <Form.Field className={'form-group'}>
                                <label htmlFor="books">Book Name</label>
                                <Dropdown placeholder='Book Name' value={book} options={books}
                                    onChange={(e,{value})=>changeNoteBook(value)} selection
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
                                    value={page} onChange={(e)=> changeNotePage(e.target.value)}
                                />
                            </Form.Field>
                        </Form.Group>
                        <Form.Field className={'form-group'}>
                            <label htmlFor="label">
                                Label
                            </label>
                            <Dropdown placeholder='Book Name' value={label} options={labelOptions}
                                onChange={(e,{value})=>changeNoteLabel(value)} selection
                            />
                        </Form.Field>
                    </Segment>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' inverted>
                    <Icon name='remove' /> Cancel
                </Button>
                <Button onClick={(e) => addNote(e,noteParams)} color='green' inverted>
                    <Icon name='checkmark' /> Add
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default AddNote