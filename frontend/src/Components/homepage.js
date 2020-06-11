import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import { NavigationBar } from './navbar';

class homepage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <NavigationBar/>
                </Router>
            </React.Fragment>
        );
    };
}
// eslint-disable-next-line
const header = {
    padding: "10px 20px",
    textAlign: "center",
    color: "Black",
    fontSize: 40
}

// eslint-disable-next-line
const header2 = {
    padding: "10px 20px",
    textAlign: "center",
    color: "Black",
    fontSize: 30
}

export default homepage;

