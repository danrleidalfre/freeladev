import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import FormRow from '../components/FormRow';

export default class CreateAccount extends React.Component {
  render() {
    return(
      <View>        
        <FormRow>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Projects')}
          >
            <Text style={styles.btnAccount}>sou freelancer</Text>                        
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btnAccount}>sou cliente</Text>                        
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="e-mail"
          />
          <TextInput
            style={styles.textInput}
            placeholder="senha"
          />
          <TouchableOpacity>
            <Text style={styles.btnLogin}>LOGIN</Text>                        
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
      marginBottom: 20,
      fontSize: 20,
      fontWeight: 'bold'
  },
  btnAccount: {
    backgroundColor: '#00B5FF',
    borderRadius: 45,
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 20,
    borderWidth: 3,
    borderColor: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});