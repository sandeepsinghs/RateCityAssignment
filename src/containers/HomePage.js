import React, { Component } from 'react';

import {
    View,
    BackHandler,
    Text,
    TextInput,
    FlatList,
    Dimensions,
    Alert,
    TouchableOpacity
} from "react-native";

import { appStartStyle, homeStyle } from '../components/ContainerStyles';
import { connect } from 'react-redux'
import Colors from "../components/Colors";

import { getHomeLoan } from '../actions/MainActions';

class HomePage extends Component {

    componentDidMount() {
        this.props.getLoanDetails();
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

    renderItem(data) {
        let { item, index } = data;
        return (
            <View style={{ backgroundColor: Colors.white, width: Dimensions.get('window').width - 10, marginTop: 5 }}>

                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={homeStyle.itemData}> Name </Text>
                    <Text style={homeStyle.itemNormalData}>{item.name}</Text>
                </View>

                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <Text style={homeStyle.itemData}>Min Borrowing Amount</Text>
                        <Text style={homeStyle.itemNormalData}>{"Rs. " + item.minBorrowingAmount}</Text>
                    </View>

                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <Text style={homeStyle.itemData}>Max Borrowing Amount </Text>
                        <Text style={homeStyle.itemNormalData}>{"Rs. " + item.maxBorrowingAmount}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <Text style={homeStyle.itemData}>Family Name </Text>
                        <Text style={homeStyle.itemNormalData}>{item.familyName}</Text>
                    </View>

                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <Text style={homeStyle.itemData}>Loan Type</Text>
                        <Text style={homeStyle.itemNormalData}>{item.type}</Text>
                    </View>

                </View>

                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={homeStyle.itemData}> Other Benefits </Text>
                    <Text style={homeStyle.itemNormalData}>{item.otherBenefits}</Text>
                </View>

                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={homeStyle.itemData}> Apply </Text>
                    <Text style={homeStyle.itemNormalData}>{item.applyUrl}</Text>
                </View>

            </View>
        )
    }

    render() {
        console.log("Homepage", " Home loan list details is as " + JSON.stringify(this.props.homeloanList));
        return (
            <View style={appStartStyle.mainContainer}>
                <FlatList
                    data={this.props.homeloanList}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getLoanDetails: () => dispatch(getHomeLoan())
})

mapStateToProps = (state) => {
    return {
        homeloanList: state.homeloanList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

