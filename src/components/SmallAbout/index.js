import * as React from 'react'
import Picture from '../../images/Picture.jpg'

export default function index() {
    return (
        <div>
            <h1>SOBRE MIM</h1>
            <img src={Picture} />
            <p>Meu nome é Wander e eu sou desenvolvedor Web. Atualmente estou estudando React.js e Gatsby.</p>
            <p>Veja meu Portfólio:</p>
            <a>www.wandercruz.com.br</a>
        </div>
    )
}
