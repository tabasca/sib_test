import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { UsersResponse } from '../models/users-response';

const urls = {
  getList: '/api/raw/task/users.json'
};

@Injectable()
export class UsersApiService {

  constructor(
    private _http: HttpClient
  ) { }

  getUsers(): Observable<UsersResponse> {
    return this._http.get<UsersResponse>(urls.getList);
  }
}
