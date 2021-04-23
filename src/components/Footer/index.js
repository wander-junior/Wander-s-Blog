import * as React from 'react'
import { Container } from '../../../GlobalStyle'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import LanguageSelection from '../LanguageSelection';
import { LinksBackground, LinkName, SocialLink, SocialLinks, StyledFooter } from './footer-style';

export default function Footer({lang}) {
    return (
        <StyledFooter>
            <LanguageSelection lang={lang}/>
            <LinksBackground>
                <Container>
                    <SocialLinks>
                        <SocialLink href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                            <FaLinkedinIn style={{fontSize: '40px'}}/>
                            <LinkName>LinkedIn</LinkName>
                        </SocialLink>
                        <SocialLink href="https://www.github.com" target="_blank" rel="noreferrer">
                            <FaGithub style={{fontSize: '40px'}}/>
                            <LinkName>GitHub</LinkName>
                        </SocialLink>
                    </SocialLinks>
                </Container>
            </LinksBackground>
        </StyledFooter>
    )
}
