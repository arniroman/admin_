import axios from 'axios'
var formData = new FormData()

//var file = document.querySelector('#file')
//const config = { headers: { 'Content-Type': 'multipart/form-data' } };
export const ipmortToCSV = (file) => dispatch => {
    console.log(file)
    formData.append('data',file)
       
    const config = { headers: { 'enctype': 'multipart/form-data'} };
    axios.post('/exporttocsv', {
        "UploadCommand": formData
      },  { headers: {'Content-Type': 'multipart/form-data' }})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    
    
    
    
    
    /*
    
    axios.post('/exporttocsv',formData,config)
                    
       
       
       .then(respons=>{
                        dispatch({
                            type:'POST_CSV',
                            payload: respons.data
                        })
                    })*/
        }