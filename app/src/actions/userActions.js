import firebase from 'firebase';

export const USER_LOGIN_SUCESS = 'USER_LOGIN';
const userLoginSucess = userLogin => ({
  type: USER_LOGIN_SUCESS,
  userLogin
})

export const USER_LOGOUT_SUCESS = 'USER_LOGOUT';
const userLogout = () => ({
  type: USER_LOGOUT_SUCESS,
  userLogin
})

export const processLogin = ({ user, password }, callback) => dispatch => { 
  firebase
  .database()
  .ref(`/users/${user}`)  
  .on('value', snapshot => {    
    const userObject = {
      passwordUser: snapshot.val().password,
      typeUser: snapshot.val().type,
      user: user      
    }
    if(password == userObject.passwordUser) {    
      const action = userLoginSucess(userObject)
      dispatch(action) 
      callback(userObject)
    } else if (user == '') {
      alert('preencha o campo de usuário')
    } else if (password == '') {
      alert('preencha o campo de senha')
    } else {
      alert('senha incorreta')
    }
  })
}