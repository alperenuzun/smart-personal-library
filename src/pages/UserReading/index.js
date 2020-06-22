import React,{Component} from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { Grid, Header } from 'semantic-ui-react'
import UserReadingList from './components/UserReadingList'
import {fetchUserReadings} from '../../redux/actions/userReadings'
import AddUserReading from "./containers/AddUserReading";

class UserReadings extends Component {
  constructor(props){
    super(props);
    props.fetchUserReadings(this.props.user);
  }

  render(){
    const { error, loading, userReadings, user} = this.props;
    if (error) {
        return <div style={{marginTop:'5em'}}>Error! {error.message}</div>;
    }

    if (loading) {
        return <div style={{marginTop:'5em'}}>Loading UserReadings...</div>;
    }
    
    return(
        <div>
            <Grid columns={1} padded>
                <Grid.Column>
                    <AddUserReading user={user} />
                </Grid.Column>
                <Grid.Column>
                    <div className="book-wrapper">
                        <Header dividing>Your Readings</Header>
                        <UserReadingList userReadings={userReadings} />
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
        userReadings: state.userReadings.items,
        loading: state.userReadings.loading,
        error: state.userReadings.error,
        user: token ? jwtDecode(token) : state.auth.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserReadings: (user) => dispatch(fetchUserReadings(user))
    }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(UserReadings) )