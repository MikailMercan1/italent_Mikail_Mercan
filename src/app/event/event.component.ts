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
  images: string;
  photos= "";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.data;
    this.dataService.data = undefined;
    const index = this.events.indexOf(this.data);
    if(index > -1){
      console.log()
      this.title = this.products[index].name;
      this.text = this.products[index].text;
      this.images = this.products[index].images;
      var imagesArray = this.images.split(",")
      if(imagesArray.length > 0){

      }
      for(var i = 0; i < this.images.length; i++) {
        this.photos = "Photo's"
      }
    } else {
      this.title = "Something went wrong."
    }
    
  }

}
