import React,{Component} from "react";
import { Form, Button, Grid } from "semantic-ui-react";

class SearchBox extends Component {
    onSubmitHandler(e){
        e.preventDefault();
        const books = this.props.books;
        this.props.fetchBooks(books, this.props.searchTerm);
    }

    onChangeHandler(e){
        this.props.search(e.target.value);
    }

    render(){
        return (
            <Form onSubmit={(e) => this.onSubmitHandler(e)}>
                <Grid columns={2}>
                    <Grid.Column>
                        <Form.Input
                            type="search" placeholder="Search For Books"
                            value={this.props.searchTerm} size='huge'
                            onChange={(e)=> this.onChangeHandler(e)}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Button type="submit" size="huge">Search</Button>
                    </Grid.Column>
                </Grid>
            </Form>
        );
    }
}

export default SearchBox