export default function createProps (state=null, action) { 
    switch (action.type){
        case 'POST_PROPERTIES':
        console.log(action.payload,'create')
            return  action.payload
        break
        default :
            return state
    }
}