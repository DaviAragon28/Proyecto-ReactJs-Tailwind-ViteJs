import React from "react";
import { useContext } from "react";
import { BackImage } from "../../containers/BackImage";
import { CardsRecomendations } from "../../containers/CardsRecomendations";
import { CardsTrending } from "../../containers/CardsTrending";
import { Faqs } from "../../containers/Faqs";
import { DarkModeContext } from "../../context/Context";

export const Home = () => {
    const { dark } = useContext(DarkModeContext)
    return (
        <section className={`w-full h-auto ${dark && 'bg-gray-900'}`}>
            <BackImage />
            <CardsRecomendations />
            <CardsTrending />
            <Faqs />
        </section>
    )
}