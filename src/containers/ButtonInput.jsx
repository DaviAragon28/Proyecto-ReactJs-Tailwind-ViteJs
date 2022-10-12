import React from "react";
import { Input } from '../components/Input/Input'
import { Button } from '../components/Button/Button'


export const ContainerButtonInput = () => {
    return (
        <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center ">
            <Input />
            <Button desc={'Explorar'}/>
        </div>
    )
}