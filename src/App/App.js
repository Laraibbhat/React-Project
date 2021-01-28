import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import  PrivateRoute  from '../_components/PrivateRoute';
import HomePage from '../HomePage/HomePage';
import HomePageAdmin  from '../HomePage/HomePageAdmin';
import CommonPage  from '../HomePage/CommonPage';
import LoginPage  from '../LoginPage/LoginPage';
//import {WelcomePage} from "../WelcomePage"

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
           <div className="">
                <div className="">
                    <div className="">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                 <Route exact path="/" component={LoginPage} />
                                <PrivateRoute path="/Home" component={HomePage} />
                                <PrivateRoute path="/HomePageAdmin" component={HomePageAdmin} />
                                <Route  path="/login" component={LoginPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export default  connectedApp ; 