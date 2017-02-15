import * as Types from '../../constants/actionTypes';
import * as Actions from '../actions';
import objectAssign from 'object-assign';

const initialState = { isFetching: false, data: [] }

export default function comments(state = initialState, action) {
    switch (action.type) {
        case Types.LIST_CNODE_REQUEST:
            return objectAssign({}, state, { isFetching: true });
        case Types.LIST_CNODE_REQUEST_SUCCESS:
            return objectAssign({}, state, { data: action.res.data, isFetching: false })
        default:
            return state;
    }
}