import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users-table-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  constructor(
    private _usersService: UsersService
  ) { }

  public get currentPage() {
    return (this._usersService.currentPage + 1);
  }

  public get pagesCount() {
    return this._usersService.pagesCount;
  }

  public moveForward() {
    this._usersService.page = this.currentPage;
  }

  public moveBackward() {
    this._usersService.page = this.currentPage - 2;
  }

}
