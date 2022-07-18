import React from 'react';
import styled from 'styled-components';

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
font-size: 2.1vw;
margin: 0 5% 0 2.5%;
`
const CardTitle = styled.h2`
font-size: 0.8vw;
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

export default function CardLayout({ backgroundColor, number, cardTitle, figure, alt, modalToggle }) {

    

    return (
        <CardBox onClick={()=>{modalToggle()}} style={{backgroundColor: `${backgroundColor}`}}>
            <UpperSide>
                <CardNumber>{number}</CardNumber>
                <CardTitle>{cardTitle}</CardTitle>
            </UpperSide>
            <ImageBox>
                <Image src={figure} alt={alt} />
            </ImageBox>
        </CardBox>
    );
}