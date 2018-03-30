export const  getCurrentDataHistory = (item) => dispatch => {
    dispatch({
        type    :'GET_CURRENT_DATA_HISTORY',
        payload : item
    })
}
// import axios from 'axios'
// export const getCurrentDataHistory = (id) => dispatch => {
//     axios.get(`/currentHistory/${id}`)
//             .then((response)=> {
//                 dispatch({
//                     type: 'GET_CURRENT_DATA_HISTORY',
//                     payload: response.data
//                 })
//             })  
// } 