import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, StyleSheet, TextInput, Button} from 'react-native';
import NavigationFooter from '../components/NavigationFooter';
import Icon from 'react-native-ionicons'
import { setField, saveProfile } from '../actions/createProfileActions';
import { connect } from 'react-redux';

class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {createProfile, user, setField, saveProfile} = this.props;
    return(      
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <View style={styles.avatar}></View>
            <TextInput
              style={styles.textInput}
              placeholder="seu nome"
              value={createProfile.nome}
              onChangeText={value => setField('nome', value)}
            /> 
            <TextInput
              style={styles.textInput}
              placeholder="descrição"
              multiline={true}
              numberOfLines={6}
              value={createProfile.descricao}
              onChangeText={value => setField('descricao', value)}
            />
            <Button
              title="Salvar"
              onPress={() => {
                saveProfile({createProfile, user})
              }}
            />
          </View>
        </ScrollView>      
        <NavigationFooter>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Projects')}>
            <Icon style={styles.iconNavigationFooter} name="md-copy" />
            <Text style={styles.btnNavigationFooter}>ver projetos</Text>                        
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateProfile')}>
            <Icon style={styles.iconNavigationFooter} name="md-contact" />
            <Text style={styles.btnNavigationFooter}>meu perfil</Text>                        
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Icon style={styles.iconNavigationFooter} name="exit" />
            <Text style={styles.btnNavigationFooter}>sair</Text>                        
          </TouchableOpacity>
        </NavigationFooter>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#fff',
    padding: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#E6E5E5',
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 15,
    color: '#00B5FF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 15,
    fontSize: 20,
    borderWidth: 2,
    borderColor: '#00B5FF',
    textAlign: 'center',
    width: 350
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  tag: {
    flex: 1,
    flexDirection: 'row',
  },
  skill: {
    borderWidth: 2,
    borderColor: '#707070',
    paddingHorizontal: 15,
    paddingVertical: 1,
    borderRadius: 20,
    marginHorizontal: 3,
  },
  textSkill: {
    fontSize: 18,
  },
  description: {
    fontSize: 15,
    marginTop: 10,
    textAlign: 'justify',
  },
  btnNavigationFooter: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  iconNavigationFooter: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'center'
  }
});

const mapStateToProps = (state) => {
  return ({
    createProfile: state.createProfile,
    user: state.userLogin
  })
  
}

const mapDispatchToProps = {
  setField,
  saveProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);