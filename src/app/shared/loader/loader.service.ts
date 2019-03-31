import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class LoaderService {

  public usersLoaded: Subject<void>;

  constructor() {
    this.usersLoaded = new Subject<void>();
  }
}
