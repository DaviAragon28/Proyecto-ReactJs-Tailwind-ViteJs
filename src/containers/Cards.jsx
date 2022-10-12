import React from "react";
import { Card } from "../components/Card/Card";

export const Cards = () => {
    return (
        <div className="w-auto h-72 items-center flex gap-6 overflow-x-auto overscroll-x-contain ">
            <Card
                title={'Norway'}
                desc={'Beautiful landscapes'}
                bg={'bg-norway'}
                color={'bg-secondary'}
            />
            <Card
                title='New York'
                desc='Concrete Jungle'
                bg='bg-new_york'
                color='bg-white'
                textColor="text-tertiary"
                
                />
            <Card
                title='Yosmite'
                desc='A break from the world'
                bg='bg-yosemite'
                color={'bg-secondary'}
            />

            <Card 
                title='Seattle'
                desc={'Big City'}
                bg='bg-seattle'
                textColor="text-tertiary"
                />

            <Card 
                title={'Swizerland'}
                desc={'Big City'}
                bg='bg-switzerland'
                color={'bg-secondary'}
            />
        </div>
    )
}