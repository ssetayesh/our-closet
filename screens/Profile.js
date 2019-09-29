import React from 'react';
import { Text, View, Image, Button, Alert } from 'react-native';
import styles from '../styles';
import { connect } from 'react-redux';
import { logout } from '../store/actions'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Constants from 'expo-constants'

class Profile extends React.Component {
  state = {
    photos: null,
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('We do not have permissions to access your camera roll');
      }
    }
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ photos: result.uri });
    }
  }

  render() {
    console.log('in profileeeee', this.props)
    return (
      <View style={styles.profileContainer}>
        <Text style={{ fontFamily: 'Georgia', fontSize: 16 }}>{"\n"}Welcome {this.props.user.name}!</Text>
        <Text>{"\n"}</Text>
        <Image style={{ width: 200, height: 200, borderRadius: 200 / 2 }} source={{ uri: this.props.user.photoURL }} />
        <Text>{"\n"}</Text>
        <Text style={styles.profileTextContainer}>Let's recycle together! {"\n"}What clothes do you want to put in your closet?</Text>
        <Text>{"\n"}Your current closet:{"\n"}</Text>
        <Button title={'Upload Clothing'} onPress={() => this.pickImage()} />
        <Text>{"\n"}</Text>
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
