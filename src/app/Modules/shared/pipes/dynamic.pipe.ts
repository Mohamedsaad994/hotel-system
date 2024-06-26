import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicPipe'
})
export class DynamicPipe implements PipeTransform {
  transform(value: any, key: string): any {
    switch (key) {
      case 'createdAt':
      case 'updatedAt':
        case 'startDate':
      case 'endDate':
        return new Date(value).toLocaleDateString();
      default:
        return value;
    }

   

  }

  
}
