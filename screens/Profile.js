import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';

class Profile extends React.Component {
  state = {}

  componentDidMount() { }

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile page</Text>
      </View>
    )
  }
}

export default Profile;
