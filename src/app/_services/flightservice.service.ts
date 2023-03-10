import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flights } from '../model/flights.model';

const baseUrl = 'http://localhost:1020/api/admin/';
@Injectable({
    providedIn:'root'
})
export class FlightService{
     constructor(private http: HttpClient) { }
     getAll(): Observable<Flights[]> {
    return this.http.get<Flights[]>(baseUrl);
  }
}