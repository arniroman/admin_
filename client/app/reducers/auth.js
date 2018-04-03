export default function post (state=null, action) {
   // console.log(action.payload,'lalal')
   
    if (action.type === 'POST_AUTH'){ 
        return setTokenToLocalStorage(action.payload)
    }
        else {
        return {
            ...state
        }
    }
}
/** logic for reducer **/
function setTokenToLocalStorage(data){
        if(data.message == 'Auth successful'){
            localStorage.setItem('token',JSON.stringify(data))  
        }
    return data.message
}