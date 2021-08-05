import { ConvertDatePipe } from "./convert-date.pipe";

describe('ConvertDatePipe', () => {

  const pipe = new ConvertDatePipe();
  const date: number = 1628024400; // unix timestamp
  const convertedDate = date * 1000;

  it('transforms unix timestamp to human readable datetime', () => {
    expect(pipe.transform(date)).toBe(convertedDate);
  });

});
