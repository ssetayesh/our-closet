import * as firebase from 'firebase';

let initialState = {
  loggedIn: false,
  user: {
    name: '',
    photoURL: '',
    images: [],
    chats: '',
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
    default:
      return state;
  }
}
