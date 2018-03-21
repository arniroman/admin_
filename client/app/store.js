import { applyMiddleware, createStore } from 'redux'

import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'


export default createStore( reducers, composeWithDevTools(applyMiddleware(thunk)) )
