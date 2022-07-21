import React, { useState } from 'react';
import * as S from './Style'

// JSON
import Info from '../../CardsInfo.json';


export default function CardLayout({modalToggle, cardId}) {

    const [cardsInfo] = useState({ Info })
    const [idValue, setIdValue] = useState('')


    const cardsLayoutMapping = () => {
        return cardsInfo.Info.map((item, id) => (
            <S.CardBox key={id} className='cardNumber' id={idValue} onClick={() => { modalToggle(); setIdValue(id) }} style={{ backgroundColor: `${item.backgroundColors}` }}>
                <S.UpperSide>
                    <S.CardNumber>{item.numbers}</S.CardNumber>
                    <S.CardTitle>{item.titles}</S.CardTitle>
                </S.UpperSide>
                <S.ImageBox>
                    <S.Image src={item.figures} alt={item.alts} />
                </S.ImageBox>
            </S.CardBox>
        ))
    }

    return cardsLayoutMapping()
}