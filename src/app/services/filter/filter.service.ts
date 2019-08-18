import { GenericFilter } from './generic-filter';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilterService<D, F> {

  private filter: GenericFilter<D, F>;
  private dataList: BehaviorSubject<D[]> = new BehaviorSubject([]);
  private filterData$: BehaviorSubject<F> = new BehaviorSubject(null);
  private filteredData$: Observable<D[]>;

  constructor() {
    this.setupRx();
  }

  private setupRx() {
    this.filteredData$ = combineLatest(
      this.dataList,
      this.filterData$,
    )
    .pipe(
      map(value => {
        return this.filter ? this.filter.filterList(value[0], value[1]) : value[0];
      }),
      shareReplay(1)
    );
  }

  public setFilter(filter) {
    this.filter = filter;
  }

  get data(): D[] {
    return this.dataList.value;
  }

  set data(data: D[]) {
    this.dataList.next(data);
  }

  get filterData(): F {
    return this.filterData$.value;
  }

  set filterData(filterData: F) {
    this.filterData$.next(filterData);
  }

  get filteredData(): Observable<D[]> {
    return this.filteredData$;
  }

}
