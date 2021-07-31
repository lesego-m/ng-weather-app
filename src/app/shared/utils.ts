
import { Observable } from "rxjs";
import { Coodinates, DailyWeather, DefaultCoordinates } from "../models";
import { SearchService } from "../services/search.service";

export function getCurrentLocation(search: SearchService): Observable<DailyWeather[]> {
    if (!navigator?.geolocation) {
        console.log("Geolocation is not supported by this browser.");
    }

    let userCoordinates: Coodinates = { lat: DefaultCoordinates.lat, lon: DefaultCoordinates.lon };

    navigator.geolocation.getCurrentPosition(
        (userPosition: GeolocationPosition) => {
            const { latitude, longitude } = userPosition.coords;
            console.log(`User allowed location access. Position: ${latitude}, ${longitude}`, userPosition);
            userCoordinates = { lat: latitude, lon: longitude };
        },
        (error: GeolocationPositionError) => {
            const { code, message } = error;
            console.log(`User rejected location access code: ${code}, error message is: ${message}`);
        }
    );

    return search.searchByCoodinates(userCoordinates);
}