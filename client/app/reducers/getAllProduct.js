export default function assyncGetProduct(state={}, action) {
    switch (action.type){
        case 'LOAD_ALL_PRODUCT':
        return {
            ...state,
            payload: action.payload
       }
        break
        case 'HANDLE_LIST':
        return {
            ...state,
            payload: action.payload
       }
       break
       case 'DELETE_PRODUCT':

       default:
       return{
           ...state
       }
    }
} 
 
