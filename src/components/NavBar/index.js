import React from "react";
import { NavLink } from 'react-router-dom';


const NavBar = () => {


    return (
     <nav className="text-lg bg-white border-gray-200 px-2 sm:px-4 py-2.5 flex items-center justify-between sticky">
        <NavLink to='/'>
            <div className="logo">Sarlaccable</div>
        </NavLink>
        <div className="flex space-x-4">
        <a target='_blank' rel="noreferrer" href='https://mothwork.github.io'>Created by Brett Hageft</a>
        </div>
    </nav>
    )

}

export default NavBar
