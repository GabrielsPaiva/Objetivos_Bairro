import React, { useEffect, useState } from 'react';
import * as S from './Style'

// JSON
import Info from '../../CardsInfo.json'


export default function GoalsModal({ modalToggle }) {

    const [modalInfo] = useState({ Info })
    const [cardId, setCardId] = useState(0)

    const modalHeader = () => {
        return (
            <S.ModalHeader style={{ backgroundColor: modalInfo.Info[cardId].backgroundColors }}>
                <S.HeaderInfoBox>
                    <S.P>Objetivo de Desenvolvimento Sustentável</S.P>
                    <S.GoalNumber>{modalInfo.Info[cardId].numbers}</S.GoalNumber>
                    <S.GoalTitle>{modalInfo.Info[cardId].titles}</S.GoalTitle>
                    <S.GoalDescription>
                        Erradicar a pobreza em todas as formas e em todos os
                        lugares
                    </S.GoalDescription>
                </S.HeaderInfoBox>
                <S.ImageBox>
                    <S.GoalImage src={modalInfo.Info[cardId].figures} alt={modalInfo.Info[cardId].alts} />
                    <S.ModalCloseButtonDiv>
                        <S.ModalCloseButton onClick={() => modalToggle()}>+</S.ModalCloseButton>
                    </S.ModalCloseButtonDiv>
                </S.ImageBox>
            </S.ModalHeader>
        )

    }

    const modalObjectives = () => {
        return (
            <S.ObjectivesDiv>
                <S.ObjectivesList>
                    <S.Objetives>{`1.1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</S.Objetives>
                    <S.Objetives>{`1.2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`}</S.Objetives>
                    <S.Objetives>{`1.3 Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`}</S.Objetives>
                    <S.Objetives>{`1.4 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culS.Objetives qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`}</S.Objetives>
                    <S.Objetives>{`1.5 Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."`}</S.Objetives>
                </S.ObjectivesList>
            </S.ObjectivesDiv>
        )
    }

    useEffect(() => {
        setCardId(document.getElementsByClassName('cardNumber')[0].id)
    }, [])

    return (
        <S.Div>
            <S.ContentBox>
                {modalHeader()}
                {modalObjectives()}
            </S.ContentBox>
        </S.Div>
    );
}

