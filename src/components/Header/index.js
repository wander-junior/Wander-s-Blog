import React from 'react'
import { Container } from '../../../GlobalStyle'
import { StyledLink, StyledMenu, SearchItem, StyledHeader } from './header-style'
import { FaSearch } from 'react-icons/fa';

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <nav>
                    <StyledMenu>
                        <li><StyledLink to='/'>HOME</StyledLink></li>
                        <li><StyledLink to='/'>ABOUT</StyledLink></li>
                        <li><StyledLink to='/'>CONTACT</StyledLink></li>
                        <SearchItem><FaSearch /></SearchItem>
                    </StyledMenu>
                </nav>
            </Container>
        </StyledHeader>
    )
}