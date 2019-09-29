import React from 'react';
import styles from '../styles';
import { Text, View, ImageBackground } from 'react-native';
import img from '../Images/trees.jpg'

class ThriftShops extends React.Component {
  state = {}

  componentDidMount() { }

  render() {
    return (
      <ImageBackground source={img} style={styles.loginImageContainer} opacity={.50}>
        <Text style={{ fontSize: 18, flex: 1, alignItems: 'center', fontFamily: 'Georgia' }}>{"\n"}Thrift Shops near you:</Text>
      </ImageBackground >
    )
  }
}

export default ThriftShops;
