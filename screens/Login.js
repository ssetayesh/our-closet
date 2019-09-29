import React, { Component } from 'react'
import styles from '../styles';
import { ImageBackground, Text, View, TextInput, Button, Alert } from 'react-native'
import img from '../Images/clothing.jpeg'
import Icon from 'react-native-vector-icons/Ionicons';
import * as Facebook from 'expo-facebook';
import { connect } from 'react-redux'
import { login } from '../store/actions'
import * as firebase from 'firebase'

async function facebooklogIn() {
  try {
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync('3303373173021033', {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged In!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}

export default class userLogin extends Component {


  render() {
    return (
      <ImageBackground source={img} style={styles.loginImageContainer} opacity={.65}>
        <Text style={styles.ourClosetText}>Our {"\n"}Closet</Text>
        <Text style={styles.innerText}>A Community for Thrifting{"\n"}</Text>
        <View >
          <Icon name={'ios-person'} size={28} style={styles.usernameIcon} />
          <TextInput style={styles.loginInput} placeholder={'username'} placeholderTextColor={'black'} />
          <Text></Text>
          <Icon name={'ios-lock'} size={28} style={styles.passwordIcon} />
          <TextInput style={styles.loginInput} secureTextEntry={true} password={true} placeholder={'password'} placeholderTextColor={'black'} />
        </View>
        <View>
          <Button title={'Login'} />
          <Button title={'Sign Up'} />
          <Button onPress={() => {
            facebooklogIn();
          }} title={'Connect with Facebook'} />
        </View>
      </ImageBackground>
    )
  }
}


