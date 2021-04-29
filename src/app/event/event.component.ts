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
  products: any = (jsonData as any).default;
  
  title: string;
  text: string;
  images: string;
  photos= "";
  itemIsFound = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    
    this.data = this.dataService.data;
    this.dataService.data = undefined;
    for (let activity of this.products){
      if(activity.name == this.data){
        this.title = activity.name;
        this.text = activity.text;
        this.images = activity.images;
        this.itemIsFound = true;
      }
    }

    if(this.itemIsFound){
      var imagesArray = this.images.split(",")
      console.log(imagesArray.length)
      if(imagesArray.length > 0 && imagesArray[0] != ""){
        this.photos = "Afbeeldingen"
        for(var i = 0; i < imagesArray.length; i++) {
          console.log(imagesArray[i] + "");
          (document.getElementById("image" + i) as HTMLImageElement).src = "../../assets/images-events/" + imagesArray[i];
          (document.getElementById("image" + i) as HTMLImageElement).style.visibility = "visible";
        }
      }
    } else {
      this.title = "Er ging iet mis";
    }
    
  }

}
