import styled from "styled-components";

export const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
width: 100%;
height: 100vh;


/* medias */
@media(max-width: 768px) {
    justify-content: center;
}

`
export const ContentBox = styled.div`
color: white;
background-color: gray;
width: 60%;
height: 100%;

/* medias */
@media(max-width: 768px) {
    border-radius: 10px;
    width: 80%;
    height: 80%;
}
@media(max-width: 425px) { 
    width: 90%;
    height: 60%;
}
`
export const ModalHeader = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 45%;

/* medias */
@media(max-width: 768px) {
    border-radius: 10px 10px 0 0;
}
`
export const HeaderInfoBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 1.5%;
width: 55%;
height: 100%;
`
export const P = styled.p`
font-size: 0.85vw;

/* medias */
@media(max-width: 1024px) {
    font-size: 1vw;
}
@media(max-width: 768px) {
    font-size: 2vw;   
}
@media(max-width: 425px) { 
    font-size: 2.4vw;   
}
`
export const GoalNumber = styled.h2`
font-size: 5vw;
font-weight: lighter;
`

export const GoalTitle = styled.h2`
font-size: 2vw;

/* medias */
@media(max-width: 1024px) {
    font-size: 2.5vw;
}
@media(max-width: 768px) {
    font-size: 3vw;
}
@media(max-width: 425px) { 
    font-size: 3.4vw;   
}
`
export const GoalDescription = styled.p`
width: 70%;
font-size: 0.89vw;

/* medias */
@media(max-width: 1024px) {
    font-size: 1vw;
}
@media(max-width: 768px) {
    font-size: 1.5vw;
}
@media(max-width: 425px) { 
    font-size: 2vw;
}
`
export const ImageBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
height: 100%;
`
export const GoalImage = styled.img`
margin-right: 2vw;
width: 70%;
height: 70%;

/* medias */
@media(max-width: 1024px) {
    height: 50%;
}
@media(max-width: 425px) { 
    width: 60%;   
}
`
export const ModalCloseButtonDiv = styled.div`
height: 92%;
width: 6%;

@media(max-width: 425px) { 
    width: 2%;   
}
`
export const ModalCloseButton = styled.p`
color: black;
font-size: 2vw;
transform: rotate(45deg);
cursor: pointer;

/* medias */
@media(max-width: 768px) {
    font-size: 2.5vw;
}
@media(max-width: 425px) { 
    font-size: 4vw;
}
`
export const ObjectivesDiv = styled.div`
color: black;
display: flex;
font-size: 1vw;
width: 100%;
height: fit-content;
overflow: auto;
`
export const ObjectivesList = styled.div`
display: flex;
flex-direction: column;
margin: 1vw;
width: 100%;
height: 100%;
`
export const Objetives = styled.p`
margin-top: 10px;

/* medias */
@media(max-width: 1024px) {
    font-size: 1.2vw;
}
@media(max-width: 768px) {
    font-size: 1.9vw;   
}
@media(max-width: 425px) { 
    font-size: 2.2vw;   
}
`