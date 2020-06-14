import React from "react";
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RouterWrapper({
    component: Component, //component to render based on route
    ...rest
}) {
    return <Route {...rest} component={Component} />;
}

