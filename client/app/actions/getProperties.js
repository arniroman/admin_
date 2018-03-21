import axios from 'axios'

export const loadDataProperties = () => {
    return dispatch => {
        axios.get('/properties')
                .then((response)=> {
                    dispatch({
                        type: 'LOAD',
                        payload: response.data
                    })
                })
    }
}   
        
/*
export const postProduct = product => dispatch => {
        axios.post('/product',product)
                    .then(respons=>{
                        dispatch({
                            type:'POST_PrODUCT',
                            payload: respons.data
                        })
                    })
}*/

