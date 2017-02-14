import * as Types from '../../constants/actionTypes';
import * as Actions from '../actions';
import objectAssign from 'object-assign';

const initialState = [
]

export default function comments(state = initialState, action) {
    switch (action.type) {
        case Types.LIST_CNODE_REQUEST:
            return action.res.data;
        default:
        return state;
    }
}