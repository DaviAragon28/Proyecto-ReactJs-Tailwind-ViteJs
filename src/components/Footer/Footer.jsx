import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";


const listFooter = ['Investors', 'Jobs', 'Privacy policy', 'Terms and Conditions', 'Platzi travel, inc', 'Follow us']

export const Footer = () => {
    return (
        <footer className='bg-gray-100 text-gray-500 p-4 mb-14 lg:mb-0 md:flex md:justify-around md:items-center'>
            <p className='text-xl pb-3 '>About us</p>
            <ul className='flex flex-col gap-1 pb-2 md:flex-row md:gap-3 md:items-center md:text-[12px] lg:gap-8'>
                {
                    listFooter.map(list => (
                        <li className='text-base' key={list}>{list}</li>
                    ))
                }
            </ul>
            <div className='flex gap-2'>
                <AiOutlineTwitter className='w-8 h-8'/>
                <AiOutlineInstagram className='w-8 h-8'/>
            </div>
        </footer>
    )
}
