import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommonPage from './CommonPage'



class HomePage extends React.Component {
    render() {
        const { user, users } = this.props;
        return (
            <div className='HomePage'  >
                <CommonPage/>
                <main>
            <div className="container "  >
                
                <h1 >Hi {user.firstName}!</h1>
                <h3>This is User page</h3>
                <p>You're logged in with Container App that is build using React-redux!!</p>
                
                <p>
                    <Link style={{backgroundColor: "lightblue"}} to="/login">Logout</Link>
                </p>
            </div>
            </main>
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