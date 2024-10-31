import { Link } from 'react-router-dom';
import bgImg from '../assets/books.jpg'

const Banner = () => {
    return (
        <div className="bg-gray-100 p-4 md:p-20 rounded-xl">
            <div className="hero  ">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full md:w-2/4">
                  <img
                    src={bgImg}
                    className=" rounded-lg shadow-2xl w-full" />
                </div>
                <div className='w-full md:w-2/4'>
                  <h1 className="text-3xl mb-8 md:text-5xl  font-bold">Books to freshen up your bookshelf</h1>
        
                  <Link to="/listedbook"><button className="btn btn-primary text-xl">View The List</button></Link>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Banner;