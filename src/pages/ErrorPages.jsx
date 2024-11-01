import { useRouteError } from "react-router-dom";


const ErrorPages = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
           <h1 className="text-4xl">{error.data}</h1>
        </div>
    );
};

export default ErrorPages;