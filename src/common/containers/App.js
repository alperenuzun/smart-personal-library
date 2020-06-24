import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signup from '../../pages/Signup';
import Login from '../../pages/Login';
import Home from '../../pages/Home';
import Search from '../../pages/Search';
import BookDetail from '../../pages/BookDetail';
import Targets from '../../pages/Targets';
import MyBooks from '../../pages/MyBooks';
import ReadingDetail from '../../pages/ReadingDetail';
import Profile from '../../pages/Profile';
import NoMatch from '../../pages/NoMatch';
import Sentences from '../../pages/Sentences';
import Notes from '../../pages/Notes';
import UserReading from '../../pages/UserReading';
import Navbar from './Navbar';
import PrivateRoute from '../components/PrivateRoute';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        
        <Router>
            <Navbar />
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />

                <PrivateRoute path="/book-detail/:bookId" component={BookDetail} />
                <PrivateRoute path="/reading-detail/:readingId" component={ReadingDetail} />
                <PrivateRoute path="/userreading" component={UserReading} />
                <PrivateRoute path="/notes" component={Notes} />
                <PrivateRoute path="/sentences" component={Sentences} />
                <PrivateRoute path="/targets" component={Targets} />
                <PrivateRoute path="/mybooks" component={MyBooks} />
                <PrivateRoute path="/search" component={Search} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/home" component={Home} />
                
                <Route path="/" component={NoMatch} />
            </Switch>
        </Router>
      </div>
    );
  }
}
