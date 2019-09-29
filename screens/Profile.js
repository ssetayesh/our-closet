import React from 'react';
import { Text, View, Image, Button, TextInput } from 'react-native';
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
        <Text style={{ fontFamily: 'Georgia', fontSize: 16 }}>{"\n"}Welcome {this.props.user.name}!</Text>
        <Text>{"\n"}</Text>
        <Image style={{ width: 200, height: 200 }} source={{ uri: this.props.user.photoURL }} />
        <Text>{"\n"}</Text>
        <Text style={styles.profileTextContainer}>Let's recycle together! {"\n"}What clothes do you want to put in your closet?{"\n"}</Text>
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
