import React from 'react';
import * as firebase from 'firebase';
import { sendNotification } from '../redux/actions'
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat'

class Chat extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    firebase.database().ref('cards/' + this.props.user.id + '/chats/' + this.props.navigation.state.params.user.id).on('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
        if (child.val().key != 'user') {
          item = child.val();
          items.push(item);
        }
      });
      this.setState({ messages: items.reverse() });
    });
  }

  onSend(messages = []) {
    this.props.dispatch(
      sendNotification(
        this.props.navigation.state.params.user.id,
        messages[0].user.name,
        messages[0].text
      )
    )
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
    firebase.database().ref('cards/' + this.props.user.id + '/chats/' + this.props.navigation.state.params.user.id).push(messages[0]);
    firebase.database().ref('cards/' + this.props.navigation.state.params.user.id + '/chats/' + this.props.user.id).push(messages[0]);
  }

  render() {
    return (
      <GiftedChat
        chat={this.state.messages}
        onSend={messages => this.onSend(messages)}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Chat);
