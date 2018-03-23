export const  productWhichUpdate = (item) => dispatch => {
    dispatch({
        type    :'CHOVSEN_PRODUCT_FOR_UPDATE',
        payload : item
    })
}