import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { addWishList, setReadItems } from "../utilites/utility";



const BookDetails = () => {
   
   const allBook = useLoaderData()
   const {bookIdx} = useParams()
   const bookIdxx = parseInt(bookIdx);
     console.log(bookIdx)


   const book = allBook.find(item=> item.bookId === bookIdxx)

   const{bookId, bookName, author, image, totalPages, rating,
    category, tags, yearOfPublishing,review,publisher
    } = book;
    
    const navigate = useNavigate()
    const backBtnHandaler =()=>{
          navigate(-1)
    }

    const readBtnHandaler=(id)=>{
       setReadItems(id)   
    }
    const wishBtnhandeler =(id)=>{
      addWishList(id)
    }

    return (
        <div>
          <div className="flex gap-6 flex-col md:flex-row justify-center items-center ">
            <div className="w-full md:w-4/12 bg-gray-100 flex justify-center p-4">
              <img src={image} alt="" className="w-72 h-[420px]" /> 
            </div>

            <div className="w-full md:w-8/12 p-4">
               <div className=" mb-3">
                 <h3 className="text-3xl md:text-4xl font-bold mb-3">{bookName}</h3>
                 <p className="font-sans font-medium mb-3">by: {author}</p>
               </div>
               <div className="border-y-2 py-4">
                <p className="font-medium text-xl ">{category}</p>
               </div>
               <div className="mb-4">
                  <p className="mb-4">
                      <span className="text-base font-sans font-bold">Review: </span>
                      <span className="">{review}</span>
                  </p>
                  <div className="flex justify-evenly mb-4 border-b-2 py-4">
                    {
                        tags.map((tag, idx)=>(
                         <button key={idx} className="bg-green-100 text-green-500 font-sans py-2 px-4 rounded-xl font-bold">{tag}</button>
                        ))
                    }
                  </div>
               </div>
               <p className="font-sans mb-3">
                <span className="text-base font-semibold ">Name Of Pages: </span>
                <span className="ml-12">{totalPages} </span>
               </p>
               <p className="font-sans mb-3">
                <span className="text-base font-semibold ">Publisher: </span>
                <span className="ml-12">{publisher} </span>
               </p>
               <p className="font-sans mb-3">
                <span className="text-base font-semibold ">Year of Publishing: </span>
                <span className="ml-12">{yearOfPublishing} </span>
               </p>
               <p className="font-sans mb-3">
                <span className="text-base font-semibold ">Rating:: </span>
                <span className="ml-12">{rating} </span>
               </p>
               <div className="flex gap-6 mb-10">
                <button onClick={()=> readBtnHandaler(bookId)} className="border-2 py-3 px-6 rounded font-bold  bg-blue-100">Mark as Read</button>
                <button onClick={()=> wishBtnhandeler(bookId)} className="border-2 py-3 px-6 rounded font-bold bg-green-500 text-white  ">Wishlist</button>
               </div>
               <div className="">
                <button onClick={backBtnHandaler} className="border-2 w-full py-3 px-8 rounded font-bold  bg-green-100 text-green-600">Back To Home</button>
               </div>
            </div>
            
          </div> 
        </div>
    );
};

export default BookDetails;