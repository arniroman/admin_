import axios from 'axios'

export const handlePaginationLists = (id) => distpatch => {
        axios.get(`/product`+'/'+id)
             .then((response) => {
                 distpatch({
                     type: 'HANDLE_LIST',
                     payload: response.data
                 })
             })
}