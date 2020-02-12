import * as firebase from 'firebase';

let initialState = {
  loggedIn: false,
  user: {
    id: user.uid,
    name: '',
    photoURL: '',
    images: [],
    chats: '',
    matches: {
      [user.uid]: false
    }
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
    case 'UPLOAD_IMAGES': {
      return { ...state, user: { ...state.user, images: action.payload } }
    }
    case 'GET_MATCHES':
      return { ...state, cards: action.payload }
    default:
      return state;
  }
}
