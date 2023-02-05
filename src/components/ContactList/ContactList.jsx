import PropTypes from 'prop-types';
import {List, Item, DeleteBtn} from './ContactList.styled'

import { useDispatch, useSelector} from 'react-redux';
import { deleteContactsAction } from 'redux/Contacts/contacts.actions';


export const ContactList = () => {

    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch(deleteContactsAction);
    
    const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
);



    return(
        <List>
            {filteredContacts.map(({id, name, number}) => (
                <Item key={id}>{name}: {number}
                <DeleteBtn
                    type='button' onClick={() => dispatch(deleteContactsAction(id))}>Delete
                </DeleteBtn>
                </Item>
            ))}
        </List>
    )
}

ContactList.protoType = {
    contact: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.number,
        })
    ),
    onDeleteContact: PropTypes.func,
};