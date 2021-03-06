import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hasselt-detail',
  templateUrl: './hasselt-detail.component.html',
  styleUrls: ['./hasselt-detail.component.css']
})
export class HasseltDetailComponent implements OnInit {

  events = [["event1", "#99ff99"], ["event2", "#66ffff"], ["event3", "#9999ff"], ["event4", "#ff99cc"], ["event5", "#ffff66 "], ["event6", "#ccff66"]]

  constructor() { }

  ngOnInit(): void {
    this.createPage();
  }

  createPage() {
    for (let i = 0; i <this.events.length; i++){
      var id = "card" + i;
      console.log(id)
      document.getElementById(id).style.background =  "linear-gradient(to bottom right, " + this.events[i][1] + ", #ffffff 100%)";
      document.getElementById(id).addEventListener("click", (e:Event) => this.openEvent(this.events[i][0]));
      document.getElementById(id).innerHTML = this.events[i][0];
    }
  }


  openEvent(event: string){
    console.log(event)
  }

}
