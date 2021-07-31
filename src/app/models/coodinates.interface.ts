export interface CoodinatesResponse { // TODO: rename interface since timezone has been added
    coord: Coodinates;
    timezone: number;
}

export interface Coodinates {
    lon: number;
    lat: number;
}