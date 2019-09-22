import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NavigationFooter from '../components/NavigationFooter';
import Icon from 'react-native-ionicons'

export default class ProfileFreelancer extends React.Component {
  render() {
    return(      
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          
        </ScrollView>      
        <NavigationFooter>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Projects')}>
            <Icon style={styles.iconNavigationFooter} name="md-copy" />
            <Text style={styles.btnNavigationFooter}>ver projetos</Text>                        
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileFreelancer')}>
            <Icon style={styles.iconNavigationFooter} name="md-contact" />
            <Text style={styles.btnNavigationFooter}>meu perfil</Text>                        
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