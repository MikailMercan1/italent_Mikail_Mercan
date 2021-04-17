import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import * as jsonData from '../../assets/data-events/events.json';

@Component({
  selector: 'app-sint-truiden-detail',
  templateUrl: './sint-truiden-detail.component.html',
  styleUrls: ['./sint-truiden-detail.component.css']
})
export class SintTruidenDetailComponent implements OnInit {

  
  products = (jsonData as any).default;
  
  colors = ["#99ff99", "#66ffff", "#9999ff", "#ff99cc", "#ffff66 ", "#ccff66"]
  events = []

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    document.getElementById('banner1').style.backgroundImage = "url('../../assets/images/st_banner_2.jpg')";
    document.getElementById('banner2').style.backgroundImage = "url('../../assets/images/st_banner_1.jpg')" ;
    for (let activity of this.products) {
      if(activity.location == "Sint-Truiden"){
        let event = new Activity(activity.name, activity.selected)
        this.events.push(event)
      }
    }
    
    console.log(this.events)
    this.createPage();
    
  }

  createPage() {
    for (let i = 0; i <this.events.length; i++){
      var id = "card" + i;
      console.log(id)
      document.getElementById(id).style.background =  "linear-gradient(to bottom right, " + this.colors[i] + ", #ffffff 100%)";
      document.getElementById(id).addEventListener("click", (e:Event) => this.openEvent(this.events[i].eventTitle));
      
      if(this.events[i].isSelected == "True"){
        document.getElementById(id).innerHTML = this.events[i].eventTitle + "⭐";
      } else {
        document.getElementById(id).innerHTML = this.events[i].eventTitle;
      }
    }
  }


  openEvent(event: string){
    this.dataService.data = event
    this.router.navigate(['/event'])
  }

}

class Activity {
  eventTitle: string;
  isSelected: string;
 
  constructor(eventTitle: string, isSelected: string){
    this.eventTitle = eventTitle;
    this.isSelected = isSelected;
  }
}