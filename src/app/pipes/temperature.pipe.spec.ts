import { TemperaturePipe } from "./temperature.pipe";
import { WEATHER_MOCK_DATA } from 'src/app/models';
import { getCelsius, getFahrenheit } from 'src/app/shared';

describe('TemperaturePipe', () => {

  const pipe = new TemperaturePipe();
  const temperature: number = WEATHER_MOCK_DATA.list[0].main.temp;
  const fahrenheit: number = getFahrenheit(temperature);
  const celcius: number = getCelsius(temperature);

  it('should convert temperature from Kelvin to Celcius and return formatted value', () => {
    expect(pipe.transform(temperature, 'C')).toBe(`${celcius} °C`);
  });

  it('should convert temperature from Kelvin to Fahrenheit and return formatted value', () => {
    expect(pipe.transform(temperature, 'F')).toBe(`${fahrenheit} °F`);
  });

});
