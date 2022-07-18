import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
width: 100%;
height: 100vh;
`
const ContentBox = styled.div`
color: white;
background-color: gray;
width: 60%;
height: 100%;
`
const ModalHeader = styled.div`
background-color: #e5233b;
display: flex;
align-items: center;
width: 100%;
height: 45%;
`
const HeaderInfoBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 1.5%;
width: 55%;
height: 100%;
`
const P = styled.p`
font-size: 0.85vw;
`
const GoalNumber = styled.h2`
font-size: 5vw;
font-weight: lighter;
`
const GoalTitle = styled.h2`
font-size: 2vw;
`
const GoalDescription = styled.p`
width: 70%;
font-size: 0.89vw;
`
const ImageBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
height: 100%;
`
const GoalImage = styled.img`
margin-right: 1vw;
width: 100%;
`
const ModalCloseButtonDiv = styled.div`
height: 100%;
width: 7%;
`
const ModalCloseButton = styled.p`
color: black;
font-size: 2vw;
transform: rotate(45deg);
cursor: pointer;
`
const ObjectivesDiv = styled.div`
color: black;
display: flex;
font-size: 1vw;
width: 60%;
height: fit-content;
`
const ObjectivesList = styled.div`
display: flex;
flex-direction: column;
margin: 1vw;
width: 100%;
height: 100%;
`

const Pa = styled.p`
margin-top: 10px;
` 

export default function GoalsModal({ modalToggle, number, title, alt, figure }) {
    const [description] = useState({
        descriptions: [

        ]
    })

    const modalHeader = () => {
        return (
            <ModalHeader>
                <HeaderInfoBox>
                    <P>Objetivo de Desenvolvimento Sustentável</P>
                    <GoalNumber>{number}</GoalNumber>
                    <GoalTitle>{title}</GoalTitle>
                    <GoalDescription>
                        Erradicar a pobreza em todas as formas e em todos os
                        lugares
                    </GoalDescription>
                </HeaderInfoBox>
                <ImageBox>
                    <GoalImage src={figure} alt={alt} />
                    <ModalCloseButtonDiv>
                        <ModalCloseButton onClick={()=>modalToggle()}>+</ModalCloseButton>
                    </ModalCloseButtonDiv>
                </ImageBox>
            </ModalHeader>
        )

    }

    const modalObjectives = () => {



        return (
            <ObjectivesDiv>
                <ObjectivesList>
                    <Pa>{`1.1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Pa>
                    <Pa>{`1.2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`}</Pa>
                    <Pa>{`1.3 Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`}</Pa>
                    <Pa>{`1.4 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`}</Pa>
                    <Pa>{`1.5 Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."`}</Pa>
                </ObjectivesList>
            </ObjectivesDiv>
        )
    }

    return (
        <Div onClick={() => { modalToggle() }}>
            <ContentBox>
                {modalHeader()}
                {modalObjectives()}
            </ContentBox>
        </Div>
    );
}

