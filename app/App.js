import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/pages/Login';
import CreateAccount from './src/pages/CreateAccount';
import Projects from './src/pages/Projects';

const AppNavigator = createStackNavigator({
    'Login': {
      screen: Login,
    },
    'CreateAccount': {
      screen: CreateAccount,
    },
    'Projects': {
      screen: Projects,
    },
  }, 
  {
    defaultNavigationOptions: {
      title: "freeladev",
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#00B5FF',             
      },
      headerLeft: null,
      headerTitleStyle: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        flexGrow: 1,
        textAlign: 'center',
        paddingVertical: 20,      
      },
    },
    cardStyle: {
      backgroundColor: '#00B5FF'
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;