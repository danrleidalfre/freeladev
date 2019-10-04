import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    ActivityIndicator,
    Text,
    Alert,
    TouchableOpacity,
} from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase';
import CreateAccount from './CreateAccount';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: "",
            password: "",
            type: "",
            isLoading: false,
            message: "",
        }
    }

    onChangeHandler(field, valor) {
        this.setState({
            [field]: valor
        });
    }

    Login() {
        const { user, password } = this.state;
        firebase
        .database()
        .ref(`/users/${user}`)
        .on('value', snapshot => {            
            const passwordUser = snapshot.val().password;
            const typeUser = snapshot.val().type;
            if(user != '' && password != '') {
                if(password == passwordUser) {
                    if(typeUser == 'freelancer') {
                        this.props.navigation.navigate('Projects')
                    } else {
                        this.props.navigation.navigate('HomeClient')
                    }
                } else {
                    Alert.alert('senha incorreta!')
                }
            } else {
                Alert.alert('os campos não podem ficar vazios!')
            }
            
        })
    }

    renderButton() {
        if(this.state.isLoading)
            return <ActivityIndicator />;
        return(
            <TouchableOpacity onPress={() => this.Login()}>
                <Text style={styles.btnLogin}>ENTRAR</Text>                        
            </TouchableOpacity>
        );
    }

    renderMessage() {
        const {message} = this.state;
        if(!message)
            return null;
        return (
            <View>
                <Text style={styles.textMessage}>{message}</Text>
            </View>
        )
    }

    getMessageByError(code) {
        switch(code) {
            case "auth/user-not-found":
                return "Este e-mail não está cadastrado!";
            case "auth/wrong-password":
                return "Senha incorreta!";
            default:
                return "Preencha os campos corretamente!";
        }
    }

    render() {
        return(            
            <View>
                <FormRow>
                    <TextInput
                        style={styles.textInput}
                        placeholder="usuário"
                        value={this.state.user}
                        onChangeText={valor => {this.onChangeHandler('user', valor)}}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="senha"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={valor => {this.onChangeHandler('password', valor)}}
                    />
                    {this.renderButton()}
                    {this.renderMessage()}
                    <Text style={styles.textCreateAccount}>não possui cadastro?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateAccount')}>
                        <Text style={styles.btnCreateAccount}>cadastre-se aqui.</Text>                        
                    </TouchableOpacity>
                </FormRow>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#fff',
        borderRadius: 45,
        color: '#00B5FF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        fontSize: 20,
    },
    textMessage: {
        color: '#fff',
    },
    btnLogin: {
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: 45,
        color: '#00B5FF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textCreateAccount: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    },
    btnCreateAccount: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});