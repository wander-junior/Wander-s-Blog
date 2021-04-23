import * as React from 'react';
import { StyledFailure, StyledParagraph, StyledSuccess, StyledTitle } from './sentMessage-style'

const translatedData = {
    pt: {
        successTitle: "Mensagem enviada com sucesso!",
        successMessage: "Sua mensagem foi enviada. Entrarei em contato com você assim que possível.",
        failTitle: "Erro ao enviar mensagem.",
        failMessage: "Um erro ocorreu. Tente entrar em contato comigo pelo email wanderjrcruz96@gmail.com."
    },
    en: {
         successTitle: "Message successfully sent",
        successMessage: "Your message was sent. I will contact you as soon as possible.",
        failTitle: "Error while sending message.",
        failMessage: "An error occurred while sending the message. Try to email me at wanderjrcruz96@gmail.com"
    }
}

export default function SentMessage({lang, isSuccess}) {
    return(
        <div>
            {isSuccess ? 
                <StyledSuccess>
                    <StyledTitle>{translatedData[lang].successTitle}</StyledTitle>
                    <StyledParagraph>{translatedData[lang].successMessage}</StyledParagraph>
                </StyledSuccess>
            :
                <StyledFailure>
                    <StyledTitle>{translatedData[lang].failTitle}</StyledTitle>
                    <StyledParagraph>{translatedData[lang].failMessage}</StyledParagraph>
                </StyledFailure>
            } 
        </div>
    )
}