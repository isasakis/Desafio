import { combineReducers } from 'redux';
import pessoa from './pessoa';
import alert from './alert';

export default combineReducers({
    pessoa,
    alert
});