import React from 'react';
import { Link } from 'react-router-dom';

//import 'bootstrap/dist/css/bootstrap.css'; 
import './CommonPage.css'


class CommonPage extends React.Component {
    render() {
        const { user, users } = this.props;
        return (
            <div className="commonPage">
                <nav className="nav1">
                    <div className="container1">
                        <h1 className="logo"><a href="#">Container APP</a></h1>
                        <ul>
                            <li><a href="#" className="current">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}



export default   CommonPage;