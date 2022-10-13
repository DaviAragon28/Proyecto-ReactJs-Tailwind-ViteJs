import React from "react";

export const Input = () => {
    return (
        <input className="outline-none py-3 
            px-6 rounded-full transition-all 
            duration-500 focus-within:shadow-sm focus:ring-2 
            focus:w-11/12 lg:hidden" placeholder="San Francisco" type="search"
        />
    )
}