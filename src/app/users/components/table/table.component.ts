import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subject } from 'rxjs/internal/Subject';

import { Filters } from '../../models/filters';
import { FormattedUser } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit, OnDestroy {

  public pageSizeCtrl: FormControl;
  public filters: Filters;

  // subscription
  private _ngUnsubscribe: Subject<void>;

  constructor(
    private _usersService: UsersService
  ) {
    this._ngUnsubscribe = new Subject<void>();
  }

  ngOnInit() {
    this.pageSizeCtrl = new FormControl(this._usersService.pageSize);

    this._usersService.filtersChanged
      .subscribe(filters => this.filters = filters);
  }

  ngOnDestroy() {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
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
