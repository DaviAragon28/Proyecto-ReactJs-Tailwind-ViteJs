import React from "react";

export const Card = ({ title, desc, bg , color = 'bg-white', textColor = 'text-white' }) => {
    return (
        <div className="flex-none w-48 h-64 shadow-lg rounded-lg overflow-hidden 
            transform transition-all hover:-translate-y-4 hover:shadow-xl">

            <div 
                className={`w-full h-3/5 ${bg} bg-cover bg-center`}>
            </div>

            <div className={`w-full h-2/5 ${color} p-4`} >
                <p className={`${textColor} text-bold text-xl `}>{title}</p>
                <p className={`${textColor} text-md`}>{desc}</p>
            </div>

        </div>
    )
}