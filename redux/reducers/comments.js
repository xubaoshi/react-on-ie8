import * as Types from '../../constants/actionTypes';
import * as Actions from '../actions';
import objectAssign from 'object-assign';

const initialState = [
    {
        "id": 1,
        "author": "Pete Hunt",
        "text": "This is one comment"
    },
    {
        "id": 2,
        "author": "Jordan Walke",
        "text": "This is *another* comment"
    }
]

export default function comments(state = initialState, action) {
    switch (action.type) {
        case Types.ADD_COMMIT:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    author: action.obj.author,
                    text: action.obj.text
                }
            ];
        default:
        return state;
    }
}