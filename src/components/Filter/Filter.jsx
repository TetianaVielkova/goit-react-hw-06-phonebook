import { useDispatch } from 'react-redux';
import { contactsFilterAction } from 'redux/Contacts/contacts.actions';
import {Input, Label} from './Filter.styled'

export const Filter = () => {
    const dispatch = useDispatch();

    // const handelFilterContact = event => {
    //     dispatch(contactsFilterAction(event.target.value.toLowerCase()));
    // }
    
    return(
        <div>
            <Label>Find contacts by name
                <Input
                autoComplete="off"
                type="text"
                name="filter"
                onChange={event => dispatch(contactsFilterAction(event.target.value.toLowerCase()))}
                />
            </Label>
        </div>
    )
}
