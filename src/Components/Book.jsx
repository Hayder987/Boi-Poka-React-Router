import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


const Book = ({book}) => {
    const{bookId, bookName, author, image, totalPages, rating,
        category, tags, yearOfPublishing
    } = book;

    const navigation = useNavigate()

    const btnNavigate=()=>{
        navigation(`/book/${bookId}`)
    }

    return (
        <div onClick={btnNavigate}
         className="border-2 p-4 rounded-xl ">
           <div className="flex justify-center  mb-4 bg-gray-200 p-6 rounded-xl">
             <img src={image} alt="" 
             className="rounded-lg w-48 h-64" />
           </div>
           <div className="flex justify-evenly mb-4">
            {
                tags.map((tag, idx)=>(
                 <button key={idx} className="bg-green-100 text-green-500 font-sans py-2 px-4 rounded-xl font-bold">{tag}</button>
                ))
            }
           </div>
            <div className="border-b-2 border-dashed mb-3">
              <h3 className="text-2xl font-bold mb-3">{bookName}</h3>
              <p className="font-sans font-medium mb-3">by: {author}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="font-medium text-xl">{category}</p>
              <p className="flex justify-center gap-3 items-center font-sans"><span className="text-2xl">{rating}</span> 
                <span className="">
                   <div className="rating">
                     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                     <input
                       type="radio"
                       name="rating-2"
                       className="mask mask-star-2 bg-orange-400"
                       defaultChecked />
                     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                   </div>
                </span>
              </p>
            </div>
            <div className="flex justify-between mb-3">
              <p className="font-sans font-medium">TotalPages: {totalPages}</p>
              <p className="font-sans font-medium">Published: {yearOfPublishing}</p>
            </div>
            
        </div>
    );
};
Book.propTypes ={
    book: PropTypes.object.isRequired,
}

export default Book;