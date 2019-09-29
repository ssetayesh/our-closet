import React from 'react';
import { createStackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator.js';

const RootStackNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
    }
  }
);

export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator />;
  }
}
