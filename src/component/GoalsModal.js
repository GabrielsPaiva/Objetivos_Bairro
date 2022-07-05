import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
display: flex;
justify-content: center;
position: fixed;
width: 100%;
height: 100em;
`
const ContentBox = styled.div`
color: white;
background-color: black;
width: 60%;
height: 100%;
opacity: 0.4;
`

export default function GoalsModal({ modalToggle }) {
    return (
        <Div onClick={() => { modalToggle() }}>
            <ContentBox>
                <p>dhsadhassdhk</p>
            </ContentBox>
        </Div>
    );
}

