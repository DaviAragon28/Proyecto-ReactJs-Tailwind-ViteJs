import React from 'react'
import { FaUserAlt } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { FaMoon } from "react-icons/fa"
import  {DarkModeContext } from '../../context/Context'




export const Header = () => {

    const { dark, setDark } = React.useContext(DarkModeContext)
    
    const handleDarkMode = () => {
        setDark(!dark)
        console.log(dark);
    }

    return (
        <nav className={`hidden  lg:p-5 lg:flex lg:justify-around lg:fixed lg:left-0 lg:top-0 lg:right-0 text-primary bg-white lg:shadow-lg lg:text-bold lg:z-10 ${dark && 'bg-gray-800 text-white'}`}>
            <ul>
                <li>Platzi Travel</li>
            </ul>

            <ul className='flex gap-8'>
                <li>Locations</li>
                <li>Stays</li>
                <li>FAQS</li>
                <li>About us</li>
            </ul>

            <ul className='flex gap-8 '>
                <li>
                    <AiOutlineSearch className='w-6 h-6 cursor-pointer' />
                </li>
                <button onClick={handleDarkMode}>
                    <FaMoon className={`w-6 h-6 cursor-pointer ${dark && 'text-primary'}`}/>
                </button>
                <li>
                    <FaUserAlt className={`text-gray-300 w-6 h-6 cursor-pointer `}/>
                </li>
            </ul>
        </nav>
    )
}