import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import FormRow from '../components/FormRow';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';
import firebase from 'firebase';

export default class CreateAccount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      type: "",
    }
  }

  componentDidMount() {
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
  }

  onChangeHandler(field, valor) {
    this.setState({
      [field]: valor
    });
  }

  CreateAccount(){
    const {email, password, type} = this.state;
    firebase.database().ref('users/')
    .push({
      email,
      password,
      type
    })
    .then((data)=>{
      Alert.alert(
        "Usuário cadastrado com sucesso",
        "Retornar para a página inicial?",
        [{            
          text: 'Não',
          onPress: () => {this.props.navigation.navigate('CreateAccount')}
        },{
          text: 'Sim',
          onPress: () => {this.props.navigation.navigate('Login')}
        }]
      );
    })
    .catch((error)=>{

    })
  }

  render() {    
    let data = [{
      value: 'freelancer',
    }, {
      value: 'cliente',
    }];
    return(
      <View>        
        <FormRow>
          <Dropdown
            label='sou'
            data={data}
            baseColor='rgba(255, 255, 255, 255)'
            labelFontSize='20'
            value={this.state.type}
            onChangeText={valor => {this.onChangeHandler('type', valor)}}
          />
          <TextField
            label='e-mail'
            baseColor='rgba(255, 255, 255, 255)'
            textColor='rgba(255, 255, 255, 255)'
            tintColor='rgba(255, 255, 255, 255)'
            labelFontSize='20'
            value={this.state.email}
            onChangeText={valor => {this.onChangeHandler('email', valor)}}
          />
          <TextField
            label='senha'
            baseColor='rgba(255, 255, 255, 255)'
            textColor='rgba(255, 255, 255, 255)'
            tintColor='rgba(255, 255, 255, 255)'
            labelFontSize='20'
            value={this.state.password}
            onChangeText={valor => {this.onChangeHandler('password', valor)}}
          />
          <TouchableOpacity onPress={() => this.CreateAccount()}>
            <Text style={styles.btnLogin}>CADASTRAR</Text>                        
          </TouchableOpacity>
        </FormRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
      backgroundColor: '#fff',
      borderRadius: 45,
      color: '#00B5FF',
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginBottom: 20,
      fontSize: 20,
  },
  textMessage: {
      color: '#fff',
  },
  btnLogin: {
      textAlign: 'center',
      backgroundColor: '#fff',
      borderRadius: 45,
      color: '#00B5FF',
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginTop: 20,
      fontSize: 20,
      fontWeight: 'bold'
  }
});