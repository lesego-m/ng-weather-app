export interface Forecast {
    clouds: { all: number };
    dt: number;
    dt_txt: string;
    main: CurrentWeather;
    pop: number;
    sys: { pod: string };
    visibility: number;
    weather: Weather[];
    wind: Wind;
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Wind {
    deg: number;
    dust: number;
    speed: number;
}

interface CurrentWeather {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
}