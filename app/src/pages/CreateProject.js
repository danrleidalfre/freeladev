import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, StyleSheet, TextInput, Picker} from 'react-native';
import NavigationFooter from '../components/NavigationFooter';
import Icon from 'react-native-ionicons';
import { connect } from 'react-redux';
import { setField, saveProject, setAllFields, resetForm } from '../actions/createProjectActions';

class CreateProject extends React.Component {  
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {navigation, setAllFields, resetForm} = this.props;
    const {params} = navigation.state;
    if(params && params.project) {
      setAllFields(params.project)
    } else {
      resetForm();
    }
  }
  render() {
    const {createProject, setField, saveProject, navigation} = this.props;
    return(
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <TextInput
            style={styles.textInput}
            placeholder="nome do projeto"
            value={createProject.nome}
            onChangeText={value => setField('nome', value)}
          />
          <View style={styles.skills}>
            <Text style={styles.textSkills}>habilidades</Text>
            <Picker
              selectedValue={createProject.habilidades}
              onValueChange={(itemValue, itemIndex) =>
                setField('habilidades', itemValue)
              }>
              <Picker.Item label="Back-end" value="back-end" />
              <Picker.Item label="Front-end" value="front-end" />
              <Picker.Item label="Mobile" value="mobile" />
              <Picker.Item label="Full-stack" value="full-stack" />        
            </Picker>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="detalhes do projeto"
            multiline={true}
            numberOfLines={6}
            value={createProject.detalhes}
            onChangeText={value => setField('detalhes', value)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="contatos"
            multiline={true}
            numberOfLines={6}
            value={createProject.contatos}
            onChangeText={value => setField('contatos', value)}
          />
        </View>
      </ScrollView>      
      <NavigationFooter>
        <TouchableOpacity onPress={() => {
            setField('nome', this.props.user.user)
            saveProject({createProject})
            navigation.goBack()
          } 
        }>
          <Icon style={styles.iconNavigationFooter} name="checkbox" />
          <Text style={styles.btnNavigationFooter}>salvar projeto</Text>                        
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

const mapStateToProps = (state) => {
  return ({
    createProject: state.createProject,
    user: state.userLogin
  })
  
}

const mapDispatchToProps = {
  setField,
  saveProject,
  setAllFields,
  resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);