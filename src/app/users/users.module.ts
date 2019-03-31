import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DateAdapter,
  MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatButtonModule,
  MatDatepickerModule, MatDividerModule,
  MatFormFieldModule,
  MatInputModule, MatListModule, MatSelectModule, NativeDateAdapter
} from '@angular/material';

import { UsersRoutingModule } from './users-routing.module';

import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/table/header/header.component';
import { UsersComponent } from './users.component';
import { FooterComponent } from './components/table/footer/footer.component';
import { ItemComponent } from './components/table/item/item.component';

import { UsersService } from './services/users.service';
import { UsersApiService } from './services/users.api.service';

import { SearchPipe } from '../shared/pipes/search.pipe';
import { DateFilterPipe } from '../shared/pipes/date-filter.pipe';
import { PaginationPipe } from '../shared/pipes/pagination.pipe';

const APP_DATE_FORMATS = {
  parse: {
    dateInput: 'l',
  },
  display: {
    dateInput: 'l',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    UsersComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent,
    ItemComponent,
    SearchPipe,
    DateFilterPipe,
    PaginationPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatListModule,
    MatSelectModule,
    UsersRoutingModule
  ],
  providers: [
    UsersService,
    UsersApiService,
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
  ]
})
export class UsersModule { }
