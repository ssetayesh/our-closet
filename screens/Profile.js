import React from 'react';
import { Text, View, Image, Button, Alert } from 'react-native';
import styles from '../styles';
import { connect } from 'react-redux';
import { logout } from '../store/actions'
//import ImagePicker from 'react-native-image-picker'
// import CameraRollPicker from 'react-native-camera-roll'

class Profile extends React.Component {
  state = {}

  uploadPhoto = () => {
    Alert.alert('Out of Order');
  }

  render() {
    console.log('in profileeeee', this.props)
    return (
      <View style={styles.profileContainer}>
        <Text style={{ fontFamily: 'Georgia', fontSize: 16 }}>{"\n"}Welcome {this.props.user.name}!</Text>
        <Text>{"\n"}</Text>
        <Image style={{ width: 200, height: 200, borderRadius: 200 / 2 }} source={{ uri: this.props.user.photoURL }} />
        <Text>{"\n"}</Text>
        <Text style={styles.profileTextContainer}>Let's recycle together! {"\n"}What clothes do you want to put in your closet?{"\n"}</Text>
        <Button title={'Upload Clothing'} onPress={() => this.uploadPhoto()} />
        <Button onPress={() => this.props.dispatch(logout())} title={'Logout'} />
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
