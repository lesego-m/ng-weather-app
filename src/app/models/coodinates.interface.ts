export interface CoodinatesResponse {
    coord: Coodinates;
    timezone?: number | undefined;
}

export interface Coodinates {
    lon: number;
    lat: number;
}