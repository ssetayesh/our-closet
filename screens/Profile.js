import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import styles from '../styles';
import { connect } from 'react-redux';
import { logout } from '../store/actions'
class Profile extends React.Component {
  state = {}

  componentDidMount() { }

  render() {
    console.log('in profileeeee', this.props)
    return (
      <View style={styles.profileContainer}>
        <Text>Hello {this.props.user.name} !</Text>
        <Text>{"\n"}</Text>
        <Image style={{ width: 200, height: 200 }} source={{ uri: this.props.user.photoURL }} />
        <Text>{"\n"}</Text>
        <Text>Let's recycle together! What clothes do you want to put in your closet to share?</Text>
        <Button onPress={() => this.props.dispatch(logout())} title={'Logout'}></Button>
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
