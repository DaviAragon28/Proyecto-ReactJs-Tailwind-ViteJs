import React from 'react'

export const CardTrending = ({ title, desc, bg, h, g }) => {
  return (
    <div className={`w-80  h-96  ${bg} bg-cover space-x-0 flex flex-col bg-center gap-2 rounded-xl p-8 md:w-72 lg:w-full ${h} ${g}`}>
        <h2  className='text-white text-3xl font-bold'>{title}</h2   >
        <p className='text-white text-md w-44 lg:w-full  font-semibold'>{desc}</p>
    </div>
  )
}
