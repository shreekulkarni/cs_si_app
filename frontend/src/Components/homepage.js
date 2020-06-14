import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {NavigationHeaderBar} from './navHeader';
import {Container, Row, Col} from 'reactstrap';

class homepage extends React.Component {
    render() {
        return (
                <Router>
                    <div><NavigationHeaderBar/></div>
                    <h1 style={header}>CS 180</h1>
                </Router>
        );
    };
}

const divpage = {
    flex: 1,
    flexDirection: "column",
    alignitems: 'center',
    justifyContent: 'center'
}

const navbarDiv = {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
}

const header = {
    padding: "10px 20px",
    textAlign: "center",
    color: "Black",
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center'
}

// eslint-disable-next-line
const header2 = {
    padding: "10px 20px",
    textAlign: "center",
    color: "Black",
    fontSize: 30
}

export default homepage;

