import React, {useContext} from "react";
import { DarkModeContext } from "../context/Context";
import { Card } from "../components/CardRecomendations/Card";

export const CardsRecomendations = () => {
    const { dark } = useContext(DarkModeContext)
    return (
        <div className="p-4 lg:mt-2 lg:p-8" id="Cards">
            <p className={`text-3xl font-semibold text-primary pb-4 ${dark && 'text-white'}`}>
                Our recomendations
            </p>
            <div className="w-auto h-80 items-center flex gap-6 overflow-x-auto overscroll-x-contain lg:scrollbar">
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
                <Card
                    title={'Sydney'}
                    desc={'Big City'}
                    bg='bg-sydney'
                    textColor="text-tertiary"
                />
                <Card
                    title={'Los Angeles'}
                    desc={'Big City'}
                    bg='bg-LA'
                    color={'bg-secondary'}
                />
                <Card
                    title={'Europe'}
                    desc={'Region'}
                    bg='bg-europe'
                    textColor="text-tertiary"
                />
                <Card
                    title={'Miami'}
                    desc={'Big City'}
                    bg='bg-miami'
                    color={'bg-secondary'}
                />
                <Card
                    title={'Iceland'}
                    desc={'Big City'}
                    bg='bg-iceland'
                    textColor="text-tertiary"
                />
            </div>
        </div>

    )
}