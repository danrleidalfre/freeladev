import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NavigationFooter from '../components/NavigationFooter';
import Icon from 'react-native-ionicons'

export default class Projects extends React.Component {
  render() {
    return(
      <View style={styles.container}>            
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <View style={styles.card}>
              <Text style={styles.name}>psd para html</Text>
              <Text style={styles.description}>Necessito de um freelancer para converter 5 telas de Photoshop para html, utilizando Bootstrap...</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectDetails')}>
                <Text style={styles.btnViewProject}>ver detalhes</Text>                        
              </TouchableOpacity>
              <View style={styles.tag}>
                <View style={styles.skill}>
                  <Text style={styles.textSkill}>front</Text>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <Text style={styles.name}>programador laravel</Text>
              <Text style={styles.description}>Projeto de um site completo utilizando laravel e materialize...</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectDetails')}>
                <Text style={styles.btnViewProject}>ver detalhes</Text>                        
              </TouchableOpacity>
              <View style={styles.tag}>
                <View style={styles.skill}>
                  <Text style={styles.textSkill}>front</Text>
                </View>
                <View style={styles.skill}>
                  <Text style={styles.textSkill}>back</Text>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <Text style={styles.name}>app nativo</Text>
              <Text style={styles.description}>Preciso de um app que rode em ios e android necessário também publicar na loja...</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectDetails')}>
                <Text style={styles.btnViewProject}>ver detalhes</Text>                        
              </TouchableOpacity>
              <View style={styles.tag}>
                <View style={styles.skill}>
                  <Text style={styles.textSkill}>mobile</Text>
                </View>
              </View>
            </View>
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
  card: {
    padding: 15,
    marginTop: 10,
    width: 380,
    borderWidth: 2,
    borderColor: '#00B5FF',
    alignItems: 'center',
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  description: {
    fontSize: 15,
    textAlign: 'justify',
    marginVertical: 10,
  },
  btnViewProject: {
    backgroundColor: '#00B5FF',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    width: 130,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  tag: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  skill: {
    borderWidth: 2,
    borderColor: '#707070',
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  textSkill: {
    fontSize: 15,
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
  },  
});