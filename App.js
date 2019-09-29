import React from 'react';
import RootNavigator from './navigation/RootNavigator';
import Login from './screens/Login';
import reducers from './store/reducers';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducers, middleware);

export default function App() {
  return (
    <Login></Login>
    // <Provider store={store}>
    //   <RootNavigator />
    // </Provider>
  );
}


