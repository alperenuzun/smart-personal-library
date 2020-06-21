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
import Navbar from './Navbar';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        
        <Router>
            <Navbar />
            <Switch>
              <Route path="/book-detail/:bookId" component={BookDetail} />
              <Route path="/reading-detail/:readingId" component={ReadingDetail} />
              <Route path="/notes" component={Notes} />
              <Route path="/sentences" component={Sentences} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/targets" component={Targets} />
              <Route path="/mybooks" component={MyBooks} />
              <Route path="/search" component={Search} />
              <Route path="/profile" component={Profile} />
              <Route path="/home" component={Home} />
              <Route path="*" component={NoMatch} />
            </Switch>
        </Router>
      </div>
    );
  }
}
