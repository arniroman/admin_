import { applyMiddleware, createStore } from 'redux'

import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

function reducers(state ={}){
    return state
}

const middleware = applyMiddleware(promise(),thunk)

export default createStore(reducers,middleware)