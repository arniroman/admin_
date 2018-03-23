export default function post (state=null, action) {
    if (action.type === 'POST_DATA'){ 
        return {...action.payload}
        
    }
        else {
        return {
            ...state
        }
    }
}