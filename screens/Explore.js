import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from '../styles';
import { connect } from 'react-redux';
import { login } from '../store/actions';

class Home extends React.Component {
  state = {}

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Explore Clothing! </Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home);
