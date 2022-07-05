import React from 'react';
import styled from 'styled-components';

const InicialTextDiv  = styled.div`
width: 100%;
height: 320px;
`
const TitleBox = styled.div`
width: 70%;
`
const Title = styled.h2`
font-size: 50px;
`
const TextDiv = styled.div`
width: 70%;
margin-top: 2.5em;
`
const P = styled.div`
font-size: 23px;
`

export default function MainInicialText() {
    return (
        <InicialTextDiv>
            <TitleBox>
                <Title>
                    Os Objetivos de Desenvolvimento Sustentável no Brasil
                </Title>
            </TitleBox>

            <TextDiv>
                <P>
                    Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.
                </P>
            </TextDiv>
        </InicialTextDiv>
    )
}