import React, { Component } from 'react';
import store, {writeMessage, sendMessage} from '../store';

export default class NewMessageEntry extends Component {

  constructor () {
    super();
    this.state = store.getState();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.unsubscribeFromStore = store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromStore();
  }

  handleChange (evt) {
    store.dispatch(writeMessage(evt.target.value))
  }

  handleSubmit (evt) {
    evt.preventDefault();
    const content = this.state.newMessage;
    const channelId = this.props.channelId;
    const name = this.state.username;
    const thunk = sendMessage(content, channelId, name);
    store.dispatch(thunk);

  }

  render () {
    return (
      <form id="new-message-form" onSubmit={this.handleSubmit}>
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            value={this.state.newMessageEntry}
            placeholder="Say something nice..."
            onChange={this.handleChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit" >Chat!</button>
          </span>
        </div>
      </form>
    );
  }
}
