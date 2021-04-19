import * as React from 'react'
import { Languages, IntText, StyledLink, LanguageSelectionContainer } from './languageSelection-style';

export default function LanguageSelection({lang}) {
    const translatedData = {
        pt: {
            i18n: "Esse site está disponível em:"
        },
        en: {
            i18n: "This website is offered in:"
        }
    }

    const getTranslatedURL = () => {
        const url = typeof window !== 'undefined' ? window.location.href : '';
        const pos = url.indexOf(process.env.GATSBY_BASE_DOMAIN) + process.env.GATSBY_BASE_DOMAIN.length;
        if (lang === "pt") return ("en/" + url.slice(pos + 1));
        return ("/" + url.slice(pos + 4));
    }

    console.log(getTranslatedURL());

    return (
        <LanguageSelectionContainer>
            <IntText>{translatedData[lang].i18n}</IntText>
            {lang === 'pt' ? 
                <Languages>
                    <span>Português / </span>
                    <StyledLink to={getTranslatedURL()}>English</StyledLink>
                </Languages>  
                : 
                <Languages>
                    <StyledLink to={getTranslatedURL()}>Português</StyledLink>
                    <span> / English</span>
                </Languages>  
            }
        </LanguageSelectionContainer>
    )
}
