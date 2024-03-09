"use client";

import { useState } from 'react';
import Link from 'next/link';
import { LatLng } from '../common/types';
import Location from './location';

// TODO
// - Location entry component (needs design)

export default function Locations() {

    const [ locations, setLocations ] = useState<LatLng[]>([]);

    function addLocation(latLng: LatLng) {
        setLocations([...locations, latLng]);
    }

    function handleAddClick() {
        const location = generateRandomLocation();
        addLocation(location);
    }

    function editLocationHandler(index: number) {
        // TODO
        return () => {};
    }

    function removeLocationHandler(index: number) {
        return () => {
            setLocations(locations.filter((_, i) => i !== index));
        };
    }

    const elements = locations.map((location, index) => 
        <Location
            key={index}
            location={location}
            editing={false}
            onEdit={ () => editLocationHandler(index) }
            onDelete={ () => removeLocationHandler(index) }
        ></Location>
    );

    return (
        <>
            <section>
                { elements }
                <button onClick={handleAddClick}>
                    { locations.length ? 'Add another' : 'Add a location' }
                </button>
            </section>
            { locations.length
                ? <section>
                    <Link className="btn primary" href="/results">Let's go!</Link>
                </section>
                : ''
            }
        </>
    );
}

function generateRandomLocation(): LatLng {
    return {
        lat: 51.508 - (.5 - Math.random()),
        lng:  0.130 - (.5 - Math.random())
    };
}
