import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header(){
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">Tak Software</Navbar.Brand>
            </Container>
        </Navbar>
    )
}