import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

export const Nav = styled.nav`
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    padding: 18px 30px;
    width: auto;
    z-index: 11;

    &.Nav-bg{
        background-color: #25a9c8;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }

    
`;

export const Logo = styled.img`
    @media screen and (max-width: 875px) {
        display: block;
    }
`;

export const NavLogo = styled(Link)`
    
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`;

export const Bar = styled(FaBars)`
    display: none;
    color: #fff;
    @media screen and (max-width: 875px) {
        display: block;
        width: 14px;
        height: 24px;
        cursor: pointer;
        z-index: 10;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;

    @media screen and (max-width: 875px) {
        display: ${({ isOpen }) => (isOpen ? "block" : "none")};
        width: 200px;
        max-width: ${({ isOpen }) => (isOpen ? "5000px" : "0")};
        height: 78vh;
        cursor: pointer;
        position: absolute;
        background-color: #25a9c8;
        left: 0;
        top: 0;
        z-index: 9;
        margin-top: 0px;
        padding-top: 50px;

        border-radius: 20px 20px 20px 20px
    }
`;

export const NavButton = styled.div`
    display: flex;
    flex-direction: row;
    
`;

export const NavBtnLink = styled(Link)`
    
`;

export const IconOne = styled(AiOutlineSearch)`
    padding: 0px 5px;
`;

export const IconTwo = styled(AiOutlineShoppingCart)`
    padding: 0px 15px;
`;

export const MenuItem = styled.li`
    height: 115px;
    width: fit-content;
    font-family: eurostile, serif;

    &:hover{
        border-bottom: 3px solid white;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;