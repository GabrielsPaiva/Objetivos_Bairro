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
import GoalsModal from '../component/GoalsModal';

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
    const [mappingNumbers] = useState([0, 1, 2, 3, 4])

    const [modal, setModal] = useState(false)

    const cardsLayoutMapping = () => {
        return mappingNumbers.map((item, id) => (
            <CardLayout key={id}
                modalToggle={() => { setModal(!modal) }}
                backgroundColor={cardsInfo.backgroundColors[item]}
                number={cardsInfo.numbers[item]}
                cardTitle={cardsInfo.titles[item]}
                figure={cardsInfo.figures[item]}
                alt={cardsInfo.alts[item]} />
        ))
    }

    const MainsStructure = () => {
        return (
            <Div>
                {modal && <GoalsModal modalToggle={()=>{setModal(false)}}/>}
                <ContentBox>
                    <MainInicialText />
                    <CardsSection>
                        {cardsLayoutMapping()}
                    </CardsSection>
                </ContentBox>
            </Div>
        )
    }

    return (
        MainsStructure()
    )
}