import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Root from './Components/Root';
import ErrorPages from './pages/ErrorPages';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ListedBook from './pages/ListedBook';
import BookDetails from './pages/BookDetails';

const router =createBrowserRouter([
  {
    path:"/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,
    children:[
      {
      path: "/",
      element: <Home></Home>
      },
      {
        path: "/listedbook",
        element: <ListedBook></ListedBook>,
        loader: ()=> fetch("/booksData.json")
      },
      {
        path: "/book/:bookIdx",
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch("./booksData.json"),
        
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer 
    position="top-right"
    autoClose={1900}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
  </StrictMode>,
)
