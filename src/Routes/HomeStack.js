import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Homepage from '../Components/Homepage';
import Schedule from '../Components/Schedule';
import Contact from '../Components/Contact';
import Slides from '../Components/Slides'

const screens = {
    Home: {
        screen: Homepage
    },
    Schedule: {
        screen: Schedule
    },
    Contact: {
        screen: Contact
    },
    Slides: {
        screen: Slides
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
