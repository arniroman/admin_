import axios from 'axios'

export const getAllHistory = () => dispatch => {
        axios.get('/historyShop')
                .then((response)=> {
                    dispatch({
                        type: 'LOAD_HISTORY',
                        payload: response.data
                    })
                })  
} 