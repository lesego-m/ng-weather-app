import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureUnits } from '../models';
import { getCelsius, getFahrenheit } from 'src/app/shared';
@Pipe({
    name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {
    transform(temperature: number, unit: string): string {

        let convertedTemp!: number;

        if (unit === TemperatureUnits.C) {
            convertedTemp = getCelsius(temperature);
        }

        if (unit === TemperatureUnits.F) {
            convertedTemp = getFahrenheit(temperature);
        }

        return `${convertedTemp} °${unit}`;
    }
}
