export default function assyncGetProduct(state=null, action) {
    switch (action.type){
        case 'LOAD_ALL_PRODUCT':
            return  { 
                ...action.payload 
            }
        break
        case 'HANDLE_LIST':
            return {
            ...action.payload
            }
        break
        case 'DELETE_PRODUCT':
            return deleteProduct(action.payload,state)
        break
        case 'UPDATE_PRODUCT':
            console.log(action.payload,'update')
            return {
                ...state
            }
        break
        default:
            return {
                ...state
            }
    }
} 


// --- logic for reducer --- // 
function deleteProduct(product,state){
    let newState = {...state}
    newState.product = newState.product.filter((el,index) => {
        return el._id !== product._id;
    })
    return newState
}