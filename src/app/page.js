import './page.module.css';
import Image from 'next/image';

export default function HomePage() {
    const imageSource = '/1690315709648.jpeg';

    return (
        <div id="app">
            <div className="container">
                <div id="salutation">
                    <h1 id="hello">Hi, I'm Adam.</h1>
                    <Image 
                        src={imageSource}
                        width={250}
                        height={250}
                        alt="Picture of Adam Tak, Software Developer"
                        />
                    <h2>I'm a Software Engineer who specializes in Quality Assurance and Automated Testing.</h2>
                </div>
            </div>
        </div>
    );
}