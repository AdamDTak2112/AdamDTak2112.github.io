import styles from './page.module.css';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: '300',
    subsets: ['latin'],
    display: 'swap',
});

export default function HomePage() {
    const imageSource = '/1690315709648.jpeg';

    return (
        
            <div className="container mx-auto">
                <div id={styles.salutation}> 
                    <h1 className="text-3xl font-bold mb-25">Hi, I'm Adam.</h1>
                    <Image 
                        className='mx-auto my-25'
                        src={imageSource}
                        width={250}
                        height={250}
                        alt="Picture of Adam Tak, Software Developer"
                        />
                    <h2 className="text-2xl">I'm a Software Engineer who specializes in Quality Assurance and Automated Testing of Web Applications.</h2>
                </div>
            </div>
        
    );
}