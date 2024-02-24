"use client";

import { useState } from 'react';
import { LatLng } from '../common/types';
import Location from './location';

// TODO
// - Location entry component (needs design)
// - Button to take the user to results page

export default function Locations() {

    const [ locations, setLocations ] = useState<LatLng[]>([]);

    function addLocation(latLng: LatLng) {
        setLocations([...locations, latLng]);
    }

    function handleAddClick() {
        const location = generateRandomLocation();
        addLocation(location);
    }

    const elements = locations.map((location, index) => 
        <Location key={index} location={location}></Location>
    );

    const buttonText = locations.length ? 'Add another' : 'Add a location';

    return (
        <section>
            { elements }
            <button className="btn" onClick={handleAddClick}>{ buttonText }</button>
        </section>
    );
}

function generateRandomLocation(): LatLng {
    return {
        lat: 51.508 - (.5 - Math.random()),
        lng:  0.130 - (.5 - Math.random())
    };
}
