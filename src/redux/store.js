import { combineReducers, createStore} from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import {contactsReducer, filterReducer} from './Contacts/contacts.reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const enhancer = devToolsEnhancer();

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

const rootReducer = combineReducers({
    filter: filterReducer,
    contacts: contactsReducer,
});

const persistedReducer = persistReducer(contactsPersistConfig, rootReducer);

export const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);