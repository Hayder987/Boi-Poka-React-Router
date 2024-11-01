import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadItems, getWishItem,  removeReadItem, removewishItem } from "../utilites/utility";
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

   
    
    return (
        <div>

            <div className="min-h-screen">
               <Tabs>
                 <TabList>
                   <Tab >Read Books</Tab>
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
                     <div className="p-4 flex justify-center">
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
                  </div>
                 </TabPanel>
               </Tabs>
               
            </div>
          
        </div>
    );
};

export default ListedBook;