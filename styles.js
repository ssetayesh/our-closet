import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
const { width: WIDTH } = Dimensions.get('window');

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7395AE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#babdb9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginImageContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ourClosetText: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'Georgia',
  },
  loginInput: {
    width: WIDTH - 50,
    height: 35,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    marginHorizontal: 25,
    fontSize: 19,
    fontFamily: 'Georgia',
    opacity: .85,
  },
  usernameIcon: {
    position: 'absolute',
    top: 4,
    left: 37
  },
  passwordIcon: {
    position: 'absolute',
    top: 45,
    left: 37
  },
  logo: {
    width: 120,
    height: 120
  },
  innerText: {
    paddingTop: 10,
    fontFamily: 'Georgia',
    fontSize: 15,
    fontStyle: 'italic'
  }
})

module.exports = styles
