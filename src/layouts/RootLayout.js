import { Outlet } from "react-router-dom";

//components
import NavBar from "../components/NavBar";

function RootLayout() {
    return ( 
        <div className="text-gray-500 font-Nonito">
            <div className="grid md:grid-cols-5">
                <NavBar/>
                <Outlet/>
            </div>
        </div>
     );
}

export default RootLayout;