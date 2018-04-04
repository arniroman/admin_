export const productViewWithTable = (item) => dispatch => {
        dispatch({
            type:'VIEW_INDIVIDUAL_ITEM',
            payload: item
        })
}
