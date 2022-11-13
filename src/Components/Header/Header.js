import React, { useState } from 'react'
import NeonLogo from '../../Assets/Neon_Wave_3_165x.png'
import { Nav, NavLink, NavContainer, MenuItem, Bar, NavMenu, NavButton, NavLogo, NavBtnLink, IconOne, IconTwo, Logo } from './HeaderElements';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 20)
        {
            setColor(true);
        }
        else{
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor);

    return (
        <Nav className={color ? "Nav-bg" : ""}>
            <Bar onClick={() => setIsOpen(!isOpen)}/>
            <NavContainer>
                <NavLogo to="/">
                    <Logo src={NeonLogo} alt=""/>
                </NavLogo>
                <NavMenu isOpen={isOpen}>
                    <MenuItem>
                        <NavLink to="/">
                        HOME
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/shop-all">
                            BROWSE ALL
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/customize-your-own-neon">
                            CUSTOM NEON SIGN
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/contact-us">
                            CONTACT US
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/about-us">
                            ABOUT US
                        </NavLink>
                    </MenuItem>
                </NavMenu>
            </NavContainer>
            <NavButton>
                <NavBtnLink>
                    <IconOne size="30" color="white"/>
                </NavBtnLink>
                <NavBtnLink>
                    <IconTwo size="30" color="white"/>
                </NavBtnLink>
            </NavButton>
        </Nav>
    )
}

export default Header