import React,{Component} from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { Grid, Header } from 'semantic-ui-react'
import TargetList from './components/TargetList'
import {fetchTargets} from '../../redux/actions/targets'
import AddTarget from "./containers/AddTarget";

class Targets extends Component {
  constructor(props){
    super(props);
    props.fetchTargets(this.props.user);
  }

  render(){
    const { error, loading, targets, user} = this.props;
    if (error) {
        return <div style={{marginTop:'5em'}}>Error! {error.message}</div>;
    }

    if (loading) {
        return <div style={{marginTop:'5em'}}>Loading Targets...</div>;
    }
    
    return(
        <div>
            <Grid columns={1} padded>
                <Grid.Column>
                    <AddTarget user={user} />
                </Grid.Column>
                <Grid.Column>
                    <div className="book-wrapper">
                        <Header dividing>Your Targets</Header>
                        <TargetList targets={targets} />
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
        targets: state.targets.items,
        loading: state.targets.loading,
        error: state.targets.error,
        user: token ? jwtDecode(token) : state.auth.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTargets: (user) => dispatch(fetchTargets(user))
    }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Targets) )