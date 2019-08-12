import React from 'react';

export default Testimonials



const data = [
    {
        text: "Felt like coming home! Very friendly staff, great and cozy rooms, excellent service and a marvelous breakfast.", 
        author: "Ingrid",
        source: "TripAdvisor"
    },
    {
        text: "Simply lovely.", 
        author: "Bea",
        source: "TripAdvisor"
    },
    {
        text: "Central, clean, homely and very welcoming. Would definitely stay again.", 
        author: "Dave",
        source: "Booking.com"
    },
]

function Testimonial({text, author, source}) {
    return <div>
        <h1 className="lg">“ {text}”</h1>
        <p> - {author}, {source}</p>
        <p></p>
    </div>
}

function Testimonials() {
    return (
        data.map(props => <Testimonial {...props}/>)
    )
}
