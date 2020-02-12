import * as firebase from 'firebase'
import * as ImagePicker from 'expo-image-picker'
import { RNS3 } from 'react-native-aws3';
let aws = require('../firebase/aws');
let awsData = aws.awsData();
import { Alert } from 'react-native';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const UPLOAD_IMAGES = 'UPLOAD_IMAGES';

const getLogin = (user) => {
  return { type: LOGIN, user: user, loggedIn: true }
}

const getLogout = () => {
  return { type: LOGOUT, loggedIn: false }
}

const getImages = (array) => {
  return { type: UPLOAD_IMAGES, payload: array }
}

export function login(user) {
  return function (dispatch) {
    let userToDispatch = {
      name: user.providerData[0].displayName,
      photoURL: user.providerData[0].photoURL,
      images: [user.photoURL],
      // chats: '',
    }

    firebase.database().ref('users/').child(user.uid).once('value', function (snapshot) {
      if (snapshot.val() !== null) {
        let userInfo = snapshot.val();
        console.log('here in snapshot.val() != null')
        console.log('user from database', userInfo)
        dispatch(getLogin(userInfo))
      }
      else {
        firebase.database().ref('users/' + user.uid).update(userToDispatch);
        console.log('here in else in actionss')
        dispatch(getLogin(userToDispatch))
      }
    })
  }
}

export function logout() {
  return function (dispatch) {
    firebase.auth().signOut();
    dispatch(getLogout())
  }
}

export function deleteImage(images, key) {
  return function (dispatch) {
    Alert.alert(
      'Are you sure you want to Delete?',
      '',
      [
        {
          text: 'Yes', onPress: () => {
            var array = images
            array.splice(key, 1)
            dispatch({ type: 'UPLOAD_IMAGES', payload: array });
            firebase.database().ref('cards/' + firebase.auth().currentUser.uid + '/images').set(array);
          }
        },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed') },
      ],
      { cancelable: true }
    )
  }
}

// export function sendNotification(id, name, text) {
//   return function (dispatch) {
//     firebase.database().ref('cards/' + id).once('value', (snap) => {
//       if (snap.val().token != null) {

//         return fetch('https://exp.host/--/api/v2/push/send', {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             to: snap.val().token,
//             title: name,
//             body: text,
//           }),
//         });

//       }
//     });
//   }
// }

export function getCards(geocode) {
  return function (dispatch) {
    firebase.database().ref('cards').once('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
        item = child.val();
        item.id = child.key;
        items.push(item);
      });
      dispatch({ type: 'GET_CARDS', payload: items });
    });
  }
}

export function uploadImages(images) {
  return function (dispatch) {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
    }).then(function (result) {
      console.log('resulttttt', result);
      let array = images;
      if (result.uri != undefined) {
        const file = {
          uri: result.uri,
          name: result.uri,
          type: "image/png"
        }

        const options = {
          keyPrefix: "images/",
          bucket: "ourcloset3",
          region: "us-east-1",
          accessKey: awsData.accessKey,
          secretKey: awsData.secretKey,
          successActionStatus: 201
        }

        RNS3.put(file, options).then(function (response) {
          console.log("response.status", response.status);
          if (response.status === 201) {
            array.push(response.body.postResponse.location)
            firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/images').set(array);
            dispatch(getImages(array));
          }
        })
      }
    })
  }
}
