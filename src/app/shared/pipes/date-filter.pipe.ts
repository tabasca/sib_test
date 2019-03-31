import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(value: any, filterString: Date = null, propName: string = '', direction: 'from' | 'to'): any {
    if (!value || value.length === 0 || !filterString) {
      return value;
    }

    const resultArray = [];

    for (const item of value) {
      if (direction === 'from'
        ? new Date(item[propName]).valueOf() >= filterString.valueOf()
        : new Date(item[propName]).valueOf() <= filterString.valueOf()) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}
