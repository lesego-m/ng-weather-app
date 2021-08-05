import { IconsPipe } from "./icons.pipe";
import { WEATHER_MOCK_DATA } from 'src/app/models';

describe('ConvertIconsPipe', () => {

  const pipe = new IconsPipe();
  const weatherIcon: string = WEATHER_MOCK_DATA.list[0].weather[0].icon;

  it('transforms weather icon name to a font name', () => {
    expect(pipe.transform(weatherIcon)).toBe('cloud');
  });

});
