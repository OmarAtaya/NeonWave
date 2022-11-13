import styled from 'styled-components';
import { AiOutlineInstagram } from 'react-icons/ai';


export const FooterArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    height: fit-content;
    text-align: left;
    margin: 40px 50px;
    @media screen and (max-width: 875px) {
        flex-direction: column;
        justify-content: space-evenly;
        margin: 40px 30px;
    }
    
`;

export const Quick = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin-bottom: 50px;
    margin-left: 10px;
`;

export const Connect = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 10px;
    margin-bottom: 50px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    color: white;
    width: 370px;
`;

export const FormLabel = styled.label`
    font-size: 15px;
`;

export const FormField = styled.input`
    background-color: transparent;
    border: 0.1px solid rgb(0,0,0,0.1px);
    padding: 12px;
    margin: 20px 0px;
    ::placeholder{
        color: white;
    } 
`;

export const FormButton = styled.button`
    width: 150px;
    height: 50px;
    color: white;
    background-color: #25a9c8;
    border: none;
    font-size: 15px;
`;

export const Title = styled.h3`
    font-style: italic;
    font-weight: 500;
    font-size: 15px;
    margin: 50px 0px 30px 0px;
`;

export const PageLink = styled.a`
    margin: 10px 0px;

`;

export const Text = styled.p`
`;

export const Icon = styled(AiOutlineInstagram)`
    width: 41px;
`;