export default function importToCSV (state=null,action){
  //  console.log(action.payload,'csvsdsd')
    switch (action.type){
        case 'IMPORT_CSV':
            return action.payload
            
        break
            default: 
            return state
    }
}

