import { Pipe, PipeTransform } from '@angular/core';
import { UnixConverter } from '../models';

@Pipe({
    name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {
    transform(unix_timestamp: number): number {
        return unix_timestamp * UnixConverter.rate;
    }
}