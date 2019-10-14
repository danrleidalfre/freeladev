import firebase from 'firebase';
const USER_LOGIN = 'USER_LOGIN';
const userLogin = user => ({
  type: USER_LOGIN,
  user
})

const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
  type: USER_LOGOUT,
  user
})

export const Login = ({user, password}) => {
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