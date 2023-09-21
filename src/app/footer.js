
"use client"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './footer.module.css';

export default function Footer(){
    return (
        <footer className="w-full min-h-[10%]">
            <div className="sticky bottom-0 columns-2 md:columns-3 h-full bg-[#e5ca8c] w-full">
                    <h5 className='brand-name'>Tak Software</h5>
            </div>
        </footer>
    );
}