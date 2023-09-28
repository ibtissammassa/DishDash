import { Link } from "react-router-dom";

//images
import NotfoundImg from "../assets/images/clip-1386.png";

function NotFound() {
    return ( 
            <div className="bg-gray-100 px-16 py-40 md:col-span-4 h-full flex flex-col justify-center items-center">
                <h2 className="text-gray-700 text-5xl font-semibold tracking-wider">Page Not found !</h2>
                <img src={NotfoundImg} alt="" />
                <Link to="/" className="text-lg py-2">Back Home</Link>
            </div>
        );
}

export default NotFound;