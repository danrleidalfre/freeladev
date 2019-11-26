import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import CreateProject from './pages/CreateProject';
import FreelancerDetails from './pages/FreelancerDetails';
import ProfileFreelancer from './pages/ProfileFreelancer';
import ProjectDetails from './pages/ProjectDetails';
import Projects from './pages/Projects';
import HomeClient from './pages/HomeClient';
import Freelancers from './pages/Freelancers';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAJY7cdQ_vMpxhpGbn1_Lc_j89HxQVOb3Y",
  authDomain: "freeladev-react-native.firebaseapp.com",
  databaseURL: "https://freeladev-react-native.firebaseio.com",
  projectId: "freeladev-react-native",
  storageBucket: "",
  messagingSenderId: "609165830737",
  appId: "1:609165830737:web:bf706709fbd2b102a6e670"
};
firebase.initializeApp(firebaseConfig);

const AppNavigator = createStackNavigator({
    'Login': {
      screen: Login,
    },
    'HomeClient': {
      screen: HomeClient,
    }, 
    'CreateProject': {
      screen: CreateProject,
    },
    'CreateAccount': {
      screen: CreateAccount,
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