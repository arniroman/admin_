export default function assyncGetHistory(state=null, action) {
    switch (action.type){
        case 'LOAD_HISTORY':
       // getHistory(action.payload)
            return action.payload 
        
        break
        default:
            return {
                ...state
            }
    }
} 

//
/*function getHistory(data){
    console.log(data,'lalla')
}*/