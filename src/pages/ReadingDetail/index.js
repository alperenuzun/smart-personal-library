import React,{Component} from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { Grid, Header } from 'semantic-ui-react'
import {fetchReading} from '../../redux/actions/mybooks'
import Notes from "./components/Notes";
import Sentences from "./components/Sentences";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class ReadingDetail extends Component {
  constructor(props){
    super(props);
    props.fetchReading(this.props.user, props.match.params.readingId);
  }

  render(){
    const { error, loading, notes, sentences, dates, readingVals } = this.props;
    if (error) {
        return <div style={{marginTop:'5em'}}>Error! {error.message}</div>;
    }

    if (loading) {
        return <div style={{marginTop:'5em'}}>Loading Reading Details...</div>;
    }

    const options = {
        title: {
            text: 'Your Reading For a Week'
        },
        xAxis:{
            categories : dates
        },
        series: [{
            showInLegend: false,
            name: 'Page',
            data: readingVals
        }]
    };
    
    return(
        <div>
            <Grid columns={2} padded>
                <Grid.Column>
                    <div className="book-wrapper">
                        <Header dividing>Your Notes</Header>
                        <Notes notes={notes} />
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div className="book-wrapper">
                        <Header dividing>Your Sentences</Header>
                        <Sentences sentences={sentences} />
                    </div>
                </Grid.Column>
            </Grid>
            <Grid columns={1} padded>
                <Grid.Column>
                    <div className="book-wrapper">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
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
        notes: state.readingDetail.notes,
        sentences: state.readingDetail.sentences,
        dates: state.readingDetail.readingDates,
        readingVals: state.readingDetail.readingValues,
        loading: state.readingDetail.loading,
        error: state.readingDetail.error,
        user: token ? jwtDecode(token) : state.auth.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReading: (user, bookId) => dispatch(fetchReading(user,bookId))
    }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(ReadingDetail) )