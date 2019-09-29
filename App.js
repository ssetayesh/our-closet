import React from 'react';
import RootNavigator from './navigation/RootNavigator';
import Login from './screens/Login';
import reducers from './store/reducers';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { FirebaseWrapper } from './firebase/firebase';
import { firebaseConfig } from './firebase/config'
const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducers, middleware);


export default function App() {
  FirebaseWrapper.GetInstance().Initialize(firebaseConfig)
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}


