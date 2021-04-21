import * as React from 'react'

export default function Input({id, label, type}) {
    const isTextarea = type === 'textarea';
    return (
        <React.Fragment>
            <label for={id}>{label}</label>
            {
                isTextarea ?
                <textarea id={id}/>
                :
                <input type={type} id={id}/>
            }
        </React.Fragment>
    )
}
