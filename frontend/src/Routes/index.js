// import {Switch, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Route from './Route';

import React from 'react';
import Homepage from '../Components/Homepage';
import Schedule from '../Components/Schedule';

export default function Routes() {
    return(
        // eslint-disable-next-line react/react-in-jsx-scope
        <Switch>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <Route path={"/home"} component={Homepage}/>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <Route path={"/schedule"} component={Schedule}/>
        </Switch>
    );
}

