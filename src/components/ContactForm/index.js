import * as React from 'react'
import { useState } from 'react'
import { Container } from '../../../GlobalStyle'
import Input from '../Input'
import { StyledForm, FormTitle, StyledButton } from './contactForm-style';
import * as emailjs from 'emailjs-com'; 

export default function ContactForm({lang}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [warningMessage, setWarningMessage] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [isSucess, setIsSucess] = useState(false);

    const translatedData = {
        pt: {
            labelName: "Nome",
            labelMessage: "Mensagem",
            warningMessage: "Erro ao enviar. Certifique-se que todos os dados foram inseridos corretamente.",
            sucessTitle: "Mensagem enviada com sucesso!",
            sucessMessage: "Sua mensagem foi enviada. Entrarei em contato com você assim que possível.",
            failTittle: "Erro ao enviar mensagem.",
            failMessage: "Um erro ocorreu, tente entrar em contato comigo pelo email wanderjrcruz96@gmail.com."
        },
        en: {
            labelName: "Name",
            labelMessage: "Message",
            warningMessage: "Error while sending. Make sure that all data was entered correctly.",
            sucessTitle: "Message successfully sent",
            sucessMessage: "Your message was sent. I will contact you as soon as possible.",
            failTittle: "Error while sending message.",
            failMessage: "An error occurred while sending the message. Try to email me at wanderjrcruz96@gmail.com"
        }
    }

    const templateParams = {
        from_name: email,
        to_name: 'wanderjrcruz96@gmail.com',
        subject: `Contato Blog ${name}`,
        message: message
    }

    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleMessage = (e) => setMessage(e.target.value);
    const handleClick = (e) => {
        e.preventDefault();

        let emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if((emailRe.test(email)) && (name !== '') && (message !== '')) {
            emailjs.send(
                process.env.GATSBY_EMAILJS_SERVICE_ID,
                process.env.GATSBY_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.GATSBY_EMAILJS_USER_ID
            )
            .then(() => {
                setIsSent(true);
                setIsSucess(true);
            }, () => {
                setIsSent(true);
                setIsSucess(false);
            })
        } else {
            setWarningMessage(translatedData[lang].warningMessage);
        }
    }

    return (
        <Container>
            {isSent ? 
                isSucess ?
                    <div>
                        <h1>{translatedData[lang].sucessTittle}</h1>
                        <p>{translatedData[lang].sucessMessage}</p>
                    </div>
                :
                    <div>
                        <h1>{translatedData[lang].failTittle}</h1>
                        <p>{translatedData[lang].failMessage}</p>
                    </div>
            :  
                <StyledForm>
                    <FormTitle>Contato</FormTitle>
                    <Input 
                        id="name" 
                        label={translatedData[lang].labelName} 
                        type="text" 
                        handleChange={handleName}
                        value={name}
                    />
                    <Input 
                        id="email"
                        label="Email" 
                        type="email" 
                        handleChange={handleEmail} 
                        value={email}
                    />
                    <Input 
                        id="message"
                        label={translatedData[lang].labelMessage} 
                        type="textarea" 
                        handleChange={handleMessage}
                        value={message}
                    />
                    <div>{warningMessage}</div>
                    <StyledButton onClick={handleClick} type="submit">Enviar</StyledButton>
                </StyledForm>   
            }
        </Container>
    )
}
