import React from 'react';
import styles from '../styles';
import { Text, View } from 'react-native';

class Matches extends React.Component {
  state = {}

  componentWillMount() { }

  render() {
    return (
      <View style={styles.container}>
        <Text>clothes match page</Text>
      </View>
    )
  }
}

export default Matches;
