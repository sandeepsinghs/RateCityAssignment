import { StyleSheet, } from "react-native";
import Colors from './Colors';

const appStartStyle = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonStyle: {
        width: "90%",
        height: 40,
        color: Colors.white,
        backgroundColor: Colors.primeryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 7
    },
    buttonText: {
        alignItems: 'center',
        padding: 10,
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },


});


const homeStyle = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: Colors.gray_bg,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    itemData: {
        fontSize: 16,
        color: Colors.black,
        margin: 4,
        fontFamily: "Montserrat-SemiBold",
    },

    itemNormalData: {
        fontSize: 16,
        color: Colors.gray_5,
        margin: 4,
        alignItems: 'center',
        fontFamily: "Montserrat-Regular",
        justifyContent: 'center'
    },

});

export { appStartStyle, homeStyle };
