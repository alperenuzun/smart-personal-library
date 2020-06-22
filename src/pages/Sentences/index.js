import React,{Component} from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { Grid, Header } from 'semantic-ui-react'
import SentenceList from './components/SentenceList'
import {fetchSentences} from '../../redux/actions/sentences'
import AddSentence from "./containers/AddSentence";

class Sentences extends Component {
  constructor(props){
    super(props);
    props.fetchSentences(this.props.user);
  }

  render(){
    const { error, loading, sentences, user} = this.props;
    if (error) {
        return <div style={{marginTop:'5em'}}>Error! {error.message}</div>;
    }

    if (loading) {
        return <div style={{marginTop:'5em'}}>Loading Sentences...</div>;
    }
    
    return(
        <div>
            <Grid columns={1} padded>
                <Grid.Column>
                    <AddSentence user={user} />
                </Grid.Column>
                <Grid.Column>
                    <div className="book-wrapper">
                        <Header dividing>Your Sentences</Header>
                        <SentenceList sentences={sentences} />
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
        sentences: state.sentences.items,
        loading: state.sentences.loading,
        error: state.sentences.error,
        user: token ? jwtDecode(token) : state.auth.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSentences: (user) => dispatch(fetchSentences(user))
    }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Sentences) )