import { FlightService } from './../../_services/flightservice.service';
import { Flights } from './../../model/flights.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flightlist',
  templateUrl: './flightlist.component.html',
  styleUrls: ['./flightlist.component.css']
})
export class FlightlistComponent implements OnInit {
  flights?:Flights[];
  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
    this.retrieveFlights();
  }
  retrieveFlights(): void {
    this.flightService.getAll().subscribe(
        data=> {
          this.flights = data;
          console.log(data);
        },
        error=> {
          console.log(error);
        });
  }
}
