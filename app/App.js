import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/pages/Login';
import CreateAccount from './src/pages/CreateAccount';
import CreateProject from './src/pages/CreateProject';
import FreelancerDetails from './src/pages/FreelancerDetails';
import ProfileFreelancer from './src/pages/ProfileFreelancer';
import ProjectDetails from './src/pages/ProjectDetails';
import Projects from './src/pages/Projects';
import HomeClient from './src/pages/HomeClient';
import Freelancers from './src/pages/Freelancers';

const AppNavigator = createStackNavigator({
  'Login': {
    screen: Login,
  },   
  'CreateAccount': {
      screen: CreateAccount,
    },  
     
    'CreateProject': {
      screen: CreateProject,
    },
    'HomeClient': {
      screen: HomeClient,
    },
    'Projects': {
      screen: Projects,
    }, 
    'FreelancerDetails': {
      screen: FreelancerDetails,
    },
    'ProfileFreelancer': {
      screen: ProfileFreelancer,
    },
    'ProjectDetails': {
      screen: ProjectDetails,
    },  
    'Freelancers': {
      screen: Freelancers,
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