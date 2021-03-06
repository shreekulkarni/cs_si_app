import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    Platform
} from "react-native";
import {Button} from "react-native-web";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    contactHandler = () => {
        //TODO: navigate to the contact page
    }

    slideHandler = () => {
        //TODO: navigate to the slides page
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>CS 180 SI</Text>
                </View>
                <View style={Platform.OS === 'web' ? styles.menuWeb : styles.menuMobile}>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('Schedule')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Schedule</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('Contact')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Contact</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('Slides')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Slides</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282c34',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        padding: Dimensions.get('window').height / 40,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').height / 20,
    },
    button: {
        borderRadius: 20,
        // marginVertical: 20,
        padding: Platform.OS === 'web' ? Dimensions.get('window').width / 40 : Dimensions.get('window').height / 40,
        // marginTop: Dimensions.get('window').height / 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: Dimensions.get('window').height / 40,
    },
    menuWeb: {
        flexDirection: 'row',
        backgroundColor: '#282c34',
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuMobile: {
        flexDirection: 'column',
        backgroundColor: '#282c34',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Homepage;
