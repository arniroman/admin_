import axios from 'axios'

export const loadDataProperties = () => dispatch => {
        axios.get('/properties')
                .then((response)=> {
                    dispatch({
                        type: 'LOAD',
                        payload: response.data
                    })
                })
}   
        

