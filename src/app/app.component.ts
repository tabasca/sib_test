import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  public isLoading: boolean;

  constructor(
    private _loaderService: LoaderService
  ) {
    this.isLoading = true;
  }

  ngOnInit() {
    this._loaderService.usersLoaded
      .subscribe(() => this.isLoading = false)
  }
}
