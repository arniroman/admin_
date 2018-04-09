export default function postAuth (state=null, action) {
    switch (action.type){
       case 'POST_AUTH':
       return setTokenToLocalStorage(action.payload)
       break
       default:
       return state
    }
    
    
   //  else return state   
}



/** logic for reducer **/
function setTokenToLocalStorage(data){
        if(data.message == 'Auth successful'){
            localStorage.setItem('token',JSON.stringify(data))  
        }
    return data.message
}