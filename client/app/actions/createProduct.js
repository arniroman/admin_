import axios from 'axios'

export const postProduct = product => dispatch => {
       axios.post('/product',{product})
                    .then(respons=>{
                        dispatch({
                            type:'POST_DATA',
                            payload: respons.data
                        })
                    })
        }