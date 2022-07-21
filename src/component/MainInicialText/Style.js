import styled from "styled-components";

export const InicialTextDiv  = styled.div`
width: 100%;
height: 29.5vh;

@media(max-width: 1024px) {
    height: 24vh;
}
@media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;   
}
`
export const TitleBox = styled.div`
width: 70%;
`
export const Title = styled.h2`
font-size: 2.6vw;

@media(max-width: 425px) { 
    font-size: 3.5vw;
    text-align: center;
}
`
export const TextDiv = styled.div`
width: 70.8%;
height: max-content;
margin-top: 2.5%;
`
export const P = styled.div`
font-size: 1.2vw;

@media(max-width: 768px) {
    font-size: 1.8vw;   
}
@media(max-width: 425px) {  
    font-size: 2.5vw;
    text-align: center;
}
`