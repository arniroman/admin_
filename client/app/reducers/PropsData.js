export default function assyncGet(state=null, action) {
    switch (action.type){
        case 'LOAD':
            return action.payload
        break
            default:return state
    } 
} 
   




