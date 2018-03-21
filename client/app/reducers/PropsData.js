export default function assyncGet(state={}, action) {
    if (action.type === 'LOAD'){ 
        return {
             ...state,
             payload: action.payload
        }
    } 
    else {
        return {
            ...state
        }
    }
}



