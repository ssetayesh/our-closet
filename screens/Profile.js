import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';
import { connect } from 'react-redux';

class Profile extends React.Component {
  state = {}

  componentDidMount() { }

  render() {
    console.log('in profileeeee', this.props)
    return (
      <View style={styles.container}>
        <Text>Hello {this.props.user.name}</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
