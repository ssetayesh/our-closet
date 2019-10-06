import React from 'react';
import { ImageBackground, Text, View, Image } from 'react-native';
import styles from '../styles';
import { connect } from 'react-redux';
import SwipeCards from 'react-native-swipe-cards';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { name: 'Laila', image: 'https://66.media.tumblr.com/17b171b8be8d46e84a917b9b3a04906b/tumblr_ogc9geYR6x1ub0xcto1_400.jpg' },
        { name: 'Flora', image: '' },
        { name: 'Steph', image: '' },
        { name: 'Daisy', image: '' },
        { name: 'Nadia', image: '' }
      ]
    }
  }

  render() {
    console.log('props in explore', this.props);
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontFamily: 'Georgia', fontWeight: 'bold' }}>{"\n"}{this.state.cards[0].name}'s closet!</Text>
        <Image style={{ width: 200, height: 200 }} source={{ uri: this.state.cards[0].image }}></Image>
        <SwipeCards closet={this.props.cards}></SwipeCards>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home);
