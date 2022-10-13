import React from 'react'
import { AiFillHome } from "react-icons/ai"
import { AiTwotoneHeart } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { FaMoon } from "react-icons/fa"
import { useContext } from 'react'
import { DarkModeContext } from '../../context/Context'


export const TabBar = () => {
  const { dark, setDark } = useContext(DarkModeContext)

  const handleDarkMode = () => {
    setDark(!dark)
}
  return (
    <div className={`flex py-5 fixed bottom-0 left-0 right-0 bg-white z-50  
    items-center justify-center gap-8 shadow-inner md:gap-20 lg:hidden ${dark && 'bg-gray-800'}`}>
        <AiFillHome className='w-6 h-6 text-gray-400 cursor-pointer'/>
        <AiOutlineSearch className='w-6 h-6 text-primary cursor-pointer'/>
        <AiTwotoneHeart className='w-6 h-6 text-gray-400 cursor-pointer'/>
        <FaUserAlt className='w-6 h-6 text-gray-400 cursor-pointer'/>
        <button onClick={handleDarkMode}>
            <FaMoon className={`w-6 h-6 cursor-pointer ${dark && 'text-primary'}`} />
        </button>
    </div>
  )
}
