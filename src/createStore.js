import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './reducers/rootReducer'
import {triggerAPICall} from './middlewares/getCodeFromApi'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let middlewares = [triggerAPICall, thunk, logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store