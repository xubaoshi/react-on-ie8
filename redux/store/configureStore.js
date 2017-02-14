import { createStore, applyMiddleware,combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/index'
import { routerReducer } from 'react-router-redux'

const combinedReducer = combineReducers({
    rootReducer,
    routing: routerReducer
})

export default function configureStore(initialState) {
    const store = createStore(
        combinedReducer,
        initialState,
        applyMiddleware(thunkMiddleware, createLogger())
    )
    return store
}
