/*
todo: import useeffect/use state
todo: create the Locations componnet to display an ul of locationis for each user
todo: send that off to be used by acpplication views. 
*/

import { useEffect, useState } from "react"


export const LocationsListItems = () => {
    const [locationsList, setLocationsList] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
            .then(response => response.json())
            .then((locations) => {
                setLocationsList(locations)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )
    return <>
<h2>Locations List!</h2>

<article className="locations_list">
    {
        locationsList.map(
            (locations) => {
                return <section key={locations.id} className="locations_listitem">
                    <ul>
                        <li>Address: {locations.address}</li> 
                        <li>Size: {locations.locationSqFt} </li>
                    </ul>

                </section>
            }
        )
    }
</article>
</>
}


