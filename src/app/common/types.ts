
export interface Location { }

export interface LatLng extends Location {
    lat: number;
    lng: number;
}

// Should this go elsewhere?
export interface Destination {
    location: Location;
    name: string;
}
