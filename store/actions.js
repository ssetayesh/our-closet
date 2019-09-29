import * as firebase from 'firebase'
/*Action types */
const LOGIN = 'LOGIN';


/*Action creators*/
const getLogin = (user) => {
  return { type: LOGIN, user: user, loggedIn: true }
}

/*dispatch*/
export const login = (str) => {
  return (dispatch) => {
    dispatch(getLogin(str))
  }
}

