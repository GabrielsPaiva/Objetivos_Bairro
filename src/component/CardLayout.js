import React, { useState } from 'react';
import styled from 'styled-components';

// JSON
import Info from '../CardsInfo.json';
import GoalsModal from './GoalsModal';

const CardBox = styled.div`
color: white;
border-radius: 5px;
margin: 3% 3.1% 0 0;
width: 200px;
height: 200px;
`
const UpperSide = styled.div`
display: flex;
align-items: center;
text-transform: uppercase;
width: 100%;
height: 30%;
`
const CardNumber = styled.p`
font-size: 45px;
margin: 0 5% 0 2.5%;
`
const CardTitle = styled.h2`
font-size: 15px;
width: 79%;
`
const ImageBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 55%;
`
const Image = styled.img`
width: 50%;
`

export default function CardLayout({modalToggle}) {

    const [cardsInfo] = useState({ Info })

    const cardClickedPropValue = (id) => {
        return <GoalsModal cardClicked={0}/>
    }

    const cardsLayoutMapping = () => {
        return cardsInfo.Info.map((item, id) => (
            <CardBox key={id} onClick={() => { modalToggle(); cardClickedPropValue(id) }} style={{ backgroundColor: `${item.backgroundColors}` }}>
                <UpperSide>
                    <CardNumber>{item.numbers}</CardNumber>
                    <CardTitle>{item.titles}</CardTitle>
                </UpperSide>
                <ImageBox>
                    <Image src={item.figures} alt={item.alts} />
                </ImageBox>
            </CardBox>
        ))
    }

    return cardsLayoutMapping()
}