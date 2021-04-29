import { Component, OnInit } from '@angular/core';
import * as jsonData from '../../assets/data-events/events.json';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hasselt-detail',
  templateUrl: './hasselt-detail.component.html',
  styleUrls: ['./hasselt-detail.component.css']
})
export class HasseltDetailComponent implements OnInit {

  products = (jsonData as any).default;

  colors = ["#99ff99", "#66ffff", "#9999ff", "#ff99cc", "#ffff66 ", "#ccff66", "#66ffff"]
  events = []

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    document.getElementById('banner1').style.backgroundImage = "url('../../assets/images/ha_banner_2.jpg')";
    document.getElementById('banner2').style.backgroundImage = "url('../../assets/images/ha_banner_1.png')" ;
    for (let activity of this.products) {
      if(activity.location == "Hasselt"){
        let event = new Activity(activity.name, activity.selected)
        this.events.push(event)
      }
    }
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
    console.log('logging event')
    console.log(event)
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
