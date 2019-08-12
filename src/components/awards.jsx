import React from 'react';

export default Awards

const logos = [
    "images/logos/HolidayCheck.webp",
    "images/logos/AA.webp",
    "images/logos/Afristay.webp",
]

function Awards() {
    return <section>
        <h2 className="text-2xl mt-5">Awards</h2>
        <div className="flex align-items-center">
        {logos.map(src => <img src={src} alt="award" style={{width:"50px"}}/>)}
        </div>
    </section>
}