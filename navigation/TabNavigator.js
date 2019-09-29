import React from 'react';
import Explore from '../screens/Explore';
import Profile from '../screens/Profile';
import Matches from '../screens/Matches';
import ThriftShops from '../screens/ThriftShops';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

export default createMaterialTopTabNavigator({

  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name="ios-person" color={tintColor} size={24}></Icon>)
    }
  },
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name="ios-search" color={tintColor} size={24}></Icon>)
    }
  },
  Matches: {
    screen: Matches,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name="ios-shirt" color={tintColor} size={24}></Icon>)
    }
  },
  ThriftShops: {
    screen: ThriftShops,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name="ios-leaf" color={tintColor} size={24}></Icon>)
    }
  }
}, {
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: '#acb7ae',
      },
      indicatorStyle: {
        backgroundColor: '#555c57',
      },
    }
  }
);
