export interface DailyWeather {
    [x: string]: any;
    dt: number;
    sunrise?: number;
    sunset?: number;
    moonrise?: number;
    moonset?: number;
    moon_phase?: number;
    temp: temperature;
    feels_like?: feelsLike;
    pressure?: number;
    humidity?: number;
    dew_point?: number;
    wind_speed?: number;
    wind_deg?: number;
    weather?: weatherDescription[],
    clouds?: number;
    pop?: number;
    rain?: number;
    uvi?: number;
}

interface weatherDescription {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface feelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

interface temperature {
    min: number;
    max: number;
    night?: number;
    eve?: number;
    morn?: number;
}