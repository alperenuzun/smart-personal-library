import React,{Component} from 'react'
import { connect } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { Tab, Grid } from 'semantic-ui-react'
import {fetchMyBooks} from '../../redux/actions/mybooks'
import MyBooksTab from './components/MyBooksTab'

class MyBooks extends Component{

    constructor(props) {
        super(props);
        this.props.fetchMyBooks(this.props.user, 1);
    }

    onTabChange(user,activeIndex){
        this.props.fetchMyBooks(user, activeIndex);
    }

    render(){
        const {loading, error, books, user} = this.props;

        const panes = [
            {
                menuItem: 'Will Read',
                render: () => <MyBooksTab books={books} error={error} loading={loading} />
            },
            {
                menuItem: 'Is Reading',
                render: () => <MyBooksTab books={books} error={error} loading={loading} />
            },
            {
                menuItem: 'Was Read',
                render: () => <MyBooksTab books={books} error={error} loading={loading} />
            }
        ]

        return(
            <Grid padded>
                <Grid.Column>
                    <Tab panes={panes} 
                        onTabChange={(e, { activeIndex }) => this.onTabChange(user, activeIndex+1)} 
                    />
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
  const token = localStorage.getItem("jwtToken");
  return {
    user: token ? jwtDecode(token) : state.auth.user,
    books: state.mybooks.items,
    loading: state.mybooks.loading,
    error: state.mybooks.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMyBooks: (user, status) => dispatch(fetchMyBooks(user,status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBooks)