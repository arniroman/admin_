export const  getCurrentDataHistory = (item) => dispatch => {
    dispatch({
        type    :'GET_CURRENT_DATA_HISTORY',
        payload : item
    })
}
