import { Weather } from "./weather-response.interface";

export const WEATHER_MOCK_DATA: Weather = {
  city: {
    coord: {
      lat: -33.9342,
      lon: 18.4112
    },
    country: "ZA",
    id: 3369157,
    name: "Cape Town",
    population: 3433441,
    sunrise: 1627969026,
    sunset: 1628006874,
    timezone: 7200,
  },
  list: [{
    dt: 1628002800,
    main: {
      temp: 290.94,
      feels_like: 290.55,
      temp_min: 289.69,
      temp_max: 290.94,
      pressure: 1017,
      sea_level: 1017,
      grnd_level: 1011,
      humidity: 68,
      temp_kf: 1.25
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d"
      }
    ],
    clouds: {
      all: 0
    },
    wind: {
      speed: 1.29,
      deg: 225,
      gust: 1.92
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "d"
    },
    dt_txt: "2021-08-03 15:00:00"
  }
  ]
}
