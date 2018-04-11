import { combineReducers } from 'redux'
import propertie from './PropsData'
import postData from './createProduct'
import getAllProduct from './getAllProduct'
import separatedProduct from './productView'
import productWichUpdate from './productWichUpdate'
import importToCSV from './importToCSV'
import createProps from './createProps'
import assyncGetHistory from './getAllHistory'
import getAllUsers from './getAllUsers'
import getCurrentDataHistory from './getCurrentDataHistory'
import loadAllDiscount from './loadAllDiscount'
import postDiscount from './createDiscount'
import loginAdmin from  './auth'

const redusers = combineReducers ({
    properties        : propertie,
    postDatas         : postData,
    getAllProducts    : getAllProduct,
    separatedProducts : separatedProduct,
    productWichUpdate : productWichUpdate,
    importCSV         : importToCSV,
    assyncGetHistory  : assyncGetHistory,
    getAllUsers       : getAllUsers,
    getCurrentHistory : getCurrentDataHistory,
    allDiscount       : loadAllDiscount,
    createDiscount    : postDiscount,
    loginAdminToken   : loginAdmin,
    createdPropsData  : createProps
})

export default redusers