import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommonPage from './CommonPage';

import { userActions } from '../_actions';

class HomePageAdmin extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <CommonPage/>
                <h1>Hi {user.firstName}!</h1>
                <h3>This content is from Admin Page which contains all the details of users </h3>
                <p>You're logged in with Container App that is build using React-redux!!</p>
                <h3>List of users are:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                            </li>
                        )}
                    </ul>
                }
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

const connectedHomePage = connect(mapStateToProps)(HomePageAdmin);
export default connectedHomePage ;