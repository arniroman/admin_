export default function post (state=null, action) {
    if (action.type === 'POST_DATA'){ 
        //console.log(state,'state its')
        return {...action.payload}
        
    }
        else {
        return {
            ...state
        }
    }
}