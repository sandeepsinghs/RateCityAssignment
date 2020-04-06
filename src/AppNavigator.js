import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Colors from "./components/Colors";
import AppStartPage from "./containers/AppStartPage";
import HomePage from "./containers/HomePage";


const AppNavigation = createStackNavigator({
    AppStartPage: {
        screen: AppStartPage,
        navigationOptions: {
            header: null,
        }
    },

    HomePage: {
        screen: HomePage,
        navigationOptions: {
            title: 'Dashboard',
            headerStyle: {
                backgroundColor: Colors.primeryColor,
            },
            headerTitleStyle: {
                color: Colors.white,
            },
            headerBackTitleStyle: {
                color: Colors.white,
            },
            headerTintColor: Colors.primeryColor,
            headerLeft: null,
        }
    }
});
const App = createAppContainer(AppNavigation);

export default App;
