import * as React from 'react'
import Picture from '../../images/Picture.jpg'
import { InfoBox, SmallAboutContainer, StyledTitle, StyledParagraph, StyledLink } from './smallAbout-style';

export default function SmallAbout({lang}) {
    const translatedData = {
        pt: {
            aboutTitle: "SOBRE MIM",
            aboutParagraph: "Meu nome é Wander e eu sou desenvolvedor Web. Atualmente estou estudando React.js e Gatsby.",
            callPortfolio: "Veja meu Portfólio",
            altText: "Picture"
        },
        en: {
            aboutTitle: "ABOUT ME", 
            aboutParagraph: "My name is Wander and I am a Web developer. I have currently focused my studies on React and Gatsby.",
            callPortfolio: "See my portfolio"
        }
    };

    return (
        <SmallAboutContainer>
            <StyledTitle>{translatedData[lang].aboutTitle}</StyledTitle>
            <InfoBox>
                <img src={Picture} alt={translatedData[lang].altText}/>
                <StyledParagraph>{translatedData[lang].aboutParagraph}</StyledParagraph>
                <p>{translatedData[lang].callPortfolio}</p>
                <StyledLink href="https://wandercruz.com.br">www.wandercruz.com.br</StyledLink>
            </InfoBox>
        </SmallAboutContainer>
    )
}
