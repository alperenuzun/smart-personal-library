import React from 'react'
import { Button, Header, Icon, Modal, Form, Segment, Message, Dropdown } from 'semantic-ui-react'

const getCurDateTime = () => {
    const date = new Date();
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate() +" "+
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

const AddSentence = ({
    addSentence, title, sentence, page, label, changeSentenceTitle, changeSentenceSentence, labelText,
    changeSentencePage, changeSentenceLabel, addFormStatus, user, book, books, changeSentenceBook
}) =>  {

    const labelOptions = [
        { key: '1', value: '1', text: 'Insightful' },
        { key: '2', value: '2', text: 'Good to know' },
        { key: '3', value: '3', text: 'Self Improvement' }
    ]

    const bookText = books.filter((item) => item.value === book);
    const sentenceParams = {
        user: user,
        title: title,
        sentence: sentence,
        page: page,
        bookParam: book,
        book_name: bookText.length ? bookText[0].text : "",
        label: labelText,
        labelParam: label,
        datetime: getCurDateTime()
    }
    
    return (
        <Modal trigger={<Button icon><Icon name="add"/>Add Sentence</Button>} size='small'>
            <Header icon='add' content={<span className="filter-header">Add Sentence</span>} />
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
                                value={title} onChange={(e)=> changeSentenceTitle(e.target.value)}
                            />
                            
                        </Form.Field>
                        <Form.Field className={'form-group'}>
                            <label htmlFor="sentence">
                                Sentence
                                { !sentence && addFormStatus === 2 &&
                                    <div className="help-block">*Sentence Name is required</div>
                                }
                            </label>
                            <Form.Input type="text" name="sentence"
                                value={sentence} onChange={(e)=> changeSentenceSentence(e.target.value)}
                            />
                        </Form.Field>
                        <Form.Group widths='equal'>
                            <Form.Field className={'form-group'}>
                                <label htmlFor="books">Book Name</label>
                                <Dropdown placeholder='Book Name' value={book} options={books}
                                    onChange={(e,{value})=>changeSentenceBook(value)} selection
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
                                    value={page} onChange={(e)=> changeSentencePage(e.target.value)}
                                />
                            </Form.Field>
                        </Form.Group>
                        <Form.Field className={'form-group'}>
                            <label htmlFor="label">
                                Label
                            </label>
                            <Dropdown placeholder='Book Name' value={label} options={labelOptions}
                                onChange={(e,{value})=>changeSentenceLabel(value,labelOptions[parseInt(value)-1].text)} selection
                            />
                        </Form.Field>
                    </Segment>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' inverted>
                    <Icon name='remove' /> Cancel
                </Button>
                <Button onClick={(e) => addSentence(e,sentenceParams)} color='green' inverted>
                    <Icon name='checkmark' /> Add
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default AddSentence