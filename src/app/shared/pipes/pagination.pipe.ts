import { Pipe, PipeTransform } from '@angular/core';
import { UsersService } from '../../users/services/users.service';

@Pipe({
  name: 'pagination',
  pure: false
})
export class PaginationPipe implements PipeTransform {

  constructor(
    private _usersService: UsersService
  ) {}

  transform(value: any, itemsPerPage: number, currentPage: number): any[] {
    if (!value || value.length === 0) {
      return value;
    }

    this._usersService.totalCount = value.length;

    const from = currentPage * itemsPerPage;
    const to = from + itemsPerPage;

    return value.slice(from, to);
  }

}
