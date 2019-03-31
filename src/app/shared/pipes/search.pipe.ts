import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filterString: any = '', propName: string = ''): any {
    if (!value || value.length === 0 || !filterString) {
      return value;
    }

    const resultArray: any[] = [];

    for (const item of value) {
      if (item[propName].toLowerCase().includes(filterString.toLowerCase())) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}
