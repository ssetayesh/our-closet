import * as firebase from 'firebase'

/*Action types */
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const UPLOAD_PICS = 'UPLOAD_PICS';


/*Action creators*/
const getLogin = (user) => {
  return { type: LOGIN, user: user, loggedIn: true }
}

const getLogout = () => {
  return { type: LOGOUT, loggedIn: false }
}



export function login(user) {
  return function (dispatch) {
    console.log('user in dispatch', user);
    console.log('provider data!!!', user.providerData[0])

    let userToDispatch = {
      name: user.providerData[0].displayName,
      photoURL: user.providerData[0].photoURL,
      images: []
    }

    firebase.database().ref('users/').child(user.uid).once('value', function (snapshot) {
      if (snapshot.val() !== null) {
        let userInfo = snapshot.val();
        console.log('here in snapshot.val() != null')
        console.log('user from database', userInfo)
        dispatch(getLogin(userInfo))
      }
      else {
        firebase.database().ref('users/' + user.uid).update(userToDispatch);
        console.log('here in else in actionss')
        dispatch(getLogin(userToDispatch))
      }
    })
  }
}

export function logout() {
  return function (dispatch) {
    firebase.auth().signOut();
    dispatch(getLogout())
  }
}
