// store.js
import { createStore } from 'redux';
import coverReducer from './reducers';

const store = createStore(coverReducer);

export default store;
