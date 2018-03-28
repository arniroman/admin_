import axios from 'axios'

export const getAllHistory = () => dispatch => {
        axios.get('/history')
                .then((response)=> {
                    dispatch({
                        type: 'LOAD_HISTORY',
                        payload: response.data
                    })
                })  
} 