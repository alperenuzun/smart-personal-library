import React from 'react'
import { Button, Header, Icon, Modal, Form, Segment, Message } from 'semantic-ui-react'

const getCurDateTime = () => {
    const date = new Date();
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate() +" "+
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

const AddTarget = ({
    addTarget, changeTargetPage, addFormStatus, user, changeTargetBookCnt, pageNo,
    changeTargetStartDate, changeTargetFinishDate, startDate, finishDate, bookCnt
}) =>  {

    const targetParams = {
        user: user,
        book_count: bookCnt,
        page_no: pageNo,
        start_date: startDate,
        finish_date: finishDate,
        datetime: getCurDateTime(),
        active: "1"
    }

    return (
        <Modal trigger={<Button icon><Icon name="add"/>Add Target</Button>} size='small'>
            <Header icon='add' content={<span className="filter-header">Add Target</span>} />
            <Modal.Content>
                {addFormStatus === 1 ? <Message header='Success' success /> : null}
                {addFormStatus === 2 ? <Message header='You should enter at least one of Book Count and Page No' negative /> : null}
                <Form name="form" size="large">
                    <Segment stacked>
                        <Form.Group widths='equal'>
                            <Form.Field className={'form-group'}>
                                <label htmlFor="page">
                                    Page No
                                </label>
                                <Form.Input type="text" name="page"
                                    value={pageNo} onChange={(e)=> changeTargetPage(e.target.value)}
                                />
                            </Form.Field>
                            <Form.Field className={'form-group'}>
                                <label htmlFor="bookCnt">
                                    Book Count
                                </label>
                                <Form.Input type="text" name="bookCnt"
                                    value={bookCnt} onChange={(e)=> changeTargetBookCnt(e.target.value)}
                                />
                            </Form.Field>
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Field className={'form-group'}>
                                <label htmlFor="startDate">
                                    Start Date
                                    { !startDate && addFormStatus === 2 &&
                                        <div className="help-block">*Page is required</div>
                                    }
                                </label>
                                <Form.Input type="text" name="startDate"
                                    value={startDate} onChange={(e)=> changeTargetStartDate(e.target.value)}
                                />
                            </Form.Field>
                            <Form.Field className={'form-group'}>
                                <label htmlFor="finishDate">
                                    Finish Date
                                    { !finishDate && addFormStatus === 2 &&
                                        <div className="help-block">*Page is required</div>
                                    }
                                </label>
                                <Form.Input type="text" name="finishDate"
                                    value={finishDate} onChange={(e)=> changeTargetFinishDate(e.target.value)}
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
                <Button onClick={(e) => addTarget(e,targetParams)} color='green' inverted>
                    <Icon name='checkmark' /> Add
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default AddTarget