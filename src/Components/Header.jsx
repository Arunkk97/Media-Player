import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
    return (

        <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Navbar className="bg-info ">
                <Container>
                    <Navbar.Brand className='fw-bolder ' style={{ color: "white" }}>
                        <i className="fa-solid fa-music  "></i>{' '}
                        Media Player
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </Link>
    )
}

export default Header