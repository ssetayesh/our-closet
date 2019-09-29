let initialState = {
  loggedIn: false,
  user: {
    id: '',
    name: '',
    bio: ''
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN': {
      return { ...state, user: action.loggedIn, loggedIn: true }
    }
    case 'LOGOUT': {
      return { ...state, loggedIn: false }
    }
    default:
      return state;
  }
}
