import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadItems } from "../utilites/utility";
import Book from "../Components/Book";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ListedBook = () => {
    const allData = useLoaderData()

    const [allReadData, setAllReadData] = useState([])
    
    useEffect(()=>{
       const savedData = getReadItems()
       const savedDataNumber = savedData.map(item=> parseInt(item))

       const filtData = allData.filter(eachData=> savedDataNumber.includes(eachData.bookId) )
       setAllReadData(filtData)
    },[])
    
    return (
        <div>

            <div className="">
               <Tabs>
                 <TabList>
                   <Tab >Read Books</Tab>
                   <Tab>Wish-List</Tab>
                 </TabList>
             
                 <TabPanel>
                   <h2></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {
                     allReadData.map(book=> <Book key={book.bookId} book={book}></Book>)
                   } 
                  </div>
                 </TabPanel>
                 <TabPanel>
                   <h2>Any content 2</h2>
                 </TabPanel>
               </Tabs>
            </div>
          
        </div>
    );
};

export default ListedBook;