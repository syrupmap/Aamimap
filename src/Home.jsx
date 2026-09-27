import "./Home.css";
import {useEffect, useState} from "react";
import layer1 from "./img/grass.png";
import layer2 from "./img/picnicBlanket.png";
import layer3 from "./img/aavMiMap.png";
import layer4 from "./img/creativePortfolio.png";

// CLAY ART 
import clay1 from "./img/Clay/IMG_1172.JPG";
import clay2 from "./img/Clay/IMG_1177.JPG";
import clay3 from "./img/Clay/IMG_1181.JPG";
import clay4 from "./img/Clay/IMG_1185.JPG";
import clay5 from "./img/Clay/IMG_1189.JPG";
import clay6 from "./img/Clay/IMG_1194.JPG";

import char1 from "./img/Character/IMG_0997.PNG";
import char2 from "./img/Character/IMG_0999.PNG";
import char4 from "./img/Character/IMG_1002.PNG";
import char5 from "./img/Character/IMG_1004.PNG";
import char6 from "./img/Character/IMG_1006.PNG";

import photo1 from "./img/Photo/000088480035.jpg";
import photo2 from "./img/Photo/IMG02376.jpg";
import photo3 from "./img/Photo/IMG04077.jpg";
import photo4 from "./img/Photo/IMG04507.jpg";
import photo5 from "./img/Photo/IMG04737_01.jpg";
import photo6 from "./img/Photo/IMG04750.jpg";
import photo7 from "./img/Photo/IMG05238.jpg";
import photo8 from "./img/Photo/IMG05300.jpg";
import photo9 from "./img/Photo/wajh.JPG";

import post1 from "./img/Post/Ocean.PNG";
import post2 from "./img/Post/Ship.PNG";

const clayImages = [
    clay1,
    clay2,
    clay3,
    clay4,
    clay5,
    clay6
];

const characterImages = [
    char1,
    char2,
    char4,
    char5,
    char6
];

const photoImages = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9
];

const postImages = [
    post1, post2
]



function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* <div className="logo">AaMiMap</div> */}

            <button
                className="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#clay-art" onClick={() => setMenuOpen(false)}>Clay Art</a>
                <a href="#digital-character-art" onClick={() => setMenuOpen(false)}>Digital Character Art</a>
                <a href="#postcards" onClick={() => setMenuOpen(false)}>Stickers/Postcards</a>
                <a href="#layered-photos" onClick={() => setMenuOpen(false)}>Photography</a>
            </div>
        </nav>
    );
}

function Hero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="hero" className="hero" style={{ zoom: 0.10 }}>
            {/* Base layer gives the hero section its height naturally */}
            <img 
                src={layer1} 
                alt="" 
                className="layer-base" 
                style={{ transform: `translateY(${scrollY * 0.1}px)` }} 
            />

            {/* Remaining layers overlay on top */}
            <img 
                src={layer2} 
                alt="" 
                className="layer" 
                style={{ transform: `translateY(${scrollY * -0.15}px) scale(0.7)` }} 
            />
            <img 
                src={layer3} 
                alt="" 
                className="layer" 
                style={{ transform: `translateY(${scrollY * -0.2}px) scale(0.7)` }} 
            />
            <img 
                src={layer4} 
                alt="" 
                className="layer" 
                style={{ transform: `translateY(${scrollY * -0.2}px) scale(0.7)` }} 
            />
        </section>
    );
}

function Gallery({ id, props, images = [] }) {
    return (
        <section id={id} className="gallery-section">
            <h2 className="gallery-title">{props}</h2>

            <div className="gallery-grid">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${props} ${index + 1}`}
                        className="gallery-card"
                    />
                ))}
            </div>
        </section>
    );
}

function Home() {
    return (
        <main className="home-page">
            <Navbar />
            <Hero />
            <Gallery id="clay-art" props="Clay Art" images={clayImages}/>
            <Gallery id="digital-character-art" props="Character Art" images={characterImages}/>
            <Gallery id="postcards" props="Postcards/Stickers" images = {postImages}/>
            <Gallery id="layered-photos" props="Photography" images={photoImages}/>
        </main>
    )
}
export default Home;