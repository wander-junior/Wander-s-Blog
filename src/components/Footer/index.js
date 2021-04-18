import * as React from 'react'
import { Container } from '../../../GlobalStyle'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import LanguageSelection from '../LanguageSelection';

export default function Footer({lang}) {
    return (
        <footer>
            <LanguageSelection lang={lang}/>
            <Container>
                <div>
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                        <FaLinkedinIn/>
                    </a>
                    <a href="https://www.github.com" target="_blank" rel="noreferrer">
                        <FaGithub/>
                    </a>
                </div>
            </Container>
        </footer>
    )
}
