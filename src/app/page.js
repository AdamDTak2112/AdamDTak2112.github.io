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
        
            
                <div className="container mx-auto flex flex-col"id={styles.salutation}> 
                    <h1 className="text-3xl font-bold">Hi, I'm Adam.</h1>
                    <div className="py-25">
                        <Image 
                            className='mx-auto my-25'
                            src={imageSource}
                            width={250}
                            height={250}
                            alt="Picture of Adam Tak, Software Developer"
                            />
                    </div>
                    <h2 className="text-2xl mt-15">I'm a Software Engineer who specializes in Quality Assurance and Automated Testing of Web Applications.</h2>
                </div>
            
        
    );
}