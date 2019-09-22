import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NavigationFooter from '../components/NavigationFooter';
import Icon from 'react-native-ionicons'

export default class ProjectDetails extends React.Component {
  render() {
    return(      
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          
        </ScrollView>      
        <NavigationFooter>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateProject')}>
            <Icon style={styles.iconNavigationFooter} name="md-add-circle" />
            <Text style={styles.btnNavigationFooter}>criar projeto</Text>                        
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeClient')}>
            <Icon style={styles.iconNavigationFooter} name="md-people" />
            <Text style={styles.btnNavigationFooter}>freelancers</Text>                        
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