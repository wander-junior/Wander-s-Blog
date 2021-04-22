import * as React from 'react'
import { StyledLabel, StyledInput, StyledTextarea } from './input-style'

export default function Input({id, label, type}) {
    const isTextarea = type === 'textarea';
    return (
        <React.Fragment>
            <StyledLabel for={id}>{label}</StyledLabel>
            {
                isTextarea ?
                <StyledTextarea id={id} rows="6"/>
                :
                <StyledInput type={type} id={id}/>
            }
        </React.Fragment>
    )
}
