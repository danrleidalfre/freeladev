import firebase from 'firebase';

const USER_LOGIN_SUCESS = 'USER_LOGIN';
const userLoginSucess = userr => ({
  type: USER_LOGIN_SUCESS,
  userr
})

const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
  type: USER_LOGOUT,
  userr
})

export const processLogin = ({user}) => dispatch => {  
  firebase
  .database()
  .ref(`/users/${user}`)  
  .on('value', snapshot => {    
    const userObject = {
      password: snapshot.val().password,
      type: snapshot.val().type,
      user: user
    }    
    const action = userLoginSucess()
    dispatch(action)
    return userObject        
  })
}

  // const passwordUser = snapshot.val().password;
    // const typeUser = snapshot.val().type;
    // if(user != '' && password != '') {
    //   if(password == passwordUser) {                
    //     // userr => {
    //     //     const action = userLoginSucess();
    //     //     dispatch(action);
    //     // }        
    //     if(typeUser == 'freelancer') {
    //       alert('freelancer')
    //         // this.props.navigation.navigate('Projects')                    
    //     } else {
    //       alert('cliente')
    //         // this.props.navigation.navigate('HomeClient')
    //     }
    //   } else {
    //     Alert.alert('senha incorreta!')
    //   }
    // } else {
    //   Alert.alert('os campos não podem ficar vazios!')
    // }  


  // .then(user => {
  //     const action = userLoginSucess();
  //     dispatch(action);
  //     alert('foi');
  //   }
  // )
  // .on('value', snapshot => {            
  //   const passwordUser = snapshot.val().password;
  //   const typeUser = snapshot.val().type;
  //   if(user != '' && password != '') {
  //       if(password == passwordUser) {                
  //           userr => {
  //               const action = userLoginSucess();
  //               dispatch(action);
  //           }
            
  //           if(typeUser == 'freelancer') {
  //               this.props.navigation.navigate('Projects')                    
  //           } else {
  //               this.props.navigation.navigate('HomeClient')
  //           }
  //       } else {
  //           Alert.alert('senha incorreta!')
  //       }
  //   } else {
  //       Alert.alert('os campos não podem ficar vazios!')
  //   }      
  // })
