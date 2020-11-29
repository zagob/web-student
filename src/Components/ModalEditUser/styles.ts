import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }

  button {
    margin-top: 48px;
    align-self: flex-end;
  }

  button {
    width: 150px;
    height: 40px;
    text-align: center;
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #39b100;
    color: #fff;

    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.2s;

    
  }

  button:hover {
        cursor: pointer;
        background: #88FB53;
    }
`;