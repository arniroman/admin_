import axios from 'axios'

export const deleteProduct = (id) => dispatch => {
    axios.delete(`/product`+'/'+id)
            .then((response) => {
                dispatch({
                    type    :'DELETE_PRODUCT',
                    payload : response.data 
                })
            })
}