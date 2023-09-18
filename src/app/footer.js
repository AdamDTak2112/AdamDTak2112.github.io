
"use client"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './footer.module.css';

export default function Footer(){
    return (
        <footer>
            <div className="sticky bottom-0">
                <Row>
                    <Col>
                    <div className={styles.footerContainer}>
                        <h5 className='brand-name'>Tak Software</h5>
                    </div>
                    </Col>
                </Row>
            </div>
            
            
            
        </footer>
    );
}