import React from "react";
import { Input } from '../components/Input/Input'
import { Button } from '../components/Button/Button'


export const ContainerButtonInput = () => {
    
    return (
        <div className="w-full h-full flex flex-col justify-between py-8 items-center lg:justify-start lg:items-start lg:pt-60  lg:pl-20">
            <Input />
            <div className="hidden h-auto lg:w-2/5 lg:flex lg:pb-3">
                <p className="font-bold text-3xl w-72">Find More Locations like this</p>
            </div>
            <Button desc={'Explorar'}/>
        </div>
    )
}