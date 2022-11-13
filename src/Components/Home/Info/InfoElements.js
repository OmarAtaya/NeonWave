import styled from 'styled-components';

export const Information = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const InfoImg = styled.img`
    max-width: 564px;
    width: 100%;
`;

export const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    margin-left: 100px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 90%;
        margin-left: 20px;
    }
`;

export const InfoTitle = styled.h3`
    font-family: serif;
    font-weight: 600;
    color: #25a9c8;
    letter-spacing: .2em;
    font-size: 13px;
`;

export const InfoText = styled.p`
    font-family: sans-serif;
    font-weight: 500;
    color: white;
    font-style: normal;
    line-height: 1.65;
    font-size: 17px;
`;

export const InfoSubTitle = styled.h2`
    font-family: serif;
    font-weight: 600;
    font-size: 22px;
    color: #25a9c8;
    letter-spacing: .2em;
    text-transform: uppercase;
`;

export const InfoShop = styled.button`
    padding-bottom: 3px;
    color: white;
    font-size: 17px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid;
    width: auto;
    margin-bottom: 30px;
`;