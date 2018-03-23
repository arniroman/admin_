import { combineReducers } from 'redux'
import propertie from './PropsData'
import postData from './createProduct'
import getAllProduct from './getAllProduct'
import separatedProduct from './productView'

const redusers = combineReducers ({
    properties        : propertie,
    postDatas         : postData,
    getAllProducts    : getAllProduct,
    separatedProducts : separatedProduct
})

export default redusers