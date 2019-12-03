import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import NavigationFooter from '../components/NavigationFooter';
import Icon from 'react-native-ionicons'

export default class ProjectDetails extends React.Component {
  render() {
    const { project } = this.props.navigation.state.params;
    return(      
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <View style={styles.card}>
              <Text style={styles.nameProject}>{project.nome}</Text>
              <Text style={styles.name}>detalhes</Text>
              <Text style={styles.description}>{project.detalhes}</Text>
              <Text style={styles.name}>contatos</Text>
              <Text style={styles.contact}>{project.contatos}</Text>
            </View>
          </View>
        </ScrollView>      
        <NavigationFooter>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateProfile')}>
            <Icon style={styles.iconNavigationFooter} name="md-contact" />
            <Text style={styles.btnNavigationFooter}>meu perfil</Text>                        
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Projects')}>
            <Icon style={styles.iconNavigationFooter} name="md-copy" />
            <Text style={styles.btnNavigationFooter}>ver projetos</Text>                        
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
    paddingHorizontal: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    padding: 15,
    marginTop: 10,
    width: 380,
    borderWidth: 2,
    borderColor: '#00B5FF',
    alignItems: 'center',
    borderRadius: 10,
  },
  nameProject: {
    fontSize: 20,
    color: '#00B5FF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  name: {
    fontSize: 20,
    color: '#00B5FF',
    fontWeight: 'normal',
    textAlign: 'center'
  },
  description: {
    fontSize: 15,
    textAlign: 'justify',
    marginVertical: 10,
  },
  contact: {
    fontSize: 15,
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