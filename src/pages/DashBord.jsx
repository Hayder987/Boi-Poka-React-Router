import { useEffect, useState } from "react";
import { getReadItems } from "../utilites/utility";
import { useLoaderData } from "react-router-dom";
import Chart from "../Components/Chart";



const DashBord = () => {

    const [readData, setReadData] = useState([])
    const allData = useLoaderData()
    
    useEffect(()=>{
        const readData = getReadItems();
        setReadData(readData);
    },[])

    const readitems = allData.filter(item=> readData.includes(item.bookId))

       

    return (
        <div>
          <Chart readitems={readitems}></Chart>   
        </div>
    );
};

export default DashBord;