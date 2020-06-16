// import {Switch, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Route from './Route';

import React from 'react';
import Homepage from '../Pages/Homepage';
import Schedule from '../Pages/Schedule';
import Contact from "../Pages/Contact";

export default function Routes() {
    return(
        // eslint-disable-next-line react/react-in-jsx-scope
        <Switch>
            <Route path="/schedule" component={Schedule}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/" component={Homepage}/>
        </Switch>
    );
}

