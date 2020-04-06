import React, { Component } from 'react';

import {
    View,
    BackHandler,
    Text,
    TouchableOpacity
} from "react-native";

import { appStartStyle } from '../components/ContainerStyles'

class AppStartPage extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
    }

    onBackPress = () => {
        BackHandler.removeEventListener()
        BackHandler.exitApp()
        return true
    }

    letsGo() {
        console.log(" Click of Start");
        this.props.navigation.navigate("HomePage");
    }

    render() {
        return (
            <View style={appStartStyle.mainContainer}>
                <TouchableOpacity style={appStartStyle.buttonStyle}
                    onPress={() => this.letsGo()}
                >
                    <Text style={appStartStyle.buttonText}>Get Start</Text>
                </TouchableOpacity>
            </View>
        )
    }


}

export default AppStartPage;

