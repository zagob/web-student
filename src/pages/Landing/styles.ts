import styled from 'styled-components';

export const Container = styled.div`
    /* border: 1px solid red; */
    display: grid;
    grid-template-columns: auto auto auto auto; 
    justify-content: center;
`;

export const ContentUser = styled.div`
    width: 250px;
    height: 220px;
    background-color: #ccc;
    margin: 20px 40px 0 20px;
    border-radius: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .avatar img {
        width: 100px;
        height: 100px;
        border-radius: 50px;
    }

    h1 {
        font-size: 20px;
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    p {
        font-size: 16px;
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .icons {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }

    .icons .trash:hover {
        transition: 0.2s;
        color: red;
    }

    .icons .edit:hover {
        cursor: pointer;
        transition: 0.2s;
        color: blue;
    }
`;

export const CreateUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;



    button {
        width: 250px;
        height: 220px;
        background-color: greenyellow;
        margin: 20px 40px 0 20px;
        border: none;
        border-radius: 30px;
        font-size: 8em;
        transition: 0.3s;
    }

    button:hover {
        cursor: pointer;
        color: #555555;
        background-color: #CDFF80;
    }
`;