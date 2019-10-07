import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles';
import { connect } from 'react-redux';
import { logout } from '../store/actions'
import * as Permissions from 'expo-permissions'
import { uploadImages } from '../store/actions'
import Constants from 'expo-constants'

class Profile extends React.Component {
  state = {}
  componentDidMount() {
    this.getPermissionAsync();
    this.props.dispatch(uploadImages(this.props.user.images))
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('We do not have permissions to access your camera roll');
      }
    }
  }

  render() {
    console.log('in profileeeee', this.props)
    return (
      <ScrollView>
        <View style={styles.profileContainer}>
          <Text style={{ fontFamily: 'Georgia', fontSize: 16 }}>{"\n"}Welcome {this.props.user.name}!</Text>
          <Text>{"\n"}</Text>
          <Image style={{ width: 200, height: 200, borderRadius: 200 / 2 }} source={{ uri: this.props.user.photoURL }} />
          <Text>{"\n"}</Text>
          <Text style={styles.profileTextContainer}>Let's recycle together! {"\n"}What clothes do you want to put in your closet?</Text>
          <Text>{"\n"}Your current closet:{"\n"}</Text>
          {/* <Button title={'Upload Clothing'} onPress={() => this.pickImage()} /> */}
          <Text>{"\n"}</Text>
          {this.props.user.images.map((uri, key) => {
            return (
              <TouchableOpacity key={{ key }} >
                <Image style={{ width: 100, height: 100, borderRadius: 100 / 2 }} source={{ uri: uri }} />
              </TouchableOpacity>
            );
          })}
          <Button onPress={() => this.props.dispatch(logout())} title={'Logout'} />
          <Text>{"\n"}</Text>
        </View >
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
