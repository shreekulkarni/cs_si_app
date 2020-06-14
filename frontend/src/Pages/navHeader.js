import React from 'react';

export const NavigationHeaderBar = () => (
    <div>
        <ul id={"nav"}>
            <a href={'/'} style={navli}>Home</a>
            <a href={'/schedule'} style={navli}>Schedule</a>
        </ul>
    </div>
)

const navli = {
    float: "left",
    display: "block",
    padding: "8px 15px",
    color: "green"
}
