export default function createProduct (state=null, action) { 
    switch (action.type){
        case 'POST_DATA':
        console.log(action.payload,'create')
            return  action.payload
        break
        default :
            return state
    }
}