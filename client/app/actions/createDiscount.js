import axios from 'axios'

export const createDiscount = product => dispatch => {
       axios.post('/discount',{product})
                    .then(respons=>{
                        dispatch({
                            type:'POST_DISCOUNT',
                            payload: respons.data
                        })
                    })
        }