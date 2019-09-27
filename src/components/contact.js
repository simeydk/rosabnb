import React from 'react';
import H2 from './utilities/H2'

export default Contact

function Contact() {
    return (
        <section className="m-4">
            <H2 id="contact">Contact us</H2>
            <p>{"info@rosabnb.co.za / 10 Vrede St, Oudtshoorn, 6620 / +27 (0) 65 962 2762"}</p>
            <form name="contact" netlify >
                <input type="text" placeholder="name" name="name" />
                <input type="email" placeholder="email" name="email" />
                <input type="text" placeholder="Subject" name="Subject" />
                <div>
                    <textarea className="border" name="message" />
                </div>
            </form>
        </section>
    )
}
