import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summery',
})
export class SummeryPipe implements PipeTransform {
  transform(value: string, x: number = 50): string {
    if (x <= 0) {
      return '';
    }
    return value.substring(0, x) + '...';
  }
}
