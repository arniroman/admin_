import axios from 'axios'

export const updateProducts = (id,data) => dispatch => {
    axios.put(`/product`+'/'+id,data)
            .then((response) => {
                dispatch({
                    type    :'UPDATE_PRODUCT',
                    payload : response.data 
                })
            })
}