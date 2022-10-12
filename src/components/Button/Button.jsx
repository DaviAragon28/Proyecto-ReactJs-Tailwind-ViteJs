import React from "react";

export const Button = ({ desc }) => {
    return (
        <button className="w-48 rounded-full bg-white 
        text-lg text-primary shadow-sm font-semibold p-4  transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110" >
            {desc}
        </button>
    )
}