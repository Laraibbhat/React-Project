import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommonPage from './CommonPage'

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <CommonPage/>
                <h1>Hi {user.firstName}!</h1>
                <h3>This is User page</h3>
                <p>You're logged in with Container App that is build using React-redux!!</p>
                
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export default connectedHomePage;