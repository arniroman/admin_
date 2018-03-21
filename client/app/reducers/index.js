import { combineReducers } from 'redux'
import propertie from './PropsData'
import postData from './createProduct'

const redusers = combineReducers ({
    properties: propertie,
    postDatas: postData
})

export default redusers