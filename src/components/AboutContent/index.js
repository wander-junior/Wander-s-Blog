import * as React from 'react'
import { Container } from '../../../GlobalStyle'
import { AboutTitle, AboutText, LabelLink, StyledLink } from './aboutContainer-style';

export default function AboutContent({lang}) {
    const translatedData = {
        pt: {
            title: 'Sobre mim',
            aboutTxt: 'Eu nasci em Conselheiro Lafaiete, Minas Gerais, e atualmente estudo Ciência da Computação na Universidade Federal de Ouro Preto. Sou desenvolvedor Web Full stack com conhecimento em React, Node, MongoDB, CSS Flexbox e CSS Grid Layout. Atualmente tenho focado meus estudos em React e Gatsby.',
            portfolioLabel: 'Meu portfólio: ',
            githubLabel: 'Meu github: ',
            linkedinLabel: 'Meu linkedin: ',
            emailLabel: 'Meu email: '
        },
        en: {
            title: 'About me',
            aboutTxt: 'Born in Minas Gerais, Brazil, and I am currently studying Computer Science at the Federal University of Ouro Preto. I am a Full-stack web developer with knowledge in React, Node, MongoDB, CSS Flexbox, and CSS Grid Layout. I have currently focused my studies on React and Gatsby.',
            portfolioLabel: 'My portfolio: ',
            githubLabel: 'My github: ',
            linkedinLabel: 'My linkedin: ',
            emailLabel: 'My email: '
        }
    }

    return (
        <main>
            <Container>
                <AboutTitle>{translatedData[lang].title}</AboutTitle>
                <AboutText>{translatedData[lang].aboutTxt}</AboutText>
                <address>
                    <LabelLink>{translatedData[lang].portfolioLabel}
                        <StyledLink href="https://www.wandercruz.com.br" target="_blank" rel="noreferrer">
                            https://www.wandercruz.com.br
                        </StyledLink>
                    </LabelLink>
                    <LabelLink>{translatedData[lang].githubLabel}
                        <StyledLink href="https://github.com/wander-junior" target="_blank" rel="noreferrer">
                            https://github.com/wander-junior
                        </StyledLink>
                    </LabelLink>
                    <LabelLink>{translatedData[lang].linkedinLabel}
                        <StyledLink href="https://github.com/wander-junior" target="_blank" rel="noreferrer">
                            https://br.linkedin.com/in/wanderjr-cruz
                        </StyledLink>
                    </LabelLink>
                    <LabelLink>{translatedData[lang].emailLabel}
                        <StyledLink href="mailto:wanderjrcruz96@gmail.com">
                            wanderjrcruz96@gmail.com
                        </StyledLink>
                    </LabelLink>
                </address>
            </Container>
        </main>
    )
}
