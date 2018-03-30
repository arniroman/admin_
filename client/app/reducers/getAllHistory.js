export default function assyncGetHistory(state={}, action) {
    switch (action.type){
        case 'LOAD_HISTORY':
       //   console.log(action.payload,'reducer')
            return action.payload
        
        break
        default:
            return [...state]
            
    }
} 

//

function getHistory(data){
    
    let newArr = []
    if(Array.isArray(data)){
        data.forEach(el=>{
            newArr.push(el.us)
        })
    }
    console.log(newArr)
    return newArr
}