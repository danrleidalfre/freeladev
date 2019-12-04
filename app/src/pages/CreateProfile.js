import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, StyleSheet, TextInput, Alert} from 'react-native';
import NavigationFooter from '../components/NavigationFooter';
import Icon from 'react-native-ionicons'
import { setField, saveProfile } from '../actions/createProfileActions';
import { connect } from 'react-redux';
import Content from '../components/Content';
import firebase from 'firebase'

class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  
  DeleteProfile(user) {
    firebase
    .database()
    .ref(`/freelancers/${user}`)
    .remove()
      firebase
        .database()
        .ref(`/users/${user}`)
        .remove()
          this.props.navigation.navigate('Login')
  }
  
  render() {
    const {createProfile, setField, saveProfile, user, navigation} = this.props;
    return(            
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Content>
            <View style={styles.avatar}></View>
            <Text style={styles.name}>{user.user}</Text>
            <TextInput
              style={styles.textInput}
              placeholder="descrição"
              multiline={true}
              numberOfLines={11}
              value={createProfile.descricao}
              onChangeText={value => setField('descricao', value)}
            />
          </Content>
        </ScrollView>      
        <NavigationFooter>          
          <TouchableOpacity onPress={() => {
              createProfile.nome = user.user
              saveProfile({createProfile})              
              navigation.navigate('Projects')
            }
          }>
            <Icon style={styles.iconNavigationFooter} name="checkbox" />
            <Text style={styles.btnNavigationFooter}>salvar perfil</Text>                        
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.DeleteProfile(user.user)}>
            <Icon style={styles.iconNavigationFooter} name="close" />
            <Text style={styles.btnNavigationFooter}>apagar perfil</Text>                        
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
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#00B5FF',
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