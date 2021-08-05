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
  list: [
    {
      "dt": 1628024400,
      "main": {
        "temp": 286.98,
        "feels_like": 286.51,
        "temp_min": 286.74,
        "temp_max": 286.98,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1013,
        "humidity": 80,
        "temp_kf": 0.24
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 75
      },
      "wind": {
        "speed": 2.16,
        "deg": 143,
        "gust": 2.87
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-08-03 21:00:00"
    },
    {
      "dt": 1628035200,
      "main": {
        "temp": 286.76,
        "feels_like": 286.4,
        "temp_min": 286.32,
        "temp_max": 286.76,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1013,
        "humidity": 85,
        "temp_kf": 0.44
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 62
      },
      "wind": {
        "speed": 2.11,
        "deg": 145,
        "gust": 2.4
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-08-04 00:00:00"
    },
    {
      "dt": 1628046000,
      "main": {
        "temp": 286.37,
        "feels_like": 286.1,
        "temp_min": 286.07,
        "temp_max": 286.37,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1013,
        "humidity": 90,
        "temp_kf": 0.3
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 57
      },
      "wind": {
        "speed": 2.3,
        "deg": 157,
        "gust": 2.72
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-08-04 03:00:00"
    },
    {
      "dt": 1628056800,
      "main": {
        "temp": 286.2,
        "feels_like": 285.96,
        "temp_min": 286.2,
        "temp_max": 286.2,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1015,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 74
      },
      "wind": {
        "speed": 2.76,
        "deg": 164,
        "gust": 3.96
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-04 06:00:00"
    },
    {
      "dt": 1628067600,
      "main": {
        "temp": 288.67,
        "feels_like": 288.26,
        "temp_min": 288.67,
        "temp_max": 288.67,
        "pressure": 1023,
        "sea_level": 1023,
        "grnd_level": 1016,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.58,
        "deg": 161,
        "gust": 4.96
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-04 09:00:00"
    },
    {
      "dt": 1628078400,
      "main": {
        "temp": 289.5,
        "feels_like": 289.04,
        "temp_min": 289.5,
        "temp_max": 289.5,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1015,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 89
      },
      "wind": {
        "speed": 5.3,
        "deg": 175,
        "gust": 6.47
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-04 12:00:00"
    },
    {
      "dt": 1628089200,
      "main": {
        "temp": 288.6,
        "feels_like": 288.26,
        "temp_min": 288.6,
        "temp_max": 288.6,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1015,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 10
      },
      "wind": {
        "speed": 5.6,
        "deg": 165,
        "gust": 7.57
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-04 15:00:00"
    },
    {
      "dt": 1628100000,
      "main": {
        "temp": 287.1,
        "feels_like": 286.9,
        "temp_min": 287.1,
        "temp_max": 287.1,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1016,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 5.12,
        "deg": 156,
        "gust": 7.76
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-08-04 18:00:00"
    },
    {
      "dt": 1628110800,
      "main": {
        "temp": 286.63,
        "feels_like": 286.46,
        "temp_min": 286.63,
        "temp_max": 286.63,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1016,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 4
      },
      "wind": {
        "speed": 3.99,
        "deg": 151,
        "gust": 5.56
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-08-04 21:00:00"
    },
    {
      "dt": 1628121600,
      "main": {
        "temp": 286.07,
        "feels_like": 285.82,
        "temp_min": 286.07,
        "temp_max": 286.07,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1015,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 4
      },
      "wind": {
        "speed": 3.41,
        "deg": 149,
        "gust": 4.35
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-08-05 00:00:00"
    },
    {
      "dt": 1628132400,
      "main": {
        "temp": 285.42,
        "feels_like": 285.05,
        "temp_min": 285.42,
        "temp_max": 285.42,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1014,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 1
      },
      "wind": {
        "speed": 2.86,
        "deg": 143,
        "gust": 3.58
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-08-05 03:00:00"
    },
    {
      "dt": 1628143200,
      "main": {
        "temp": 285.16,
        "feels_like": 284.74,
        "temp_min": 285.16,
        "temp_max": 285.16,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1015,
        "humidity": 89,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 1
      },
      "wind": {
        "speed": 2.13,
        "deg": 127,
        "gust": 2.48
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-05 06:00:00"
    },
    {
      "dt": 1628154000,
      "main": {
        "temp": 288.55,
        "feels_like": 287.97,
        "temp_min": 288.55,
        "temp_max": 288.55,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1015,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.01,
        "deg": 108,
        "gust": 1.18
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-05 09:00:00"
    },
    {
      "dt": 1628164800,
      "main": {
        "temp": 290.59,
        "feels_like": 289.96,
        "temp_min": 290.59,
        "temp_max": 290.59,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1013,
        "humidity": 60,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 0.74,
        "deg": 248,
        "gust": 1.07
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-05 12:00:00"
    },
    {
      "dt": 1628175600,
      "main": {
        "temp": 289.54,
        "feels_like": 288.98,
        "temp_min": 289.54,
        "temp_max": 289.54,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1013,
        "humidity": 67,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.82,
        "deg": 219,
        "gust": 1.86
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-05 15:00:00"
    },
    {
      "dt": 1628186400,
      "main": {
        "temp": 287.66,
        "feels_like": 287.15,
        "temp_min": 287.66,
        "temp_max": 287.66,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1014,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 0.52,
        "deg": 260,
        "gust": 0.67
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-08-05 18:00:00"
    },
    {
      "dt": 1628197200,
      "main": {
        "temp": 286.96,
        "feels_like": 286.38,
        "temp_min": 286.96,
        "temp_max": 286.96,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1014,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.65,
        "deg": 336,
        "gust": 1.67
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-08-05 21:00:00"
    },
    {
      "dt": 1628208000,
      "main": {
        "temp": 286.17,
        "feels_like": 285.59,
        "temp_min": 286.17,
        "temp_max": 286.17,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1013,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.12,
        "deg": 348,
        "gust": 2.17
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-08-06 00:00:00"
    },
    {
      "dt": 1628218800,
      "main": {
        "temp": 285.45,
        "feels_like": 284.9,
        "temp_min": 285.45,
        "temp_max": 285.45,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1013,
        "humidity": 83,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.41,
        "deg": 355,
        "gust": 2.65
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-08-06 03:00:00"
    },
    {
      "dt": 1628229600,
      "main": {
        "temp": 285.02,
        "feels_like": 284.48,
        "temp_min": 285.02,
        "temp_max": 285.02,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1014,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.79,
        "deg": 7,
        "gust": 3.11
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-06 06:00:00"
    },
    {
      "dt": 1628240400,
      "main": {
        "temp": 288.2,
        "feels_like": 287.75,
        "temp_min": 288.2,
        "temp_max": 288.2,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1015,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.33,
        "deg": 354,
        "gust": 4
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-06 09:00:00"
    },
    {
      "dt": 1628251200,
      "main": {
        "temp": 289.7,
        "feels_like": 289.24,
        "temp_min": 289.7,
        "temp_max": 289.7,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1013,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.94,
        "deg": 321,
        "gust": 3.93
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-06 12:00:00"
    },
    {
      "dt": 1628262000,
      "main": {
        "temp": 288.83,
        "feels_like": 288.39,
        "temp_min": 288.83,
        "temp_max": 288.83,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1013,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 5
      },
      "wind": {
        "speed": 1.78,
        "deg": 309,
        "gust": 2.18
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-06 15:00:00"
    },
    {
      "dt": 1628272800,
      "main": {
        "temp": 286.93,
        "feels_like": 286.48,
        "temp_min": 286.93,
        "temp_max": 286.93,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1015,
        "humidity": 81,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 3
      },
      "wind": {
        "speed": 0.5,
        "deg": 314,
        "gust": 0.82
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-08-06 18:00:00"
    },
    {
      "dt": 1628283600,
      "main": {
        "temp": 286.41,
        "feels_like": 285.85,
        "temp_min": 286.41,
        "temp_max": 286.41,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1014,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 1
      },
      "wind": {
        "speed": 0.8,
        "deg": 37,
        "gust": 0.89
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-08-06 21:00:00"
    },
    {
      "dt": 1628294400,
      "main": {
        "temp": 285.92,
        "feels_like": 285.24,
        "temp_min": 285.92,
        "temp_max": 285.92,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1013,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 1.23,
        "deg": 62,
        "gust": 1.3
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-08-07 00:00:00"
    },
    {
      "dt": 1628305200,
      "main": {
        "temp": 285.71,
        "feels_like": 284.93,
        "temp_min": 285.71,
        "temp_max": 285.71,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1012,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 0.95,
        "deg": 107,
        "gust": 0.93
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-08-07 03:00:00"
    },
    {
      "dt": 1628316000,
      "main": {
        "temp": 285.6,
        "feels_like": 284.7,
        "temp_min": 285.6,
        "temp_max": 285.6,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1013,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.82,
        "deg": 107,
        "gust": 0.81
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-07 06:00:00"
    },
    {
      "dt": 1628326800,
      "main": {
        "temp": 288.84,
        "feels_like": 287.9,
        "temp_min": 288.84,
        "temp_max": 288.84,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1012,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 0.46,
        "deg": 84,
        "gust": 0.51
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-07 09:00:00"
    },
    {
      "dt": 1628337600,
      "main": {
        "temp": 291.11,
        "feels_like": 290.11,
        "temp_min": 291.11,
        "temp_max": 291.11,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1010,
        "humidity": 44,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 0.99,
        "deg": 319,
        "gust": 1.75
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-07 12:00:00"
    },
    {
      "dt": 1628348400,
      "main": {
        "temp": 290.1,
        "feels_like": 289.18,
        "temp_min": 290.1,
        "temp_max": 290.1,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 1008,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.87,
        "deg": 281,
        "gust": 1.24
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-07 15:00:00"
    },
    {
      "dt": 1628359200,
      "main": {
        "temp": 288.17,
        "feels_like": 287.24,
        "temp_min": 288.17,
        "temp_max": 288.17,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1007,
        "humidity": 58,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.73,
        "deg": 346,
        "gust": 0.98
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-08-07 18:00:00"
    },
    {
      "dt": 1628370000,
      "main": {
        "temp": 287.21,
        "feels_like": 286.29,
        "temp_min": 287.21,
        "temp_max": 287.21,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1006,
        "humidity": 62,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 2.93,
        "deg": 324,
        "gust": 3.37
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-08-07 21:00:00"
    },
    {
      "dt": 1628380800,
      "main": {
        "temp": 286.03,
        "feels_like": 285.28,
        "temp_min": 286.03,
        "temp_max": 286.03,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1006,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 4.32,
        "deg": 357,
        "gust": 6.28
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-08 00:00:00"
    },
    {
      "dt": 1628391600,
      "main": {
        "temp": 284.72,
        "feels_like": 283.92,
        "temp_min": 284.72,
        "temp_max": 284.72,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1005,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 91
      },
      "wind": {
        "speed": 6.64,
        "deg": 7,
        "gust": 11.55
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-08 03:00:00"
    },
    {
      "dt": 1628402400,
      "main": {
        "temp": 285.54,
        "feels_like": 284.95,
        "temp_min": 285.54,
        "temp_max": 285.54,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1006,
        "humidity": 81,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 96
      },
      "wind": {
        "speed": 9.45,
        "deg": 355,
        "gust": 15.76
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-08 06:00:00"
    },
    {
      "dt": 1628413200,
      "main": {
        "temp": 287.62,
        "feels_like": 287.26,
        "temp_min": 287.62,
        "temp_max": 287.62,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1006,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 13.38,
        "deg": 344,
        "gust": 19.14
      },
      "visibility": 10000,
      "pop": 0.32,
      "rain": {
        "3h": 0.11
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-08 09:00:00"
    },
    {
      "dt": 1628424000,
      "main": {
        "temp": 285.62,
        "feels_like": 285.22,
        "temp_min": 285.62,
        "temp_max": 285.62,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 1008,
        "humidity": 88,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 10.65,
        "deg": 279,
        "gust": 16.82
      },
      "visibility": 9772,
      "pop": 1,
      "rain": {
        "3h": 8.17
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-08 12:00:00"
    },
    {
      "dt": 1628434800,
      "main": {
        "temp": 286.07,
        "feels_like": 285.4,
        "temp_min": 286.07,
        "temp_max": 286.07,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1011,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 11.04,
        "deg": 262,
        "gust": 15.61
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 1.49
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-08 15:00:00"
    },
    {
      "dt": 1628445600,
      "main": {
        "temp": 284.81,
        "feels_like": 283.91,
        "temp_min": 284.81,
        "temp_max": 284.81,
        "pressure": 1024,
        "sea_level": 1024,
        "grnd_level": 1017,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 65
      },
      "wind": {
        "speed": 8.94,
        "deg": 224,
        "gust": 12.13
      },
      "visibility": 10000,
      "pop": 0.99,
      "rain": {
        "3h": 0.46
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-08-08 18:00:00"
    }
  ]
}
