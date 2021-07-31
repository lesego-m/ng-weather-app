import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureUnits } from '../models';

@Pipe({
    name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {
    transform(temperature: number, unit: string): number {

        const getCelsius = (temp: number) => temp - 273.15; // Kelvin to Celsius
        const getFahrenheit = (temp: number) => (temp - 273.15) * (9 / 5) + 32; // Kelvin to Fahrenheit
        let convertedTemp!: number;

        if (unit === TemperatureUnits.C) {
            convertedTemp = getCelsius(temperature);
        }

        if (unit === TemperatureUnits.F) {
            convertedTemp = getFahrenheit(temperature);
        }

        return Math.floor(convertedTemp);
    }
}
