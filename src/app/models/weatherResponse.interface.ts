import { DailyWeather } from './dailyWeather.interface';

export interface WeatherResponse {
    lat: number;
    lon: number;
    timezone?: string;
    timezone_offset?: number;
    daily: DailyWeather;
}