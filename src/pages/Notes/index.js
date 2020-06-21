import React,{Component} from "react";
import { Grid, Header } from 'semantic-ui-react'

class Notes extends Component {
  /* constructor(props){
    super(props);
    props.fetchNotes(this.props.user);
  } */

  render(){
    /* const { error, loading, notes} = this.props;
    if (error) {
        return <div style={{marginTop:'5em'}}>Error! {error.message}</div>;
    }

    if (loading) {
        return <div style={{marginTop:'5em'}}>Loading Reading Details...</div>;
    } */
    
    return(
        <div>
            <Grid columns={1} padded>
                <Grid.Column>
                    notes
                </Grid.Column>
            </Grid>
        </div>
    )
  }
}

/* const mapStateToProps = state => {
    const token = localStorage.getItem("jwtToken");
    return {
        notes: state.readingDetail.notes,
        loading: state.readingDetail.loading,
        error: state.readingDetail.error,
        user: token ? jwtDecode(token) : state.auth.user,
    };
} */

/* const mapDispatchToProps = (dispatch) => {
    return {
        fetchReading: (user, bookId) => dispatch(fetchReading(user,bookId))
    }
} */

// export default withRouter( connect(mapStateToProps, null)(Notes) )
export default Notes