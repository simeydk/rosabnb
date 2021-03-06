import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faCoffee,
    faWheelchair,
    faSwimmer,
    faCar,
    faSatellite,
    faWind,
    faWifi,
    faAward,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
    faCoffee,
    faWheelchair,
    faSwimmer,
    faCar,
    faSatellite,
    faWind,
    faWifi,
    faAward,
)

export default Kids

const textEn = [

    { description: "Babies and toddlers are welcome. We can provide cots, toys and privacy" },

    { description: "We are happy to accommodate families with children and have a large selection of children's books" },

]

const textAf = [

    { description: "Ouers met babas en kleuters kan gerus wees. Ons verskaf bababedjies speelgoed en privaatheid." },

    { description: "Families met kinders is welkom, en ons het 'n groot verskeidenheid kinderboeke om te lees" },

]


function Kid({ description, key }) {
    return <div index={key || 0} className="font-light leading-loose">
        <FontAwesomeIcon icon='award' size="2x" color="#718096" />
        <h3 className="text-lg italic text-gray-800">{description}</h3>
    </div>
}

function Kids({lang = 'en'}) {
    const text = lang === 'en' ? textEn : textAf
    return (
        <KidsBlock>
            <div className="bg-white max-w-sm m-4 p-4 md:px-10 md:py-6  md:m-20 outer-shadow">
                {text.slice(0, 1).map(props => <Kid {...props} />)}
            </div>
        </KidsBlock>
    )
}

function KidsBlock({ children }) {
    const src = "https://res.cloudinary.com/simeydk/image/upload/w_1200,h_1200,c_fit,f_auto,q_auto/Rosabnb/IMG_0424.jpg"
    const style = {
        maxHeight: "75vw",
    }
    const layers = [{ image: src, amount: 0.3 }]

    return (
        <div className="mx-auto max-w-5xl inset-shadow">
            <ParallaxBanner layers={layers} style={style}>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center inset-shadow">
                    {children}
                </div>
            </ParallaxBanner>
        </div>
    )
}
