import axios from 'axios'

export const handlePaginationLists = (id,event) => distpatch => {
        axios.get(`/product`+'/'+id+','+event)
             .then((response) => {
                 distpatch({
                     type: 'HANDLE_LIST',
                     payload: response.data
                 })
             })
}