import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 
import * as jsonData from '../../assets/data-events/events.json';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  data: string;
  events = ["event1", "event2", "event3"]
  
  products: any = (jsonData as any).default;
  title: string;
  text: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.data;
    this.dataService.data = undefined;
    const index = this.events.indexOf(this.data);
    if(index > -1){
      console.log()
      this.title = this.products[index].name
      this.text = this.products[index].text
    } else {
      this.title = "Something went wrong."
    }
    
  }

}
