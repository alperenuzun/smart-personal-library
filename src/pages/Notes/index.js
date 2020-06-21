import React,{Component} from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { Grid, Header } from 'semantic-ui-react'
import NoteList from './components/NoteList'
import {fetchNotes} from '../../redux/actions/notes'
import AddNote from "./containers/AddNote";

class Notes extends Component {
  constructor(props){
    super(props);
    props.fetchNotes(this.props.user);
  }

  render(){
    const { error, loading, notes, user} = this.props;
    if (error) {
        return <div style={{marginTop:'5em'}}>Error! {error.message}</div>;
    }

    if (loading) {
        return <div style={{marginTop:'5em'}}>Loading Notes...</div>;
    }
    
    return(
        <div>
            <Grid columns={1} padded>
                <Grid.Column>
                    <AddNote user={user} />
                </Grid.Column>
                <Grid.Column>
                    <div className="book-wrapper">
                        <Header dividing>Your Notes</Header>
                        <NoteList notes={notes} />
                    </div>
                </Grid.Column>
            </Grid>
        </div>
    )
  }
}

const mapStateToProps = state => {
    const token = localStorage.getItem("jwtToken");
    return {
        notes: state.notes.items,
        loading: state.notes.loading,
        error: state.notes.error,
        user: token ? jwtDecode(token) : state.auth.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotes: (user) => dispatch(fetchNotes(user))
    }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Notes) )