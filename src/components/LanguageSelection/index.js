import * as React from 'react'
import { Link } from 'gatsby';  

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
        if (lang === "pt") return (url.slice(0, pos + 1) + "en/" + url.slice(pos + 1));
        return (url.slice(0, pos + 1) + url.slice(pos + 4));
    }

    return (
        <div>
            <p>{translatedData[lang].i18n}</p>
            {lang === 'pt' ? 
                <div>
                    <Link to={getTranslatedURL()}>Português</Link>
                    <span> / English</span>
                </div>  
                : 
                <div>
                    <span>Português / </span>
                    <Link to={getTranslatedURL()}>Inglês</Link>
                </div>
            }
        </div>
    )
}
