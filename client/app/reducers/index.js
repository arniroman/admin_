import { combineReducers } from 'redux'
import propertie from './PropsData'
import postData from './createProduct'
import getAllProduct from './getAllProduct'
import separatedProduct from './productView'
import productWichUpdate from './productWichUpdate'
import importToCSV from './importToCSV'
import assyncGetHistory from './getAllHistory'
import getAllUsers from './getAllUsers'
import getCurrentDataHistory from './getCurrentDataHistory'
import loadAllDiscount from './loadAllDiscount'

const redusers = combineReducers ({
    properties        : propertie,
    postDatas         : postData,
    getAllProducts    : getAllProduct,
    separatedProducts : separatedProduct,
    productWichUpdate : productWichUpdate,
    importToCSV       : importToCSV,
    assyncGetHistory  : assyncGetHistory,
    getAllUsers       : getAllUsers,
    getCurrentHistory : getCurrentDataHistory,
    allDiscount   : loadAllDiscount
})

export default redusers