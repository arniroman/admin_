import axios from 'axios'

export const loginAdmin = data => dispatch => {
       axios.post('/admin/login',data )
                    .then(respons=>{
                        dispatch({
                            type:'POST_AUTH',
                            payload: respons.data
                        })
                    })
        }