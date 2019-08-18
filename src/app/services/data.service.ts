import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSet } from '../models/data.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(
  private http: HttpClient,
) { }

public getData(): Observable<DataSet> {
  return this.http.get<DataSet>('../../assets/screenings.json');
}

}
