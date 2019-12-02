import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import NavigationFooter from '../components/NavigationFooter';
import Icon from 'react-native-ionicons'
import { connect } from 'react-redux'
import { watchProjects } from '../actions/projectsActions'
import { deleteProject } from '../actions/createProjectActions';

class HomeClient extends React.Component {
  componentDidMount() {
    this.props.watchProjects();
  }
  render() {
    return(    
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>seus projetos</Text>
          <View style={styles.content}>          
            <FlatList 
              data={[...this.props.projects]}
              renderItem={({item}) => {
                return(                  
                  <View style={styles.cardProject}>                    
                    <Text style={styles.nameProject}>{item.nome}</Text>
                    <View style={styles.containerBtn}>
                      <TouchableOpacity onPress={ async () => await this.props.deleteProject(item)}>
                        <Text style={styles.btnRemoveProject}>excluir</Text>                        
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.props.navigation.replace('CreateProject', {project: item})}>
                        <Text style={styles.btnEditProject}>editar</Text>                        
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
              keyExtractor={item => item.id}
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
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 25,
    color: '#00B5FF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },  
  cardProject: {
    padding: 15,
    marginTop: 10,
    width: 390,
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
    backgroundColor: '#00B5EE',
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

const mapStateToProps = state => {
  const {listProjects} = state;
  const keys = Object.keys(listProjects)
  const listProjectsID = keys.map(key => {
    return { ...listProjects[key], id: key }
  })
  return {projects: listProjectsID}
}

const mapDispatchToProps = {
  watchProjects,
  deleteProject
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeClient)