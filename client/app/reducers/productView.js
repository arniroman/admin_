export default function productViewWithTable (state=[],action){
    switch (action.type){
        case 'VIEW_INDIVIDUAL_ITEM':
        console.log(action.payload,'payload')
            return action.payload
            
        break
            default: return [...state]
    }

}