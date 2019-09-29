import * as firebase from 'firebase'

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
export const login = () => {
  return (dispatch) => {
    dispatch(getLogin())
  }
}

