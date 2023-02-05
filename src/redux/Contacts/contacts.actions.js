import { FILTER, DELETE_CONTACT, ADD_CONTACT } from "./contacts.type"


export const contactsFilterAction = payload => ({type: FILTER, payload});
export const deleteContactsAction = payload => ({ type: DELETE_CONTACT, payload });
export const addNewContactsAction = payload => ({ type: ADD_CONTACT, payload });;
