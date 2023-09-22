
import {NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="bg-white md:col-span-1">
            <nav>
                <div className="flex justify-between md:justify-end">
                    <h1 className="font-bold uppercase p-4 border-b border-gray-100 hover:text-gray-600">
                        <NavLink to="/">DishDash</NavLink>
                    </h1>
                    <svg className="w-7 h-6 mr-3 cursor-pointer md:hidden" id="menuicon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>          
                </div>
                <ul className="mt-5 mb-2 hidden md:block" id="menu">
                    <li className="text-gray-600 font-bold text-right border-r-2 border-red-600 pr-4 mb-2">
                        <NavLink to="/">
                            <span className="mr-2">Home</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-6 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>              
                        </NavLink>
                    </li>
                    <li className="text-right border-r-2 pr-4 border-white mb-2">
                        <NavLink to="/about"> 
                            <span className="mr-2">About</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-6 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>              
                        </NavLink>
                    </li>
                    <li className="text-right border-r-2 pr-4 border-white mb-2">
                        <NavLink to="/contact">
                            <span className="mr-2">Contact</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-6 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>              
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
  }
  
  export default NavBar;