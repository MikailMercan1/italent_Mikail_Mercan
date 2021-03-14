import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  data: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.data;
    this.dataService.data = undefined;
    console.log(this.data)
  }

}
