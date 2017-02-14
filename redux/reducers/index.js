import {combineReducers} from 'redux';
import comments from './comments';
import cnodes from './cnodes';

const rootReducer = combineReducers({
    comments,
    cnodes
});

export default rootReducer;