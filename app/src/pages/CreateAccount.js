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
      user: "",
      password: "",
      type: "",
    }
  }  

  onChangeHandler(field, valor) {
    this.setState({
      [field]: valor
    });
  }

  CreateAccount() {
    const {user, password, type} = this.state;
    if (user == '' || password == '' || type == '') {
      Alert.alert('preencha todos os campos corretamente!')
    } else if (type === 'freelancer') {
      firebase
        .database()
        .ref(`/users/${user}`)
        .set({password, type})
        .then() 
          firebase
            .database()
            .ref(`/freelancers/${user}`)
            .set({
              nome: user,
              descricao: 'fale sobre você!'
            })
            .then() 
              Alert.alert('sucesso! utilize as credenciais criadas para acessar o sistema')
              this.props.navigation.navigate('Login')
    } else {
      firebase
        .database()
        .ref(`/users/${user}`)
        .set({password, type})    
        .then() 
          Alert.alert('sucesso! utilize as credenciais criadas para acessar o sistema')
          this.props.navigation.navigate('Login')
    }   
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
            label='usuário'
            baseColor='rgba(255, 255, 255, 255)'
            textColor='rgba(255, 255, 255, 255)'
            tintColor='rgba(255, 255, 255, 255)'
            labelFontSize='20'
            value={this.state.user}
            onChangeText={valor => {this.onChangeHandler('user', valor)}}
          />
          <TextField
            label='senha'
            baseColor='rgba(255, 255, 255, 255)'
            textColor='rgba(255, 255, 255, 255)'
            tintColor='rgba(255, 255, 255, 255)'
            labelFontSize='20'
            secureTextEntry
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