import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/pages/LoginScreen';

const AppNavigator = createStackNavigator({
    'Login': {
      screen: LoginScreen,
    },
  }, 
  {
    defaultNavigationOptions: {
      title: "freeladev",
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#00B5FF',             
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',          
      }
    },
    cardStyle: {
      backgroundColor: '#00B5FF'
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;