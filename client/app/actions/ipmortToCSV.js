import axios from 'axios'
const fd = new FormData()
const concat = require("concat-stream")
const config = { headers: { 'Content-Type': 'multipart/form-data' } }

export const ipmortToCSV = (file) => dispatch => {
  
  fd.append('file',file)
   
  axios.post("/upload", fd, config)
       .then((response)=> {
          dispatch({
              type: 'IMPORT_CSV',
              payload: response.data
          })
      }).catch(function (error) {
                console.log(error);
              })
}
