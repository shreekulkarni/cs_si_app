import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationHeaderBar = () => (
    <div>
        <ul id={"nav"}>
            <a href={'/'} style={navli}>Home</a>
            <a href={'/schedule'} style={navli}>Schedule</a>
        </ul>
    </div>
)

const navbarDiv = {
        backgroundColor: '#282c34',
}

const navli = {
    float: "left",
    display: "block",
    padding: "8px 15px",
    color: "green"
}
