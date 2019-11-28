import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import NavigationFooter from '../components/NavigationFooter';
import Icon from 'react-native-ionicons'

export default class ProjectDetails extends React.Component {
  render() {
    return(      
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <View style={styles.card}>
              <Text style={styles.name}>psd para html</Text>
              <Text style={styles.description}>Necessito de um freelancer para converter 5 telas de Photoshop para html, utilizando Bootstrap, deve ser feito com boas práticas do HTML5 e ser responsivo.</Text>
              <Text style={styles.name}>contato</Text>
              <Text style={styles.contact}>Nome: Agência</Text>
              <Text style={styles.contact}>E-mail: contato@agencia.com.br</Text>
              <Text style={styles.contact} onPress={() => {Linking.openURL('http://wa.me/send?phone=43' + 991141402);}}>WhatsApp: (00) 999 999 999</Text>
              <Text style={styles.contact}>Skype: agencialive</Text>
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