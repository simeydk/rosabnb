import React from 'react';

export default Amenities

const data = [

    {title:"Breakfast",
    description:"Breakfast is included with all our rooms. Tuck in to scrumptious meals with a local twist",
    icon:"breakfast"
    },
    
    {title:"Pool & Garden",
    description:"Relax in our beautiful garden or take an afternoon dip in our huge pool. Two of our rooms have private balconies",
    icon:"breakfast"
    },
    {title:"Secure Parking & Access",
    description:"We take your safety seriously. Secure parking is provided",
    icon:"breakfast"
    },
    {title:"Free Wifi",
    description:"We have free and fast Wifi throughout the guesthouse",
    icon:"breakfast"
    },
    {title:"Satellite Television",
    description:"All rooms come standard with televisions and DSTV",
    icon:"breakfast"
    },
    {title:"Aircon & Heating",
    description:"Adjust the temperature in your room to your liking. We can handle any weather",
    icon:"breakfast"
    },
]

function Amenity({title, description, icon}) {
    return <div>
        <h3 className="text-xl">“ {title}”</h3>
        <p>{description}</p>
        <p><i>{icon}</i></p>
    </div>
}

function Amenities() {
    return (
        <section>
        <h2 className="text-2xl mt-6">Our services</h2>
        {data.map(props => <Amenity {...props}/>)} 
        </section>
    )
}
