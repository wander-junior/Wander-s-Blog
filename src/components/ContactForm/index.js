import * as React from 'react'
import { Container } from '../../../GlobalStyle'
import Input from '../Input'
import { StyledForm, FormTitle } from './contactForm-style';

export default function ContactForm({lang}) {
    const translatedData = {
        pt: {
            labelName: "Nome",
            labelMessage: "Mensagem"
        },
        en: {
            labelName: "Name",
            labelMessage: "Message"
        }
    }
    return (
        <Container>
            <StyledForm>
                <FormTitle>Contato</FormTitle>
                <Input id="name" label={translatedData[lang].labelName} type="text"/>
                <Input id="email" label="Email" type="email"/>
                <Input type="textarea" label={translatedData[lang].labelMessage}/>
                <button onClick={(e) => e.preventDefault()}>Enviar</button>
            </StyledForm>
        </Container>
    )
}
