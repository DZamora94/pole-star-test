import { GenericFilter } from './services/filter/generic-filter';
import { FilterService } from './services/filter/filter.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './services/data.service';
import { Data } from './models/data.models';
import { FilterData } from './models/filter.models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pole-star-test';
  public displayedColumns: string[] = ['name', 'severity', 'created', 'modified'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  public filterForm: FormGroup;
  public dataSource;

  public names: string[];
  public severityList = ['Critical', 'Warning', 'OK'];

  constructor(
    private dataService: DataService,
    private filterService: FilterService<Data, FilterData>,
    private formBuilder: FormBuilder,
  ) {
    this.filterService.setFilter(new GenericFilter());
  }

  private buildForm() {
    this.filterForm = this.formBuilder.group({
      name: [null],
      country_check_severity: [null],
    });
  }

  ngOnInit() {
    this.buildForm();
    this.filterService.filterData = null;
    this.getData();
    this.handleValueChanges();
  }

  private handleValueChanges() {
    this.filterForm.valueChanges
      .subscribe(value => {
        this.filterService.filterData = value;
      });
  }

  private getData() {
    this.dataService.getData()
      .subscribe(dataSet => {
        const data = dataSet.results;
        this.filterService.data = data;
        this.names = data.map(el => el.name);
      });
    this.filterService.filteredData.subscribe(filteredData => {
      this.dataSource = new MatTableDataSource(filteredData);
      this.dataSource.sort = this.sort;
    });
  }
}
