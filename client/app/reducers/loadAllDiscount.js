export default function loadAllDiscount (state=[], action) {
    switch (action.type){
        case 'LOAD_ALL_DISCOUNT':
            return action.payload
        break
        default:
            return  [
                ...state
            ]
    }
}