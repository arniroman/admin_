export default function assyncGetUsers(state=[], action) {
    switch (action.type){
        case 'LOAD_ALL_USERS':
            return action.payload
            
            
        break
        default:
            return [
                ...state
            ]
                
            
    }
} 

