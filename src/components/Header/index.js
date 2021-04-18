import * as React from "react";
import { Container } from '../../../GlobalStyle'
import { StyledLink, StyledMenu, SearchItem, StyledHeader, SearchInput } from './header-style'
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';

export default function Header({lang}) {
    const [isSearchVisible, setIsSearchVisible] = React.useState('false');

    const handleClick = () => {
        setIsSearchVisible(!isSearchVisible);
    }

    const translatedData = { 
        pt: {
            about: "SOBRE",
            contact: "CONTATO",
            placeholder: "Pesquise e aperte enter..."
        }, 
        en: {
            about: "ABOUT",
            contact: "CONTACT",
            placeholder: "Search and hit enter..."
        }
    }


    return (
        <StyledHeader>
            <Container>
                <nav>
                    <StyledMenu>
                        <li><StyledLink to='/'>HOME</StyledLink></li>
                        <li><StyledLink to='/'>{translatedData[lang].about}</StyledLink></li>
                        <li><StyledLink to='/'>{translatedData[lang].contact}</StyledLink></li>
                        <SearchItem>
                            <FaSearch onClick={handleClick}/>
                            <SearchInput
                                type="search"
                                isSearchVisible={isSearchVisible}
                                placeholder={translatedData[lang].placeholder}
                            />
                        </SearchItem>
                    </StyledMenu>
                </nav>
            </Container>
        </StyledHeader>
    )
}