import Row from 'react-bootstrap/Row';
import Col from 'react-boostrap/Col';
import Container from 'react-boostrap/Container';

export default function Header(){
    return (
        <div className='container-fluid'>
        <Container fluid>
            <Row>
                <Col></Col>
                <Col xs lg='6'></Col>
            </Row>
        </Container>
        </div>
    )
}