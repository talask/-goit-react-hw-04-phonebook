import styled from 'styled-components';

export const Table = styled.table`
    width: 90%;
`;

export const ButtonDel = styled.button`
    outline: none;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    padding: 5px;
    background: lightblue;
    border: 1px solid lightblue;
    border-radius: 5px;
    text-align: center;

    &:hover {
        background: blue;
        color: white;
    }
`;

export const TdUserData =  styled.td `
    padding: 5px;
`;
    
