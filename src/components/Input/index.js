import * as React from 'react'
import { StyledLabel, StyledInput, StyledTextarea } from './input-style'

export default function Input({id, label, type, handleChange, value}) {
    const isTextarea = type === 'textarea';
    return (
        <React.Fragment>
            <StyledLabel htmlFor={id}>{label}</StyledLabel>
            {
                isTextarea ?
                <StyledTextarea id={id} rows="6" onChange={handleChange} value={value} />
                :
                <StyledInput type={type} id={id} onChange={handleChange} value={value} />
            }
        </React.Fragment>
    )
}
