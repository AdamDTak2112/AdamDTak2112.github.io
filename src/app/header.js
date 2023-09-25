'use client'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from './header.module.css';


export default function Header(){
    return (
        <Navbar expand="lg">
            <Container className="mx-[5rem] flex justify-between border">
                <Navbar.Brand id='brand' href='/'>Tak Software</Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href='/'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/about'>About Me</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}