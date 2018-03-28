export default function importToCSV (state=null,action){
    switch (action.type){
        case 'POST_CSV':
            return {
                ...action.payload
            }
        break
            default: return state
    }

}