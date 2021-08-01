export interface CityInfo {
    coord: Coodinates;
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
}

export interface Coodinates {
    lat: number;
    lon: number;
}