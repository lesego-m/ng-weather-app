
import { Coodinates, DefaultCoordinates } from "../models";
import { SearchService } from "../services/search.service";

export function getCurrentLocation(search: SearchService): void {
    if (!navigator?.geolocation) {
        console.log("Geolocation is not supported by this browser.");
    }


    navigator.geolocation.getCurrentPosition(
        (userPosition: GeolocationPosition) => {
            const { latitude, longitude } = userPosition.coords;
            const userCoordinates = { lat: latitude, lon: longitude };
            console.log(`User allowed location access. Position: ${latitude}, ${longitude}`, userPosition);
            search.searchByCoodinates(userCoordinates).subscribe();
        },
        (error: GeolocationPositionError) => {
            const { code, message } = error;
            const defaultCoordinates: Coodinates = { lat: DefaultCoordinates.lat, lon: DefaultCoordinates.lon };
            console.log(`User rejected location access code: ${code}, error message is: ${message}`);
            search.searchByCoodinates(defaultCoordinates).subscribe();
        }
    );
}