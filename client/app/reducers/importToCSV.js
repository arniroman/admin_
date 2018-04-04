export default function importToCSV (state=null,action){
    switch (action.type){
        case 'IMPORT_CSV':
            return action.payload
            
        break
            default: 
            return state
    }
}

