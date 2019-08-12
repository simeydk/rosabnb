import React from 'react';

export default Kids

const data = [

    { description: "Babies and toddlers are welcome. We can provide cots, toys and privacy" },

    { description: "We are happy to accommodate families with children and have a large selection of children's books" },

]

function Kid({ title, description, icon }) {
    return <div>
        {title ? <h3 className="text-xl">{title}</h3> : null}
        <p>{description}</p>
        <p><i>{icon}</i></p>
    </div>
}

function Kids() {
    return (
        <section className="m-4">
            {data.map(props => <Kid {...props} />)}
        </section>
    )
}
