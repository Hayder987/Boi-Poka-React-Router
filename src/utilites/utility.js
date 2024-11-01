import { toast } from "react-toastify";

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
         toast.error("Books Already added your ReadList!")
   }
   else{
    readItem.push(id)
    saveReadItems(readItem)
    toast.success("This Book Added Your Read List SuccessFully!")
   }
}

const removeReadItem =(id)=>{
    const readItem = getReadItems()
    const filterReadItem = readItem.filter(item => item !== id)
    saveReadItems(filterReadItem)
    toast.error("This Book Remove From Your ReadList")
}

const saveReadItems=(readItem)=>{
    const readItemStr = JSON.stringify(readItem)
    localStorage.setItem("read", readItemStr)
}

const saveWishItems=(wishItem)=>{
    const wishtStr = JSON.stringify(wishItem)
        localStorage.setItem("wish", wishtStr)
}

const removewishItem =(id)=>{
    const wishItem = getWishItem()
    const filterwishItem = wishItem.filter(item => item !== id)
    saveWishItems(filterwishItem)
    toast.error("This Book Remove From Your ReadList")
}


const getWishItem = ()=>{
    const getItemsStr = localStorage.getItem("wish")
    if(getItemsStr){
        return JSON.parse(getItemsStr)
    }
    else{
        return []
    }
}

const addWishList =(id)=>{
    const wishItem = getWishItem();
    if(wishItem.includes(id)){
        toast.error("Books Already added your WishList!")
    }
    else{
        wishItem.push(id)
        saveWishItems(wishItem)
        toast.success("This Book Added Your Wish List SuccessFully!")
    }
}




export {setReadItems, getReadItems, addWishList, getWishItem ,removewishItem,saveReadItems, removeReadItem,}