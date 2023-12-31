const Quintity = (id) => {
    let quintityAdd = {};
    // chack the local storage item
    const chackQuinitity = localStorage.getItem('cart')
    if(chackQuinitity){
          quintityAdd = JSON.parse(chackQuinitity)
    }
    else{
          quintityAdd ={}
    }
    // add to local Storage 
    const localDb = quintityAdd[id];
    if(localDb){
          quintityAdd[id] = localDb + 1;
    }
    else{
          quintityAdd[id] = 1
    }
    localStorage.setItem('cart', JSON.stringify(quintityAdd))
}
// remoce the  local storage item 
const QuintityRemove = id => {
    const deleteItem = localStorage.getItem('cart')
    if(deleteItem){
          const newDelet = JSON.parse(deleteItem)
          if(id in newDelet){
                delete newDelet[id]
                localStorage.setItem('cart',JSON.stringify(newDelet))
          }
    }

}
export { Quintity, QuintityRemove }