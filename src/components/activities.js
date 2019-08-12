import React from 'react';

export default Activities



const data = [
    {
      title: "Wineries Tour",
      description:
        "Just a short drive away from legendary wineries such as Boplaas and De Krans"
    },
    {
      title: "Cango Caves",
      description: "These must-see caves are a spectacular sight"
    },
    {
      title: "Ostrich Farms ",
      description:
        "Get up close and personal with ostriches at Highgate and Safari"
    },
    {
      title: "Historical Town Centre",
      description:
        "One of the oldest town centres in the country. See the Karoo mansions of the Ostrich Barons"
    },
    {
      title: "Packed Events Calender",
      description:
        "There's always something to do in Oudtshoorn, such as the very popular Meerkat Magic"
    },
    {
      title: "Karoo Scenery",
      description:
        "Spectacular scenery awaits. Mountain passes and forests are all a short drive away"
    }
  ];
  

function Activity({title, description, icon}) {
    return <div>
        <h3 className="text-xl">“ {title}”</h3>
        <p>{description}</p>
        {icon ? <p><i>{icon}</i></p> : null}
    </div>
}

function Activities() {
    return (
        <section>
        <h2 className="text-2xl mt-6">Things to do</h2>
        {data.map(props => <Activity {...props}/>)} 
        </section>
    )
}
