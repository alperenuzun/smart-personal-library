import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import jwtDecode from 'jwt-decode'

class Navbar extends Component {

  render() {
    const { user } = this.props
    const activeItem = this.props.location.pathname.split("/")[1];
    
    return (
        <Menu icon='labeled' inverted stackable size='small'>
            <Menu.Item as={Link} to="/home" name='home' active={activeItem === 'home'}>
                <Icon name='home' />
                Home
            </Menu.Item>
            <Menu.Item as={Link} to="/mybooks" name='mybooks' active={activeItem === 'mybooks'}>
                <Icon name='book' />My Books
            </Menu.Item>
            <Menu.Item as={Link} to="/targets" name='targets' active={activeItem === 'targets'}>
                <Icon name='target' />Targets
            </Menu.Item>
            <Menu.Item as={Link} to="/search" name='search' active={activeItem === 'search'}>
                <Icon name='search' />Search
            </Menu.Item>
            <Menu.Item as={Link} to="/sentences" name='sentences' active={activeItem === 'sentences'}>
                <Icon name='heart' />Sentences
            </Menu.Item>
            <Menu.Item as={Link} to="/notes" name='sentences' active={activeItem === 'notes'}>
                <Icon name='bookmark' />Notes
            </Menu.Item>
            <Menu.Item as={Link} to="/userreading" name='userreading' active={activeItem === 'userreading'}>
                <Icon name='bookmark' />My Reading
            </Menu.Item>

            <Menu.Menu position='right' style={{padding: '7px 0'}}>
                <Menu.Item as={Link} to="/profile" name='profile' active={activeItem === 'profile'}>
                    <Icon name='user' />Profile
                </Menu.Item>
              { (user.length !== 0 && user !== "" && user !== undefined) ? 
                <Menu.Item as={Link} to="/login">
                    <Icon name='sign-out' />Logout - { user }
                </Menu.Item>
                : 
                <Menu.Item as={Link} to="/login" active={activeItem === 'login'}>
                    <Icon name='sign-in' />Login
                </Menu.Item>
              }
            </Menu.Menu>
        </Menu>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const token = localStorage.getItem("jwtToken");
  return {
    user: token ? jwtDecode(token) : state.auth.user
  }
};

export default withRouter( connect(mapStateToProps)(Navbar) )

