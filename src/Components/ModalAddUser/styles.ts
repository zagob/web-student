import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
    h1 {
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0 0 20px 0;
        text-align: center;
    }
    button {
        width: 200px;
        height: 60px;
        margin: 40px 0 40px 0;
        border: none;
        font-size: 24px;
        background: greenyellow;
        transition: 0.2s;
    }

    button:hover {
        opacity: 80%;
        cursor: pointer;
    }
`;