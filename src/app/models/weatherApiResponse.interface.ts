import { CityInfo, Forecast } from './';

export interface WeatherApiResponse {
    city: CityInfo;
    cnt?: number;
    cod?: string;
    list: Forecast[];
    message?: number;
}

export interface ForecastAndTimezone extends WeatherApiResponse {
    timezone: number;
}