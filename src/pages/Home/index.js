import React,{Component} from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { Grid, Segment } from 'semantic-ui-react'
import {fetchHome} from '../../redux/actions/home'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import './style.css'

class Home extends Component {
    constructor(props){
        super(props);
        props.fetchHome(this.props.user);
    }
    
    render(){
        const { error, loading, willRead, isReading, wasRead, last30BookCount,
            last30PageDate, last30Page, lastYearBookDate, lastYearBook, totalTarget
        } = this.props;

        if (error) {
            return <div style={{marginTop:'5em'}}>Error! {error.message}</div>;
        }
    
        if (loading) {
            return <div style={{marginTop:'5em'}}>Loading Home Page...</div>;
        }
    
        const optionsLast30Page = {
            title: {
                text: 'Last 30 Days of Pages You Have Read'
            },
            xAxis:{
                categories : last30PageDate
            },
            series: [{
                showInLegend: false,
                name: 'Page',
                data: last30Page
            }]
        };

        const optionsLastYear = {
            title: {
                text: 'The Books You Have Read For a Year'
            },
            xAxis:{
                categories : lastYearBookDate
            },
            series: [{
                showInLegend: false,
                name: 'Page',
                data: lastYearBook
            }]
        };

        return(
        <div>
            <Grid columns={5} padded>
                <Grid.Column>
                    <Segment color='orange'>
                        Books Will Read
                        <p className="home-title-number">{willRead}</p>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment color='teal'>
                        Books Is Reading
                        <p className="home-title-number">{isReading}</p>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment color='olive'>
                        Books Was Read
                        <p className="home-title-number">{wasRead}</p>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment color='purple'>
                        Books Count in Last 30 Days
                        <p className="home-title-number">{last30BookCount}</p>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment color='brown'>
                        Total Targets
                        <p className="home-title-number">{totalTarget}</p>
                    </Segment>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded>
                <Grid.Column>
                    <Segment>
                        <HighchartsReact highcharts={Highcharts} options={optionsLastYear} />
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        <HighchartsReact highcharts={Highcharts} options={optionsLast30Page} />
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
        );
    }
}

const mapStateToProps = state => {
    const token = localStorage.getItem("jwtToken");
    return {
        willRead: state.home.willRead,
        isReading: state.home.isReading,
        wasRead: state.home.wasRead,
        last30BookCount: state.home.last30BookCount,
        last30PageDate: state.home.last30PageDate,
        last30Page: state.home.last30Page,
        lastYearBookDate: state.home.lastYearBookDate,
        lastYearBook: state.home.lastYearBook,
        totalTarget: state.home.totalTarget,
        loading: state.home.loading,
        error: state.home.error,
        user: token ? jwtDecode(token) : state.auth.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHome: (user) => dispatch(fetchHome(user))
    }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Home) )