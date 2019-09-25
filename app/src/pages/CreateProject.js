import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import NavigationFooter from '../components/NavigationFooter';
import Icon from 'react-native-ionicons'

export default class ProjectDetails extends React.Component {
  render() {
    return(      
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <TextInput
              style={styles.textInput}
              placeholder="nome do projeto"
            />
            <View style={styles.skills}>
              <Text style={styles.textSkills}>habilidades</Text>
              <View style={styles.tag}>
                <View style={styles.skillName}>
                  <Text style={styles.textSkill}>front</Text>
                </View>
                <View style={styles.skillName}>
                  <Text style={styles.textSkill}>back</Text>
                </View>
                <View style={styles.skillName}>
                  <Text style={styles.textSkill}>mobile</Text>
                </View>
              </View>              
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="detalhes do projeto"
              multiline={true}
              numberOfLines={6}
            />
            <TextInput
              style={styles.textInput}
              placeholder="contatos"
              multiline={true}
              numberOfLines={6}
            />
          </View>
        </ScrollView>      
        <NavigationFooter>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeClient')}>
            <Icon style={styles.iconNavigationFooter} name="checkbox" />
            <Text style={styles.btnNavigationFooter}>publicar projeto</Text>                        
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Freelancers')}>
            <Icon style={styles.iconNavigationFooter} name="md-people" />
            <Text style={styles.btnNavigationFooter}>freelancers</Text>                        
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
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 15,
    color: '#00B5FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    fontSize: 20,
    borderWidth: 2,
    borderColor: '#00B5FF',
    textAlign: 'center'
  },
  skills: {
    backgroundColor: '#fff',
    borderRadius: 15,    
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#00B5FF',
  },
  textSkills: {
    fontSize: 20,
    color: '#00B5FF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tag: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  skillName: {
    borderWidth: 2,
    borderColor: '#707070',
    paddingHorizontal: 15,
    paddingVertical: 1,
    borderRadius: 20,
    marginHorizontal: 3,
    borderStyle: 'dashed'
  },
  textSkill: {
    fontSize: 18,
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