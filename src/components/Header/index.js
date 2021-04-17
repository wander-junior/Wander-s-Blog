import React from 'react'
import { Container } from '../../../GlobalStyle'
import { StyledLink, StyledMenu, SearchItem, StyledHeader } from './header-style'
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';

export default function Header({lang}) {
    const linkLabels = { 
        pt: {
            about: "SOBRE",
            contact: "CONTATO"
        }, 
        en: {
            about: "ABOUT",
            contact: "CONTACT"
        }
    }


    return (
        <StyledHeader>
            <Container>
                <nav>
                    <StyledMenu>
                        <li><StyledLink to='/'>HOME</StyledLink></li>
                        <li><StyledLink to='/'>{linkLabels[lang].about}</StyledLink></li>
                        <li><StyledLink to='/'>{linkLabels[lang].contact}</StyledLink></li>
                        <SearchItem><FaSearch /></SearchItem>
                    </StyledMenu>
                </nav>
            </Container>
        </StyledHeader>
    )
}