import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Button,
    ActivityIndicator,
    Text
} from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isLoading: false,
            message: "",
        }
    }

    componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyAJY7cdQ_vMpxhpGbn1_Lc_j89HxQVOb3Y",
            authDomain: "freeladev-react-native.firebaseapp.com",
            databaseURL: "https://freeladev-react-native.firebaseio.com",
            projectId: "freeladev-react-native",
            storageBucket: "",
            messagingSenderId: "609165830737",
            appId: "1:609165830737:web:bf706709fbd2b102a6e670"
        };
        firebase.initializeApp(firebaseConfig);        
    }

    onChangeHandler(field, valor) {
        this.setState({
            [field]: valor
        });
    }

    Login() {
        this.setState({isLoading:true});
        const {email, password} = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                this.setState({message:"Logado com sucesso"});
            })
            .catch(error => {
                this.setState({message: this.getMessageByError(error.code)});
            })
            .then( () => {
                this.setState({isLoading:false})
            });
    }

    renderButton() {
        if(this.state.isLoading)
            return <ActivityIndicator />;
        return(
            <Button
                title='entrar'
                color='#00B5FF'
                onPress={() => this.Login()}
            />
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
                return "Preencha os campos  corretamente!";
        }
    }

    render() {
        return(
            <View>
                <FormRow>
                    <TextInput
                        style={styles.textInput}
                        placeholder="e-mail"
                        value={this.state.email}
                        onChangeText={valor => {this.onChangeHandler('email', valor)}}
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
    }
});