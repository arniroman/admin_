export const productViewWithTable = (item) => dispatch => {
        dispatch({
            type:'VIEW_INDIVIDUAL_ITEM',
            payload: item
        })
}


// import axios from 'axios'
// export const productViewWithTable = (id) => dispatch => {
//    // console.log(id)
//     axios.get(`/currentHistory/${id}`)
//             .then((response)=> {
//                 dispatch({
//                     type: 'VIEW_INDIVIDUAL_ITEM',
//                     payload: response.data
//                 })
//             })  
// } 