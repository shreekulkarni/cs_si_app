import React from 'react';
import {NavigationHeaderBar} from "./navHeader"

class schedule extends React.Component {
    render() {
        return (
            <div>
                <NavigationHeaderBar/>
                <h1 style={header}>schedule</h1>
            </div>
        );
    };
}

const header = {
    padding: "10px 20px",
    textAlign: "center",
    color: "Black",
    fontSize: "22px"
}

export default schedule;
