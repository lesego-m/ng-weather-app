import { Pipe, PipeTransform } from '@angular/core';
import { getCustomDate } from 'src/app/shared';

@Pipe({
    name: 'internationalDate'
})
export class InternationalDatePipe implements PipeTransform {
    transform(unix_timestamp: number, timezone: string): string {
        const options = {
            timeZone: timezone
        };
        return getCustomDate(unix_timestamp, options);
    }
}