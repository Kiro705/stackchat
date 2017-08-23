import { createStore } from 'redux';

const initialState = {
    messages: []
};

function reducer (state = initialState, action) {
    switch (action.type) {
      case GOT_MESSAGES_FROM_SERVER:
         return Object.assign({}, state, { messages: action.messages });
      default:
         return state;
    }
  }
 

const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';

const store = createStore(reducer)
export default store;

export const gotMessagesFromServer = function(messageArray){
    return {
        type: GOT_MESSAGES_FROM_SERVER,
        messages: messageArray
    };
};