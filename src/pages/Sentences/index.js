import React,{Component} from "react";
import { Grid, Header } from 'semantic-ui-react'

class Sentences extends Component {
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
                    Sentences
                </Grid.Column>
            </Grid>
        </div>
    )
  }
}

export default Sentences