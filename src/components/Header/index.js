import React from 'react'
import { Container } from '../../../GlobalStyle'

export default function Header() {
    return (
        <header>
            <Container>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Search</li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}