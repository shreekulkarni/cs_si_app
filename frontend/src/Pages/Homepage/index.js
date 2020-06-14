import React from "react";
import history from "../../Services/history";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Homepage() {
    return (
        <div style={divStyle}>
            <div>
                <h1>CS 180 SI</h1>
            </div>
            <div>
                <Link to={'/schedule'}>Schedule</Link>
            </div>
        </div>
    );
}

const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'
}
