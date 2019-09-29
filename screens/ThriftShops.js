import React from 'react';
import styles from '../styles';
import { Text, View, ImageBackground } from 'react-native';
import img from '../Images/background.jpeg'

class ThriftShops extends React.Component {
  state = {}

  componentDidMount() { }

  render() {
    return (
      <ImageBackground source={img} style={styles.loginImageContainer} opacity={.30}>
        <Text style={{ fontSize: 20, flex: 1, alignItems: 'center' }}>{"\n"}Thrift Shops near you:</Text>
      </ImageBackground >
    )
  }
}

export default ThriftShops;
