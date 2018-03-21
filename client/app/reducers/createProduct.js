export default function post (state={}, action) {
    if (action.type === 'POST_DATA'){ 
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