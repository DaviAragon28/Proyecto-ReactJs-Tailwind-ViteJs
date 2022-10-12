import React from "react";
import { BackImage } from "../../containers/BackImage";
import { ContainerButtonInput } from "../../containers/ButtonInput";
import { Cards } from "../../containers/Cards";
import { Card } from "../Card/Card";


export const Home = () => {
    return (
        <section className="w-full h-screen">
            <div id="home">
                <div className="w-full h-3/4">
                    <ContainerButtonInput />
                    <BackImage />
                </div>
            </div>

            <div className="p-6" id="Cards">
                <p className="text-3xl font-semibold text-primary pb-4 ">
                    Recomendados
                </p>
                <Cards />
            </div>
            <div>
                
            </div>
        </section>
    )
}