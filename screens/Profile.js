import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles';
import { connect } from 'react-redux';
import { logout, uploadImages, deleteImage } from '../store/actions'
import * as Permissions from 'expo-permissions'
import Constants from 'expo-constants'

class Profile extends React.Component {
  state = {}
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

  deleteImage() {
    this.self.props.dispatch(deleteImage(this.self.props.user.images, this.key))
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.profileContainer}>
          <Text style={{ fontFamily: 'Georgia', fontSize: 16 }}>{"\n"}Welcome {this.props.user.name}!</Text>
          <Text>{"\n"}</Text>
          <Image style={{ width: 200, height: 200, borderRadius: 200 / 2 }} source={{ uri: this.props.user.photoURL }} />
          <Text>{"\n"}</Text>
          <Text style={styles.profileTextContainer}>Let's recycle together! {"\n"}What clothes do you want to put in your closet?</Text>
          <Text>{"\n"}Your current closet:{"\n"}</Text>
          <View style={[styles.imgRow, styles.center]}>
            {this.props.user.images.map((uri, key) => {
              return (
                <TouchableOpacity key={{ key }} onPress={this.deleteImage.bind({ self: this, key: key })} >
                  <Image style={[styles.center, styles.circle]} source={{ uri: uri }} />
                </TouchableOpacity>
              );
            })}</View>
          <Button onPress={() => this.props.dispatch(uploadImages(this.props.user.images))} title={"Upload Clothing"}></Button>
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
