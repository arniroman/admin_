export default function postDiscount(state=null, action) {
   
    switch (action.type){
        case 'POST_DISCOUNT':
        console.log(action.payload,'lalal')
            return action.payload
        break
            default:return state
    } 
} 
   