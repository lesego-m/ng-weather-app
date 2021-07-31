import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'internationalDate'
})
export class InternationalDatePipe implements PipeTransform {
    transform(unix_timestamp: number | any, timezone: number | any): string {
        const date = new Date(unix_timestamp * 1000);
        const shortDateOptions: any = {
            timeZone: timezone
        };
        return new Intl.DateTimeFormat('default', shortDateOptions).format(date);
    }
}