import { Pipe, PipeTransform } from '@angular/core';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { Icons } from '../models';

@Pipe({
    name: 'icons'
})
export class IconsPipe implements PipeTransform {
    transform(iconId: string): IconName {
        return (<any>Icons)[`icon${iconId}`];
    }
}
