import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators';

import { UsersApiService } from './users.api.service';
import { FormattedUser } from '../models/user';

import { Filters } from '../models/filters';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class UsersService {

  private _users: FormattedUser[];
  private _totalCount: number;

  private _page: number;
  private _pageSize: number;

  // events
  public filtersChanged: BehaviorSubject<Filters>;

  constructor(
    private _usersApiService: UsersApiService
  ) {
    this._page = 0;
    this._pageSize = 10;

    this.filtersChanged = new BehaviorSubject<Filters>({
      lastName: '',
      phone: '',
      city: '',
      dateFrom: null,
      dateTo: null
    });
  }

  public get users(): FormattedUser[] {
    return this._users || [];
  }

  public set page(pageNum: number) {
    this._page = pageNum;
  }

  public set pageSize(size: number) {
    this._pageSize = size;
  }

  public get pageSize(): number {
    return this._pageSize;
  }

  public get currentPage(): number {
    return this._page;
  }

  public set totalCount(count: number) {
    this._totalCount = count;
  }

  public get pagesCount(): number {
    return this._totalCount ? Math.ceil(this._totalCount / this._pageSize) : 0;
  }

  public getUsers() {
    return this._usersApiService.getUsers()
      .pipe(
        tap(data => {
          this._totalCount = data.info.results;
          this._users = data.results.map(_user => Object.assign({
            lastName: _user.name.last,
            city: _user.location.city,
          }, _user));
        })
      )
  }
}
