import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users-table-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public filtersForm: FormGroup;

  @ViewChild('dateFrom') dateFromRef: ElementRef;
  @ViewChild('dateTo') dateToRef: ElementRef;

  public dateFrom: Date;
  public dateTo: Date;

  constructor(
    private _usersService: UsersService
  ) { }

  ngOnInit() {
    this._initForm();

    this.filtersForm.valueChanges
      .subscribe(data => {
        this._usersService.filtersChanged.next({
          lastName: data.lastName,
          phone: data.phone,
          city: data.city,
          dateFrom: this.dateFrom,
          dateTo: this.dateTo
        });
      });
  }

  private _initForm() {
    this.filtersForm = new FormGroup({
      'lastName': new FormControl(''),
      'phone': new FormControl(''),
      'city': new FormControl(''),
      'dateFrom': new FormControl({ value: '', disabled: true }),
      'dateTo': new FormControl({ value: '', disabled: true })
    })
  }

  public onDateChange(val: Date, type: 'from' | 'to') {
    if (type === 'from') {
      this.dateFrom = val;
    }
    if (type === 'to') {
      this.dateTo = val;
    }

    this._usersService.filtersChanged.next({
      lastName: this.filtersForm.value.lastName,
      phone: this.filtersForm.value.phone,
      city: this.filtersForm.value.city,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo
    });
  }

  public onResetFiltersClick() {
    this.dateFrom = null;
    this.dateTo = null;
    this.filtersForm.reset();
  }

}
