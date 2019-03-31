import { Component, OnInit } from '@angular/core';

import { UsersService } from './services/users.service';
import { LoaderService } from '../shared/loader/loader.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  constructor(
    private _usersService: UsersService,
    private _loaderService: LoaderService
  ) { }

  ngOnInit() {
    this._usersService.getUsers().subscribe(() => this._loaderService.usersLoaded.next());
  }

}
