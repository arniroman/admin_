export default function getCurrentDataHistory (state=null,action){
    switch (action.type){
        case 'GET_CURRENT_DATA_HISTORY':
            return action.payload
            
        break
            default: 
            return {
                ...state
            }
    }
}