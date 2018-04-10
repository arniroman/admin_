import axios from 'axios'

export const postProduct = data => dispatch => {
       axios.post('/product',data)
                    .then(respons=>{
                        dispatch({
                            type:'POST_DATA',
                            payload: respons.data
                        })
                    })
        }