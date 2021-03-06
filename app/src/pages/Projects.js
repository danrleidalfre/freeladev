import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import NavigationFooter from '../components/NavigationFooter';
import Icon from 'react-native-ionicons'
import { connect } from 'react-redux'
import { watchAllProjects } from '../actions/projectsActions'

class Projects extends React.Component {
  componentDidMount() {
    this.props.watchAllProjects();
  }

  render() {
    return(      
      <View style={styles.container}>            
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>projetos publicados</Text>
          <View style={styles.content}>          
          <FlatList 
              data={[...this.props.projects]}
              renderItem={({item}) => {
                return(
                  
                  <View style={styles.card}>
                    <Text style={styles.name}>{item.nome}</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectDetails', {project: item})}>
                      <Text style={styles.btnViewProject}>ver detalhes</Text>                        
                    </TouchableOpacity>
                  </View>
                  
                );
              }}
              keyExtractor={item => item.id}
            />
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
    padding: 10,
  },
  title: {
    fontSize: 25,
    color: '#00B5FF',
    fontWeight: 'bold',
    textAlign: 'center',
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
    textAlign: 'center',
    marginBottom: 10
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

const mapStateToProps = state => {
  const {listProjects} = state;
  const keys = Object.keys(listProjects)
  const listProjectsID = keys.map(key => {
    return { ...listProjects[key], id: key }
  })
  return {projects: listProjectsID}
}

export default connect(mapStateToProps, { watchAllProjects })(Projects)