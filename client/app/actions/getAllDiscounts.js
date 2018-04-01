import axios from 'axios'

export const getAllDiscounts = () => dispatch => {
        axios.get('/discount')
                .then((response) => {
                    dispatch({
                        type: 'LOAD_ALL_DISCOUNT',
                        payload: response.data
                    })
                })  
} 