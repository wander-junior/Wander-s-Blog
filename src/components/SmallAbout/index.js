import * as React from 'react'
import Picture from '../../images/Picture.jpg'

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
        <div>
            <h1>{translatedData[lang].aboutTitle}</h1>
            <img src={Picture} alt={translatedData[lang].altText}/>
            <p>{translatedData[lang].aboutParagraph}</p>
            <p>{translatedData[lang].callPortfolio}</p>
            <a href="https://wandercruz.com.br">www.wandercruz.com.br</a>
        </div>
    )
}
