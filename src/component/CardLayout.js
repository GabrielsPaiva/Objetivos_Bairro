import React from 'react';
import styled from 'styled-components';

const CardBox = styled.div`
color: white;
border-radius: 5px;
margin: 3em 3em 0 0;
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
font-size: 40px;
margin: 0 10px 0 5px;
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

export default function CardLayout({ backgroundColor, number, cardTitle, figure, alt }) {



    return (
        <CardBox style={{backgroundColor: `${backgroundColor}`}}>
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