import * as React from 'react';

const translatedData = {
    pt: {
        sucessTitle: "Mensagem enviada com sucesso!",
        sucessMessage: "Sua mensagem foi enviada. Entrarei em contato com você assim que possível.",
        failTittle: "Erro ao enviar mensagem.",
        failMessage: "Um erro ocorreu, tente entrar em contato comigo pelo email wanderjrcruz96@gmail.com."
    },
    en: {
         sucessTitle: "Message successfully sent",
        sucessMessage: "Your message was sent. I will contact you as soon as possible.",
        failTittle: "Error while sending message.",
        failMessage: "An error occurred while sending the message. Try to email me at wanderjrcruz96@gmail.com"
    }
}

export default function SentMessage({lang, isSucess}) {
    return(
        <div>
            {isSucess ? 
                <div>
                    <h1>{translatedData[lang].sucessTitle}</h1>
                    <p>{translatedData[lang].sucessMessage}</p>
                </div>
            :
            <div>
                <h1>{translatedData[lang].failTitle}</h1>
                <p>{translatedData[lang].failMessage}</p>
            </div>
            }
        </div>
    )
}