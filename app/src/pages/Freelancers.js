import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import NavigationFooter from '../components/NavigationFooter';
import Icon from 'react-native-ionicons'
import { connect } from 'react-redux'
import { watchFreelancers } from '../actions/freelancersActions'

class Freelancers extends React.Component {
  componentDidMount() {
    this.props.watchFreelancers();
  }  
  render() {
    return(      
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>          
          <View style={styles.content}>
          <FlatList             
            data={[...this.props.freelancers]}
            renderItem={({item}) => {
              return(
                <View style={styles.card}>
                  <Text style={styles.name}>{item.nome}</Text>
                  <View style={styles.avatar}></View>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('FreelancerDetails', {freelancer: item})}>
                    <Text style={styles.btnViewProfile}>ver perfil</Text>                        
                  </TouchableOpacity>
                </View>    
              );
            }}
            keyExtractor={item => item.id}
            numColumns={2}
          />        
          </View>     
        </ScrollView>      
        <NavigationFooter>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateProject')}>
            <Icon style={styles.iconNavigationFooter} name="md-add-circle" />
            <Text style={styles.btnNavigationFooter}>criar projeto</Text>                        
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeClient')}>
            <Icon style={styles.iconNavigationFooter} name="md-home" />
            <Text style={styles.btnNavigationFooter}>home</Text>                        
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
    paddingHorizontal: 10,
  },  
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    textAlign: 'center'
  },
  card: {
    padding: 15,
    marginTop: 10,
    width: 185,
    borderWidth: 2,
    borderColor: '#00B5FF',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  avatar: {
    backgroundColor: '#E6E5E5',
    width: 100,
    height: 100,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#00B5FF',
    marginVertical: 10,
  },
  tag: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  skill: {
    borderWidth: 2,
    borderColor: '#707070',
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  textSkill: {
    fontSize: 13,
  },
  btnViewProfile: {
    backgroundColor: '#00B5FF',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    width: 120,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',    
  },
  btnAllFreelancers: {
    borderWidth: 2,
    borderColor: '#00B5FF',
    color: '#00B5FF',
    fontSize: 22,
    fontWeight: 'bold',
    width: 150,
    borderRadius: 20,
    textAlign: 'center',
    marginTop: 10,
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

const mapStateToProps = state => {
  const {listFreelancers} = state;
  const keys = Object.keys(listFreelancers)
  const listFreelancersID = keys.map(key => {
    return { ...listFreelancers[key], id: key }
  })
  return {freelancers: listFreelancersID}
}

export default connect(mapStateToProps, { watchFreelancers })(Freelancers)