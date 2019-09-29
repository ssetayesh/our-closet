import * as firebase from 'firebase';

let initialState = {
  loggedIn: false,
  user: {
    name: '',
    photoURL: '',
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN': {
      return { ...state, user: action.user, loggedIn: true }
    }
    case 'LOGOUT': {
      return { ...state, loggedIn: false }
    }
    default:
      return state;
  }
}
