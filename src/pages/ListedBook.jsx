import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadItems, getWishItem,  removeAllReadDb,  removeAllwishDb,  removeReadItem, removewishItem } from "../utilites/utility";
import Book from "../Components/Book";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ImCross } from "react-icons/im";


const ListedBook = () => {
    const allData = useLoaderData()

    const [allReadData, setAllReadData] = useState([]);
    const [allWishData, setAllWishData] = useState([]);
    
    useEffect(()=>{
       const savedData = getReadItems()
       const savedDataNumber = savedData.map(item=> parseInt(item))

       const filtData = allData.filter(eachData=> savedDataNumber.includes(eachData.bookId) )
       setAllReadData(filtData)
    },[])

   useEffect(()=>{
     const wishData = getWishItem()
     const fitWish = allData.filter(item=> wishData.includes(item.bookId))
     setAllWishData(fitWish)
   },[])

   const RemoveItemsRead =(id)=>{
    const removeRead = allReadData.filter(item=> item.bookId !== id)
    setAllReadData(removeRead) 
     removeReadItem(id)
   }

   const RemoveItemsWish =(id)=>{
    const removeWish = allWishData.filter(item=> item.bookId !== id)
    setAllWishData(removeWish) 
     removewishItem(id)
   }


   const removeAllReadItem = ()=>{
          removeAllReadDb()
          setAllReadData([])
   }

   const removeAllwishItems = ()=>{
    removeAllwishDb()
    setAllWishData([])
}
const [sort, setSort]= useState("")

const sortBtnHandeler=(sortData)=>{
  setSort(sortData)
  if(sortData==="Pages"){
    const sortReadData = [...allReadData].sort((a,b)=> a.totalPages - b.totalPages)
    setAllReadData(sortReadData)
  }
  if(sortData==="Rating"){
    const sortReadData2 = [...allReadData].sort((a,b)=> b.rating - a.rating)
    setAllReadData(sortReadData2)
  }
}
   
    
    return (
        <div>

            <div className="min-h-screen">
              <div className="relative">
                <div className="dropdown dropdown-bottom absolute -top-10 right-0">
                  <div tabIndex={0} role="button" className="btn m-3">{
                    sort? `Sorted-By: ${sort}`: "Sorted-By"
                    }</div>
                  <ul tabIndex={0} className="dropdown-content menu bg-blue-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=> sortBtnHandeler("Pages")}><a>Pages</a></li>
                    <li onClick={()=> sortBtnHandeler("Rating")}><a>Rating</a></li>
                  </ul>
                </div>
              </div>
               <Tabs >
                 <TabList>
                   <Tab>Read Books</Tab>
                   <Tab>Wish-List</Tab>
                 </TabList>
             
                 <TabPanel>
                   <h2></h2>
                  <div className="">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {
                        allReadData.map(book=> (
                          <div key={book.bookId} className="relative">
                            <Book  book={book}></Book>
                            <div onClick={()=> RemoveItemsRead(book.bookId)} className="p-3 absolute top-4 right-4 border-2 w-10 h-10 bg-red-200 flex justify-center items-center rounded-full">
                           <ImCross />
                          </div>
                          </div>
                        ))
                      } 
                        
                     </div>
                     <div onClick={removeAllReadItem} className="p-4 flex justify-center">
                         {
                           allReadData.length>0 ? <button  className="bg-orange-400 font-bold  py-3 px-6 rounded-xl">Clear All</button>:
                           <h1 className="text-3xl font-bold">No Books Found!</h1>
                         }
                     </div>
                  </div>
                 </TabPanel>
                 <TabPanel>
                   <h2></h2>
                   <div className="">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {
                        allWishData.map(book=> (
                          <div key={book.bookId} className="relative">
                            <Book  book={book}></Book>
                            <div onClick={()=> RemoveItemsWish(book.bookId)} className="p-3 absolute top-4 right-4 border-2 w-10 h-10 bg-red-200 flex justify-center items-center rounded-full">
                           <ImCross />
                          </div>
                          </div>
                        ))
                      } 
                        
                     </div>
                     <div onClick={removeAllwishItems} className="p-4 flex justify-center">
                         {
                           allWishData.length>0 ? <button  className="bg-orange-400 font-bold  py-3 px-6 rounded-xl">Clear All</button>:
                           <h1 className="text-3xl font-bold">No Books Found!</h1>
                         }
                     </div>
                  </div>
                 </TabPanel>
               </Tabs>
               
            </div>
          
        </div>
    );
};

export default ListedBook;