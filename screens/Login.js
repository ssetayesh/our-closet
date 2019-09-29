import React, { Component } from 'react'
import styles from '../styles';
import { ImageBackground, Text, View, TextInput, Button, Alert } from 'react-native'
import img from '../Images/clothing.jpeg'
import Icon from 'react-native-vector-icons/Ionicons';
import * as Facebook from 'expo-facebook';
import { connect } from 'react-redux'
import { login } from '../store/actions'
import * as firebase from 'firebase'
import RootNavigator from '../navigation/RootNavigator';


class userLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }


  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        this.props.dispatch(login(user))
        console.log('i am heree');
        console.log("userrrrrr " + JSON.stringify(user));
      }
    });
  }

  signUpWithEmail = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        Alert.alert('Password must be at least 6 characters long')
      }
    }
    catch (err) {
      console.log(err);
    }
    firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  loginWithEmail = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user);
      })
    } catch (err) {
      Alert.alert('User or password is incorrect');
    }
  }

  facebookWithlogIn = async () => {
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
        const credential = await firebase.auth.FacebookAuthProvider.credential(token);
        firebase.auth().signInWithCredential(credential).catch((err) => {
          Alert.alert('Something went wrong on our end, try again later')
        })
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        // Alert.alert('Successfully logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
  render() {
    console.log(this.state);
    console.log('propssss', this.props)
    console.log('logged in ????', this.props.loggedIn)
    if (this.props.loggedIn) {
      return (
        <RootNavigator />
      )
    }
    else {
      return (
        <ImageBackground source={img} style={styles.loginImageContainer} opacity={.65}>
          <Text style={styles.ourClosetText}>Our {"\n"}Closet</Text>
          <Text style={styles.innerText}>A Community for Thrifting{"\n"}</Text>
          <View >
            <Icon name={'ios-person'} size={28} style={styles.usernameIcon} />
            <TextInput style={styles.loginInput} placeholder={'email'} placeholderTextColor={'black'} onChangeText={(email) => this.setState({ email })} />
            <Text></Text>
            <Icon name={'ios-lock'} size={28} style={styles.passwordIcon} />
            <TextInput style={styles.loginInput} secureTextEntry={true} password={true} placeholder={'password'} placeholderTextColor={'black'} onChangeText={(password) => this.setState({ password })} />
          </View>
          <View>
            <Button title={'Login'} onPress={() => this.loginWithEmail(this.state.email, this.state.password)} />
            <Button title={'Sign Up'} onPress={() => this.signUpWithEmail(this.state.email, this.state.password)} />
            <Button onPress={() => {
              this.facebookWithlogIn();
            }} title={'Connect with Facebook'} />
          </View>
        </ImageBackground>
      )
    }
  }
}


function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(userLogin);
