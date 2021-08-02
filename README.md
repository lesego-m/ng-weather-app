# Angular Simple Weather App

This simple Location and Weather app is built using Angular 12 which uses Webpack and Jasmine under the hood. The UI was inspired by [https://www.msn.com/en-za/weather](https://www.msn.com/en-za/weather)

## Requirements

- node - [nodejs.org/en/download](https://nodejs.org/en/download/)
- angular cli - `npm install -g @angular/cli`


## Installation

```
git clone https://github.com/lesego-m/ng-weather-app.git
cd ng-weather-app
npm i
```

You will need an API key to run this app locally on your machine. Register at [openweathermap.org](https://openweathermap.org) to get your key then add it to the `environment.ts` file in the environments folder in the root directory:

```
Api: {
    URL: 'https://api.openweathermap.org/data/2.5',
    KEY: 'YOUR-API-KEY-GOES-HERE'
  }
```

Run the app loacally
`ng serve`

## Features

- Search by city or country name
- Show min and max temperatures
- Styled with latest Bootstrap and FontAwesome Icons libraries
- Fully Responsive layout

## 3rd Pary

- OpenWeather forecast 5 API - [openweathermap.org/forecast5](https://openweathermap.org/forecast5)
- Bootstrap 5x - [getbootstrap.com](https://getbootstrap.com/)
- Free Angular Font Awesome 5 - `ng add @fortawesome/angular-fontawesome@0.9.0`

## Additional work still pending

- Tests using Jasmine
- User feedback when data is being fetched from API (eg, spinner)
- Remove error message when user starts to type in search field again
- Typeahead on search feature to enhance user experience

