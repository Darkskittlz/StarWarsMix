import styled from "styled-components";

export const GridContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 50vh;
`

export const Container = styled.div`
    display: flex; 
    backdrop-filter: blur(10px);
    flex-direction: column;
    margin-top: 20%;
    padding: 100px;
    justify-content: center;
    border-radius: 10px;
    z-index: 999;

    h1 {
        color: red;
        text-align: center;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 25px;

    button {
        padding: 10px;
        font-size: 15px;
        color: white;
        cursor: pointer;
        background-color: red;
        border-radius: 10px;
    }

    a {
        text-decoration: none;
        color: white;
    }
`