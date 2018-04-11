import axios from 'axios'

export const createProperties = data => dispatch => {
       axios.post('/properties',data )
                    .then(respons =>{
                        dispatch({
                            type:'POST_PROPERTIES',
                            payload: respons.data
                        })
                    })
        }