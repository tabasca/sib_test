import {  Component, OnInit } from '@angular/core';
import { FormattedUser } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { FormControl } from '@angular/forms';
import { Filters } from '../../models/filters';

@Component({
  selector: 'app-users-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  public pageSizeCtrl: FormControl;
  public filters: Filters;

  constructor(
    private _usersService: UsersService
  ) { }

  ngOnInit() {
    this.pageSizeCtrl = new FormControl(this._usersService.pageSize);

    this._usersService.filtersChanged
      .subscribe(filters => this.filters = filters);
  }

  public get users(): FormattedUser[] {
    return this._usersService.users;
  }

  public set pageSize(size: number) {
    this._usersService.pageSize = size;
  }

  public get pageSize(): number {
    return this._usersService.pageSize;
  }

  public get currentPage(): number {
    return this._usersService.currentPage;
  }
}
