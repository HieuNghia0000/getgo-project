import {useEffect, useState} from "react";

interface Location {
    name: string;
    alt: string;
    image: string;
    description: string;
}

const locations: Location[] = [
    {
        name: 'YÊN BÁI',
        alt: 'yenbai',
        image: '/card/yenbai.png',
        description: 'Explore the picturesque landscapes of Yên Bái, where majestic mountains meet serene valleys. Immerse yourself in the rich cultures of ethnic minorities, embark on scenic hikes, and find solace in the tranquil beauty of this destination.',
    },
    {
        name: 'HỒ CHÍ MINH',
        alt: 'hcmcity',
        image: '/card/hcmcity.png',
        description: 'See Ho Chi Minh City, marvel at colonial architecture, savor delectable street food, and immerse yourself in bustling markets. From historic landmarks to modern skyscrapers, this city offers a dynamic blend of culture and excitement.',
    },
    {
        name: 'VŨNG TÀU',
        alt: 'vungtau',
        image: '/card/vungtau.png',
        description: 'Coastal charm of Vũng Tàu, relax on golden beaches, savor fresh seafood, and admire panoramic ocean views. Explore historic landmarks and unwind in this seaside paradise offering a perfect blend of relaxation and adventure.',
    },
];

function LocationCarousel () {

    const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentLocationIndex((prevIndex) => (prevIndex + 1) % locations.length);
                setIsTransitioning(false);
            }, 500); // Adjust the transition duration here (in milliseconds)
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={`carousel-item ${isTransitioning ? 'transitioning' : ''} relative aspect-video`}>
            <img src={locations[currentLocationIndex].image} alt={locations[currentLocationIndex].alt} className="object-cover w-full h-full" style={{
                opacity: isTransitioning ? 0 : 1,
                transition: 'opacity 0.5s ease-in-out',
            }}/>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-lg">
                <div className="mb-1">
                    <span className="text-9xl bg-clip-text text-transparent bg-gradient-to-b from-white font-sans font-light">{locations[currentLocationIndex].name}</span>
                </div>
                <div className="mb-1">
                    <span className="font-light">
                        {locations[currentLocationIndex].description}
                    </span>
                </div>
                <div>
                    <button
                        className="border-white border-2 text-white font-light bg-transparent py-2 px-12 rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LocationCarousel;