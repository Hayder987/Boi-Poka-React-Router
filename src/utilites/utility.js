
const getReadItems =()=>{
    const getstrId = localStorage.getItem("read");
    if(getstrId){
        return JSON.parse(getstrId)
    }
    else{
        return []
    }
}

const setReadItems =(id)=>{
   const readItem = getReadItems()
   if(readItem.includes(id)){
         console.log("item allready added")
   }
   else{
    readItem.push(id)
    const readItemStr = JSON.stringify(readItem)
    localStorage.setItem("read", readItemStr)

   }
}

export {setReadItems, getReadItems}