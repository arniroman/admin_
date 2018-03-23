import { combineReducers } from 'redux'
import propertie from './PropsData'
import postData from './createProduct'
import getAllProduct from './getAllProduct'

const redusers = combineReducers ({
    properties      : propertie,
    postDatas       : postData,
    getAllProducts  : getAllProduct,
})

export default redusers