
import {initialContacts} from './contacts.init-state';

import {FILTER, DELETE_CONTACT, ADD_CONTACT} from './contacts.type';

export const filterReducer = (state = '', {type, payload}) => {
    switch (type) {
        case FILTER:
            return {...state, contacts: payload}
        default:
            return state;
    }
    
};
export const contactsReducer = (state = initialContacts, { type, payload }) => {
    switch (type) {
      case DELETE_CONTACT:
        return state.filter((contact => contact.id !== payload));
        case ADD_CONTACT:
          return [...state, payload];
      default:
        return state;
    }
  };


