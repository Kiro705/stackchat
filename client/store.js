import { createStore } from 'redux';

const initialState = {
    messages: [],
    newMessage: ''
};

const WRITE_MESSAGE = 'WRITE_MESSAGE';

const GOT_NEW_MESSAGE_FROM_SERVER = 'GOT_NEW_MESSAGE_FROM_SERVER';

const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';

const store = createStore(reducer)

export default store;

export const gotMessagesFromServer = function(messageArray){
    return {
        type: GOT_MESSAGES_FROM_SERVER,
        messages: messageArray
    };
};

export const gotNewMessageFromServer = function(messageString){
    return {
        type: GOT_NEW_MESSAGE_FROM_SERVER,
        message: messageString
    };
};

export const writeMessage = function(messageString){
    return {
        type: WRITE_MESSAGE,
        newMessageEntry: messageString
    };
};

function reducer (state = initialState, action) {
    switch (action.type) {
      case GOT_MESSAGES_FROM_SERVER:
         return Object.assign({}, state, { messages: action.messages });
      case GOT_NEW_MESSAGE_FROM_SERVER:
         return Object.assign({}, state, { messages: state.messages.concat(action.message) });
      case WRITE_MESSAGE:
         return Object.assign({}, state, { newMessage: action.newMessageEntry });
      default:
         return state;
    }
  }
