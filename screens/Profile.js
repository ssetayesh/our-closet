import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles';
import { connect } from 'react-redux';

class Profile extends React.Component {
  state = {}

  componentDidMount() { }

  render() {
    console.log('in profileeeee', this.props)
    return (
      <View style={styles.container}>
        <Text>Hello {this.props.user.name} !</Text>
        <Image style={{ width: 100, height: 100 }} source={{ uri: this.props.user.photoURL }} />
        <Text>{"\n"}</Text>
        <Text>Let's recycle together! What clothes do you want to put in your closet to share?</Text>

      </View >
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
