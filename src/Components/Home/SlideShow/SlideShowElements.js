import styled from 'styled-components';

export const SlideShows = styled.div`
`;

export const Image = styled.div`
    height: 100vh;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 23px;
    }
`;

export const ImageTitle = styled.h2`
    font-size: 30px;
    color: white;
    text-align: left;
    margin: auto;
    position: absolute;
    bottom: 200px;
    padding-left: 60px;
    @media screen and (max-width: 768px) {
        font-size: 23px;
    
    }
`;

export const Shop = styled.button`
    position: absolute;
    bottom: 150px;
    margin-left: 60px;
    background-color: #69a7ac;
    color: white;
    border: none;
    height: 30px;
    width: 100px;
`;