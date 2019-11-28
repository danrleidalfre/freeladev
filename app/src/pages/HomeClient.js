import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NavigationFooter from '../components/NavigationFooter';
import Icon from 'react-native-ionicons'

export default class ProjectDetails extends React.Component {
  render() {
    return(      
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>freelancers</Text>
          <View style={styles.content}>
            <View style={styles.card}>
              <Text style={styles.name}>nome do freelancer</Text>
              <View style={styles.avatar}></View>            
              <View style={styles.tag}>
                <View style={styles.skill}>
                  <Text style={styles.textSkill}>front</Text>
                </View>
                <View style={styles.skill}>
                  <Text style={styles.textSkill}>back</Text>
                </View>
                <View style={styles.skill}>
                  <Text style={styles.textSkill}>mobile</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('FreelancerDetails')}>
                <Text style={styles.btnViewProfile}>ver perfil</Text>                        
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.name}>nome do freelancer</Text>
              <View style={styles.avatar}></View>            
              <View style={styles.tag}>                
                <View style={styles.skill}>
                  <Text style={styles.textSkill}>mobile</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('FreelancerDetails')}>
                <Text style={styles.btnViewProfile}>ver perfil</Text>                        
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.name}>nome do freelancer</Text>
              <View style={styles.avatar}></View>            
              <View style={styles.tag}>
                <View style={styles.skill}>
                  <Text style={styles.textSkill}>front</Text>
                </View>
                <View style={styles.skill}>
                  <Text style={styles.textSkill}>back</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('FreelancerDetails')}>
                <Text style={styles.btnViewProfile}>ver perfil</Text>                        
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.name}>nome do freelancer</Text>
              <View style={styles.avatar}></View>            
              <View style={styles.tag}>
                <View style={styles.skill}>
                  <Text style={styles.textSkill}>back</Text>
                </View>
                <View style={styles.skill}>
                  <Text style={styles.textSkill}>mobile</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('FreelancerDetails')}>
                <Text style={styles.btnViewProfile}>ver perfil</Text>                        
              </TouchableOpacity>
            </View>            
          </View>
          <View style={styles.containerCenter}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Freelancers')}>
              <Text style={styles.btnAllFreelancers}>ver todos</Text>                        
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>seus projetos</Text>
          <View style={styles.cardProject}>
            <Text style={styles.nameProject}>converter psd para bootstrap</Text>
            <View style={styles.containerBtn}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeClient')}>
                <Text style={styles.btnRemoveProject}>excluir</Text>                        
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateProject')}>
                <Text style={styles.btnEditProject}>editar</Text>                        
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cardProject}>
            <Text style={styles.nameProject}>converter psd para bootstrap</Text>
            <View style={styles.containerBtn}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeClient')}>
                <Text style={styles.btnRemoveProject}>excluir</Text>                        
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateProject')}>
                <Text style={styles.btnEditProject}>editar</Text>                        
              </TouchableOpacity>
            </View>
          </View> 
          <View style={styles.cardProject}>
            <Text style={styles.nameProject}>converter psd para bootstrap</Text>
            <View style={styles.containerBtn}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeClient')}>
                <Text style={styles.btnRemoveProject}>excluir</Text>                        
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateProject')}>
                <Text style={styles.btnEditProject}>editar</Text>                        
              </TouchableOpacity>
            </View>
          </View> 
          <View style={styles.cardProject}>
            <Text style={styles.nameProject}>converter psd para bootstrap</Text>
            <View style={styles.containerBtn}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeClient')}>
                <Text style={styles.btnRemoveProject}>excluir</Text>                        
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateProject')}>
                <Text style={styles.btnEditProject}>editar</Text>                        
              </TouchableOpacity>
            </View>
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
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 25,
    color: '#00B5FF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },  
  card: {
    padding: 15,
    marginTop: 10,
    width: 190,
    borderWidth: 2,
    borderColor: '#00B5FF',
    alignItems: 'center',
    borderRadius: 10,
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
  containerCenter: {
    alignItems: 'center'
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
  cardProject: {
    padding: 15,
    marginTop: 10,
    width: 380,
    borderWidth: 2,
    borderColor: '#00B5FF',
    alignItems: 'center',
    borderRadius: 10,
  },
  nameProject: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  containerBtn: {
    flexDirection: 'row',
    marginTop: 10,
  },
  btnRemoveProject: {
    backgroundColor: '#FF0000',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    width: 100,
    borderRadius: 15,
    textAlign: 'center',
  },
  btnEditProject: {
    backgroundColor: '#00B5FF',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    width: 100,
    borderRadius: 15,
    textAlign: 'center',
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