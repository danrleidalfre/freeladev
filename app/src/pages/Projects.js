import React from 'react';
import {View, Text} from 'react-native';
import NavigationFooter from '../components/NavigationFooter';

export default class Projects extends React.Component {
  render() {
    return(
      <View>
        <NavigationFooter>
          <Text>ver projetos</Text>
          <Text>meu perfil</Text>
        </NavigationFooter>
      </View>
    );
  }
}