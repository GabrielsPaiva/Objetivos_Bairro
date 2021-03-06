import React, { useState } from 'react';
import styled from 'styled-components';

// components
import MainInicialText from '../component/MainInicialText/MainInicialText';
import CardLayout from '../component/CardLayout/CardLayout';
import GoalsModal from '../component/GoalsModal/GoalsModal';

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Roboto', sans-serif;
width: 100%;
height: 100vh;
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

@media(max-width: 768px) {
    justify-content: center;   
}
`


export default function Main() {
    const [modal, setModal] = useState(false)

    const goalsModalPropsInfo = () => {
        return <GoalsModal modalToggle={() => { setModal(!modal) }}/>
    }

    const MainsStructure = () => {
        return (
            <Div>
                <ContentBox>
                    <MainInicialText/>
                    <CardsSection>
                        <CardLayout modalToggle={() => {setModal(!modal);}}/>
                    </CardsSection>
                </ContentBox>
                {modal && goalsModalPropsInfo()}
            </Div>
        )
    }

    return (
        MainsStructure()
    )
}