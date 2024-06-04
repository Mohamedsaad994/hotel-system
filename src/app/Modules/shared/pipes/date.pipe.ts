import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any, key: string): any {
    switch (key) {
      case 'startDate':
      case 'endDate':
        return new Date(value).toLocaleDateString();
      default:
        return value;
    }
  }

}
