export default function assyncGetHistory(state={}, action) {
    switch (action.type){
        case 'LOAD_HISTORY':
            return action.payload
        
        break
        default:
            return [...state]
            
    }
} 
