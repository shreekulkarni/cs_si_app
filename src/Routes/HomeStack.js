import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Homepage from '../Components/Homepage';
import Schedule from '../Components/Schedule';

const screens = {
    Home: {
        screen: Homepage
    },
    Schedule: {
        screen: Schedule
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
