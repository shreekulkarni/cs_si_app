import {Switch, Route} from 'react-router-dom';

import Homepage from '../Components/homepage';
import Schedule from '../Components/schedule';

export default function Routes() {
    return(
        // eslint-disable-next-line react/react-in-jsx-scope
        <Switch>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <Route path={"/"} component={Homepage}/>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <Route path={"/schedule"} component={Schedule}/>
        </Switch>
    );
}

