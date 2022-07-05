import React, { useState } from 'react';
import styled from 'styled-components';
import CardLayout from '../component/CardLayout';
import MainInicialText from '../component/MainInicialText';

// images
import Poverty from "../assets/Poverty.png"
import Work from "../assets/Work.png"
import Peace from "../assets/Peace.png"
import Energy from "../assets/Energy.png"
import Starving from "../assets/Starving.png"

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Roboto', sans-serif;
width: 100%;
height: 1080px;
`
const ContentBox = styled.div`
width: 80%;
height: 100%;
`
const CardsSection = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: fit-content;
`


export default function Main() {
    const [cardsInfo] = useState({
        backgroundColors: ["#e5233b", "#a21a42", "#00689d", "#fbc30a", "#dca83a"],
        numbers: ["1", "2", "3", "4", "5"],
        titles: ["erradicação da pobreza", "trabalho decente e crescimento econômico", "paz, justiça e instituições eficazes", "energia, limpa e acessível", "fome zero eagricultura sustentável"],
        figures: [`${Poverty}`, `${Work}`, `${Peace}`, `${Energy}`, `${Starving}`],
        alts: ["bonecos representando uma família com um idoso, 3 adultos e 2 crianças", "gráfico com linha subindo", "passarinho segurando uma flor no bico, e pousado sobre um martelo de juíz", "representação de um sol com um botão de ligar no meio", "uma tigela com sopa saindo fumaça"],
    })
    const [modal , setModal] = useState(false)

    console.log(modal)
    return (
        <Div>
            <ContentBox>
                <MainInicialText />
                <CardsSection>
                    <CardLayout  backgroundColor={cardsInfo.backgroundColors[0]} number={cardsInfo.numbers[0]} cardTitle={cardsInfo.titles[0]} figure={cardsInfo.figures[0]} alt={cardsInfo.alts[0]} />
                    <CardLayout backgroundColor={cardsInfo.backgroundColors[1]} number={cardsInfo.numbers[1]} cardTitle={cardsInfo.titles[1]} figure={cardsInfo.figures[1]} alt={cardsInfo.alts[1]} />
                    <CardLayout backgroundColor={cardsInfo.backgroundColors[2]} number={cardsInfo.numbers[2]} cardTitle={cardsInfo.titles[2]} figure={cardsInfo.figures[2]} alt={cardsInfo.alts[2]} />
                    <CardLayout backgroundColor={cardsInfo.backgroundColors[3]} number={cardsInfo.numbers[3]} cardTitle={cardsInfo.titles[3]} figure={cardsInfo.figures[3]} alt={cardsInfo.alts[3]} />
                    <CardLayout backgroundColor={cardsInfo.backgroundColors[4]} number={cardsInfo.numbers[4]} cardTitle={cardsInfo.titles[4]} figure={cardsInfo.figures[4]} alt={cardsInfo.alts[4]} />
                    <CardLayout backgroundColor={cardsInfo.backgroundColors[5]} number={cardsInfo.numbers[5]} cardTitle={cardsInfo.titles[5]} figure={cardsInfo.figures[5]} alt={cardsInfo.alts[5]} />
                </CardsSection>
            </ContentBox>
        </Div>
    );
}