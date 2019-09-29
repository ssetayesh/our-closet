
/*Action types */
const LOGIN = 'LOGIN';


/*Action creators*/
const getLogin = (user) => {
  return { type: LOGIN, user: user, loggedIn: true }
}



export const login = (str) => {
  return (dispatch) => {
    dispatch(getLogin(str))
  }
}

