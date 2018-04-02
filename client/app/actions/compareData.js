import axios from 'axios'

export const compareData = () => dispatch => {
        axios.get('/compareData')
                .then((response)=> {
                    dispatch({
                        type: 'COMPARE DATA',
                        payload: response.data
                    })
                })  
} 