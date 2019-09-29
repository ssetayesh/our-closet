import * as firebase from 'firebase'
import { disableExpoCliLogging } from 'expo/build/logs/Logs';

/*Action types */
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT'


/*Action creators*/
const getLogin = (user) => {
  return { type: LOGIN, user: user, loggedIn: true }
}

const getLogot = () => {
  return { type: LOGOUT, loggedIn: false }
}


/*dispatch*/
export function login(user) {
  return function (dispatch) {
    console.log('user in dispatch', user);
    console.log('name', user.providerData[0].displayName)

    let userToDispatch = {
      name: user.providerData[0].displayName,
      bio: ''
    }
    firebase.database().ref('users/').child(user.uid).once('value', function (snapshot) {
      if (snapshot.val() !== null) {
        let userInfo = snapshot.val();
        console.log('here in snapshot.val() != null')
        console.log('user from database', userInfo)
        dispatch({ type: LOGIN, user: userInfo, loggedIn: true })
      }
      else {
        firebase.database().ref('users/' + user.uid).update(userToDispatch);
        console.log('here in else in actionss')
        dispatch({ type: LOGIN, user: user, loggedIn: true })
      }
    })
  }
}
