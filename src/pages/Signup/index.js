import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { register } from '../../redux/actions/signup';
import './style.css'

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { registering, success  } = this.props;
        const { user, submitted } = this.state;

        if(success)
            return <Redirect to="/signup-success" />;

        return (
            <Grid textAlign='center' verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Segment >
                        <Header as='h2' color='teal' textAlign='center'>
                            Register
                        </Header>
                    </Segment>
                    <Form name="form" onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                            <Form.Field className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                                <label htmlFor="firstName">
                                    First Name
                                    {submitted && !user.firstName &&
                                        <div className="help-block">*First Name is required</div>
                                    }
                                </label>
                                <Form.Input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                                
                            </Form.Field>
                            <Form.Field className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                                <label htmlFor="lastName">
                                    Last Name
                                    {submitted && !user.lastName &&
                                        <div className="help-block">*Last Name is required</div>
                                    }
                                </label>
                                <Form.Input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                                <label htmlFor="username">
                                    Username
                                    {submitted && !user.username &&
                                        <div className="help-block">*Username is required</div>
                                    }
                                </label>
                                <Form.Input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                <label htmlFor="password">
                                    Password
                                    {submitted && !user.password &&
                                        <div className="help-block">*Password is required</div>
                                    }
                                </label>
                                <Form.Input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field className="form-group">
                                <Button type="submit" size="large" color="teal">Register</Button>
                                {registering && 
                                    <img alt="loading.." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                                <Button as={Link} to="/login" size="large" color="grey">Cancel</Button>
                            </Form.Field>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        registring: state.signup.registration,
        success: state.signup.success,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: () => dispatch(register())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);