import React from "react";
import {Link} from "react-router-dom";

export default function Homepage() {
    return (
        <div style={divStyle}>
            <div>
                <h1>CS 180 SI</h1>
            </div>
            <div style={menuStyle}>
                <Link to={'/schedule'} style={navli}>Schedule</Link>
                <Link to={'/'} style={navli}>Slides</Link>
                <Link to={'/'} style={navli}>Contact</Link>
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
    transform: 'translate(-50%, -50%)',
}

const menuStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}

const navli = {
    display: "block",
    padding: "8px 15px",
    color: "green"
}
