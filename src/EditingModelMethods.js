const getField = (model) => {
    try{
        return Object.keys(model)[0]
    } catch(error){
        console.error(error)
    }
    
}

const getEditedCell = (model) => {

  
  let id = getField(model);
  
  let cell = getField(model[id])
  
  let value = model[id][cell].value
  return value
  }

  export {getEditedCell, getField}