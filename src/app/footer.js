import Container from 'react-bootstrap/Container';
import styles from './footer.module.css';

export default function Footer(){
    return (
        <footer>
        <div className={styles.footerContainer}>
            <div className='branding'>
                <h5 className='brand-name'>Tak Software</h5>
            </div>
            
        </div>
        </footer>
    );
}