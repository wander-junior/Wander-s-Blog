import * as React from 'react'
import { useState } from 'react'
import { Container } from '../../../GlobalStyle'
import Input from '../Input'
import { StyledForm, FormTitle, StyledButton } from './contactForm-style';
import * as emailjs from 'emailjs-com'; 
import SentMessage from '../SentMessage';

export default function ContactForm({lang}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [warningMessage, setWarningMessage] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const translatedData = {
        pt: {
            title: "Contato",
            labelName: "Nome",
            labelMessage: "Mensagem",
            warningMessage: "Erro ao enviar. Certifique-se que todos os dados foram inseridos corretamente."
        },
        en: {
            title: "Contact",
            labelName: "Name",
            labelMessage: "Message",
            warningMessage: "Error while sending. Make sure that all data was entered correctly."
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
                setIsSuccess(true);
            }, () => {
                setIsSent(true);
                setIsSuccess(false);
            })
        } else {
            setWarningMessage(translatedData[lang].warningMessage);
        }
    }

    return (
        <Container>
            {isSent ? 
                isSuccess ?
                    <SentMessage lang={lang} isSuccess={isSuccess}/>
                :
                    <SentMessage lang={lang} isSuccess={isSuccess}/>
            :  
                <StyledForm>
                    <FormTitle>{translatedData[lang].title}</FormTitle>
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
