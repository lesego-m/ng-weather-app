import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'internationalDate'
})
export class InternationalDatePipe implements PipeTransform {
    transform(unix_timestamp: number, timezone: string): string {
        const date = new Date(unix_timestamp * 1000);
        const options = {
            timeZone: timezone
        };
        return new Intl.DateTimeFormat('default', options).format(date);
    }
}