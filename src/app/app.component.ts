import { Component } from '@angular/core';
import {
  DataStateChangeEvent,
  GridDataResult,
  PageChangeEvent,
} from '@progress/kendo-angular-grid';
import {
  State,
  process,
  SortDescriptor,
  orderBy,
} from '@progress/kendo-data-query';
import { products } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kendo-demo-task';

  public items: any[] = products;
  public mySelection: number[] = [];
  public pageSize = 20;
  public skip = 0;

  public allowUnsort = true;

  public buttonCount = 5;
  public info = true;
  public pageSizes = true;
  public previousNext = true;
  public position: any = 'bottom';
  public type: any = 'numeric';

  constructor() {}

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;

    // Optionally, clear the selection when paging
    // this.mySelection = [];
  }

  cellClickHandler(event: any) {
    console.log(event.dataItem);
  }
}
