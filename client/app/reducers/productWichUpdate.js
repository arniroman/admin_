export default function productWhichUpdate (state=null,action){
    switch (action.type){
        case 'CHOVSEN_PRODUCT_FOR_UPDATE':
            return {
                ...action.payload
            }
        break
            default: return state
    }

}