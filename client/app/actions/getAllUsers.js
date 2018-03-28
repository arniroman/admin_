import axios from 'axios'

export const getAllUsers = () => dispatch => {
        axios.get('/users')
                .then((response)=> {
                    dispatch({
                        type: 'LOAD_ALL_USERS',
                        payload: response.data
                    })
                })  
} 