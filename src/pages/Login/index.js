import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { connect } from "react-redux";
import { login, logout } from "../../redux/actions/auth";
import { NavLink, Redirect } from 'react-router-dom';

class Login extends Component {
    componentDidMount() {
        this.props.logout();
    }
    state = {
        username: '',
        password: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        this.props.login(username, password);
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        const { isAuthenticated, error, errorMessage } = this.props;
        
        if (isAuthenticated)
            return (<Redirect to='/home' />)

        let errorMsg = error && !isAuthenticated ? <Message>{errorMessage}</Message> : null;
        let successMsg = isAuthenticated ? <Message>Login Success</Message> : null;
            
        return (
            <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='/images/avatar.png' /> Log-in to your account
                    </Header>
                    <Form onSubmit={(e) => this.handleSubmit(e)} size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left'
                                placeholder="Username" onChange={(e)=>this.handleChange(e)} required name="username" />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                name='password'
                                onChange={this.handleChange}
                            />
                    
                            <Button color='teal' type="submit" fluid size='large'>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <NavLink to="/signup">Sign Up</NavLink>
                    </Message>
                    {successMsg}
                    {errorMsg}
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    const { isAuthenticated, error, errorMessage, user } = state.auth;
    return {
        isAuthenticated: isAuthenticated,
        error: error,
        errorMessage: errorMessage,
        user: user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user, password) => dispatch(login(user, password)),
        logout: () => dispatch(logout())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login);